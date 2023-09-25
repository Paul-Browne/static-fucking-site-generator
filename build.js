import { cp, mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import XtoCss from "x-to-css";
import * as esbuild from 'esbuild'
import { minify } from 'html-minifier'
import client from "./prismic.js"
import landingPage from "./src/templates/landing-page.js"
import sliceToHTML from "./src/components/sliceToHTML.js";
import footer from "./src/components/footer.js";
import navigation from "./src/components/navigation.js";

XtoCss("src/scss/global.scss", "public/css/styles.css", { maps: true });
cp("src/fonts", "public/fonts", { recursive: true })
cp("src/images", "public/img", { recursive: true })

await esbuild.build({
  entryPoints: ['src/js/scripts.js'],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['es6'],
  outfile: 'public/js/scripts.js'
})

const writeFileToPublic = async  (html, path) => {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, html);
}

const minifyHTML = html => minify(html, {
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    decodeEntities: true
})

const t = Date.now();
let totalBytes = 0;

const footerJSON = await client.getAllByType('footer', {lang: "*" });
const navigationJSON = await client.getAllByType('navigation', {lang: "*" });

const landingPages = await client.getAllByType('landing-page', {lang: "*" });
//const landingPages = await client.getAllByType('landing-page');

const blogPages = await client.getAllByType('blog_post', {lang: "*" });


[...landingPages, ...blogPages].map(page => {
    const html = landingPage({
        lang: page.lang,
        header: navigation(navigationJSON.filter(el => el.lang == page.lang)[0].data, page.lang),
        footer: footer(footerJSON.filter(el => el.lang == page.lang)[0].data),
        body: sliceToHTML({
            type: page.type, // "landing-page"
            slices: page.data.body
        })
    });
    const resolvedLinksHTML = html
        .replace(/<img src/g, "<img loading='lazy' src")
        .replace(/https:\/\/www.skipperi.fi/g, "/fi")
        .replace(/https:\/\/skipperi.fi/g, "/fi")
        .replace(/https:\/\/www.skipperi.no/g, "/no")
        .replace(/https:\/\/skipperi.no/g, "/no")       
        
    const url = `public/${page.lang}/${page.uid == "front" ? "index" : page.uid}.html`
        .replace("..html", ".html")
        .replace(/-{2,}/g, "-");

    let htmlToBeWrittenToDisk = resolvedLinksHTML;
    try {
        htmlToBeWrittenToDisk = minifyHTML(resolvedLinksHTML)
    } catch (error) {
        console.error("error in html in:" + pageName);
    }

    writeFileToPublic(htmlToBeWrittenToDisk, url)

    totalBytes += htmlToBeWrittenToDisk.length;

    console.log(`${htmlToBeWrittenToDisk.length/1000}kb rendered: ${url}`);
})

// const blogPages = await client.getAllByType('blog_post', {lang: "*" });
// blogPages.map(page => {
//     console.log(page)
//     const html = landingPage({copy: sliceToHTML(page.data.body)});
//     writeFileToPublic(html, `public/${page.lang}/blog/${page.uid}.html`)
// })

console.log(`${(Date.now() - t)/1000} seconds to compile ${landingPages.length + blogPages.length} pages.`);
console.log(`average page size: ${Math.round(totalBytes / (landingPages.length + blogPages.length))/1000}Kb`)
