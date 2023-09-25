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
        return `
            <a ${cta.url ? `href="${cta.url}"`: ""} class="collection_item" ${background_color ? `style="background-color:${background_color}"` : ""}>
                <div class="collection_texts">
                    ${label ? `<span class="collection_label">${label}</span>` : "" }
                    ${richText(title)}
                    ${richText(text)}
                </div>
                <img loading="lazy" class="collection_image" src="${image.url}">
            </a>
        `
    }).join("")}            
    </div>
</section>`
}

export default html;