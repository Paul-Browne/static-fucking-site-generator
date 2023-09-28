import { Linkify } from "../utils.js"
const html = ({
    text,
    url
}={}) => (url && text) ? `
<section class="subscribe-action-bar full-width">
    ${Linkify(url, text, "btn")}
</section>` : ""

export default html