import { Linkify } from "../utils.js"

const html = ({
    title, items
}={}) => `
<div class="item">
    ${title ? `<strong>${title}</strong>` : "" }
    ${items.map(item => Linkify(item.link, item.title)).join("")}
</div>
`

export default html