import { Linkify } from "../utils.js"
import richText from "../richText.js"

const html = ({
    title,
    text,
    cta,
    cta_text,
    image,
    background_color,
    mirror
}={}) => `
<section class="slice duo-block ${mirror ? 'mirror' : ''}">
    <div class="duo-block_image" ${image.url ? `style="background-image:url(${image.url})"`: ""}>
        ${richText(title)}
    </div>
    <div class="duo-block_texts" ${background_color ? `style="background-color:${background_color}"`: ""}>
        ${richText(text)}
        ${Linkify(cta, cta_text, "btn")}
    </div>
</section>
`

export default html