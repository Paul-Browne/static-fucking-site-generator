import { Linkify } from "../utils.js";

const html = ({
    link, title, items
}={}) => {
    const nestedContent = items.map(item => Linkify(item.link, item.title)).join("");
    return `
<div class="item">
    ${Linkify(link, `<strong>${title}</strong>`)}
    ${nestedContent ? `<div>
        ${nestedContent}
    </div>` : ""}
</div>`
}

export default html