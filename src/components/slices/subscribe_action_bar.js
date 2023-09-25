import { Linkify } from "../utils.js"
const html = ({
    text,
    url
}={}) => (url.url && text) ? `
<div class="subscribe-action-bar full-width">
    ${Linkify(url, text, "btn")}
</div>` : ""

export default html