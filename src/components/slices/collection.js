import { Linkify } from "../utils.js"
import richText from "../richText.js"

const html = ({
    title, 
    items
}={}) => {
return `
<section class="slice collection">
    ${richText(title)}
    <div class="collection_items">
    ${items.map(item => {
        const {image, label, title, text, cta, background_color} = item;
        const innerContent = `
            <div class="collection_texts">
                ${label ? `<span class="collection_label">${label}</span>` : "" }
                ${richText(title)}
                ${richText(text)}
            </div>
            <img src="${image.url}" class="collection_image">
        `
        return Linkify(cta, innerContent, "collection_item", background_color ? `background-color:${background_color}` : "")
    }).join("")}            
    </div>
</section>`
}

export default html;