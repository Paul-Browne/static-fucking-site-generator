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
    <!--<button onclick="${id}.scrollBy(-10,0)" class="prev-slide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></button>-->
    <button onclick="${id}.scrollBy(10,0)" class="next-slide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></button>
</section>
<script>slider(${id})</script>`
}

export default html;