import sliceToHTML from "./sliceToHTML.js"

const html = data => {
    const {facebook_link, body} = data;

    const links = sliceToHTML({
        type: "footer",
        slices: body
    });


    return `
<footer class="global-padding">
    <div class="social-media-and-app-download">
        <div class="social-links">
            <a href="${facebook_link.url}"><img src="/img/facebook.svg"></a>
            <a href="https://www.instagram.com/skipperi.fi/"><img src="/img/instagram.svg"></a>
        </div>
        <div class="app-download-links">
            <a href="https://apps.apple.com/app/skipperi/id1501372405"><img src="/img/download-app-store.svg" width="112""></a>
            <a href="https://play.google.com/store/apps/details?id=fi.skipperi.app"><img src="/img/download-play-store.svg" width="112"></a>
        </div>
    </div>
    <div class="links">
        ${links}
    </div>
</footer>`
}

export default html