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
        const carousel = carouselItems.map(img => `<img class="grid_image" loading="lazy" onload="${id}.scrollTo({left:0,behavior:'instant'})" src="${img.url}">`).join("")

        const firstSlideAspectRatio = 100 *  (image_1?.dimensions?.height / image_1?.dimensions?.width)

        return `
            <div class="grid_item ${oneItem ? 'one-item' : ''}">
                ${carouselLength ? `
                <div class="grid_carousel_outer" style="padding-top:${firstSlideAspectRatio}%">
                    <div class="grid_carousel first" id="${id}">
                        ${carousel}
                    </div>
                    ${carouselLength > 1 ? `<button onclick="${id}.scrollBy(-1, 0)" class="prev">prev</button>`: ""}
                    ${carouselLength > 1 ? `<button onclick="${id}.scrollBy(1, 0)" class="next">next</button>`: ""}
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