import {Linkify, uid} from "../utils.js"
import richText from "../richText.js"

const html = ({
    items
}={}) => {
return `
<section class="slice grid">
    <div class="grid_items">
    ${items.map(item => {
        const oneItem = items.length == 1;
        const {image_1, image_2, image_3, content, cta, cta_text} = item;
        const carouselItems = [image_1, image_2, image_3].filter(img => img.url);        
        const carouselLength = carouselItems.length;
        const id = uid(7, "g")
        const carousel = carouselItems.map(img => `<img src="${img.url}" class="grid_image" onload="${id}.scrollTo({left:0,behavior:'instant'})">`).join("")

        const firstSlideAspectRatio = 100 *  (image_1?.dimensions?.height / image_1?.dimensions?.width)

        return `
            <div class="grid_item ${oneItem ? 'one-item' : ''}">
                ${carouselLength ? `
                <div class="grid_carousel_outer" style="padding-top:${firstSlideAspectRatio}%">
                    <div class="grid_carousel first" id="${id}">
                        ${carousel}
                    </div>
                    ${carouselLength > 1 ? `<button onclick="${id}.scrollBy(-10, 0)" class="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></button>`: ""}
                    ${carouselLength > 1 ? `<button onclick="${id}.scrollBy(10, 0)" class="next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></button>`: ""}
                </div>` : ""}
                <div class="grid_texts">
                    ${richText(content)}
                    ${Linkify(cta, cta_text, "btn btn-transparent")}
                </div>
            </div>
            ${carouselLength ? `<script>carousel(${id})</script>`: ""}
        `
    }).join("")}
    </div>           
</section>`
}

export default html;