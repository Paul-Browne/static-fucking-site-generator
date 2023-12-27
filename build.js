import { cp, mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import XtoCss from "x-to-css";
import * as esbuild from 'esbuild'
import { minify } from 'html-minifier'
import HTML from "./src/components/html.js"
import footer from "./src/components/footer.js";
import navigation from "./src/components/header.js";

XtoCss("src/scss/global.scss", "public/css/styles.css", { maps: true });
// cp("src/fonts", "public/fonts", { recursive: true })
// cp("src/favicon", "public", { recursive: true })
cp("src/images", "public/img", { recursive: true })

await esbuild.build({
  entryPoints: ['src/js/scripts.js'],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['es6'],
  outfile: 'public/js/scripts.js'
})

/* ⬆⬆⬆ BUILD ASSETS ⬆⬆⬆ */



/* ⬇⬇⬇ BUILD PAGES ⬇⬇⬇ */

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

const pages = [{
    url: "index",
    body: `<h1>Home</h1><h1>Home</h1><h1>Home</h1><h1>Home</h1><h1>Home</h1><h1>Home</h1><h1>Home</h1><h1>Home</h1><h1>Home</h1><h1>Home</h1><h1>Home</h1><h1>Home</h1><h1>Home</h1><h1>Home</h1><h1>Home</h1><h1>Home</h1>`
}, {
    url: "about",
    body: `<h1>About</h1>`
}, {
    url: "contact",
    body: `<h1>Contact</h1>`
}]

pages.map(page => {
    let html = HTML({
        lang: "en",
        header: navigation(),
        footer: footer(),
        body: page.body
    });

    try {
        html = minifyHTML(html)
    } catch (error) {
        console.error("error in html in:" + pageName);
    }  
    writeFileToPublic(html, `public/${page.url}.html`)
    totalBytes += html.length;
    //console.log(`${htmlToBeWrittenToDisk.length/1000}kb rendered: ${url}`);
})

console.log(`${(Date.now() - t)/1000} seconds to compile ${pages.length} pages.`);
console.log(`average page size: ${Math.round(totalBytes / pages.length)/1000}Kb`)
