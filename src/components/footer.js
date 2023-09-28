import { Linkify } from "./utils.js";
import sliceToHTML from "./sliceToHTML.js"

const html = data => {
    const {facebook_link, body} = data;

    console.log(facebook_link)

    const links = sliceToHTML({
        type: "footer",
        slices: body
    });


    return `
<footer class="global-padding">
    <div class="social-media-and-app-download">
        <div class="social-links">
            ${Linkify(facebook_link, `<img src="/img/facebook.svg">`)}
            ${Linkify({url:"https://www.instagram.com/skipperi.fi/"}, `<img src="/img/instagram.svg">`)}
        </div>
        <div class="app-download-links">
            ${Linkify({url:"https://apps.apple.com/app/skipperi/id1501372405"}, `<img src="/img/download-app-store.svg" width="112"">`)}
            ${Linkify({url:"https://play.google.com/store/apps/details?id=fi.skipperi.app"}, `<img src="/img/download-play-store.svg" width="112">`)}
        </div>
    </div>
    <div class="links">
        ${links}
    </div>
</footer>`
}

export default html