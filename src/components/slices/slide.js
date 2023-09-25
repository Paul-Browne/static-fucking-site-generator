import { Linkify } from "../utils.js";
import { uid } from "../utils.js";
import richText from "../richText.js"

const html = ({
    items
}={}) => {
    const id = uid(7, "s");
    const renderSlides = items => items.map((item, i) => {
        const {title, text, image, background_color, cta, cta_text} = item;

        const slideInnerContent = richText(title) + richText(text) + Linkify(cta, cta_text);

        return `
        <div class="slider_slide">
            <div class="slider_slide_outer" ${image.url ? `style="background-image:url(${image.url})"`: ""}>
                ${slideInnerContent ? `<div class="slider_slide_inner" ${background_color ? `style="background-color:${background_color+'dd'}"` : ""}>
                    ${slideInnerContent}
                </div>`: ""}
            </div>
        </div>`
    }).join("")

return `
<section class="slice slider full-width">
    <div id="${id}" class="slider_slides">
        ${renderSlides(items)}
        ${renderSlides(items)}
        ${renderSlides(items)}
    </div>
    <!--<div class="slider_dots">${items.map(item => `<span class="slider_dot"></span>`).join("")}</div>-->
    <button onclick="${id}.scrollBy(-10,0)" class="prev-slide">prev</button>
    <button onclick="${id}.scrollBy(10,0)" class="next-slide">next</button>
</section>
<script>slider(${id})</script>`
}

export default html;