import { Linkify } from "../utils.js"
import richText from "../richText.js"

const html = ({
    background,
    title,
    description,
    cta,
    cta_text
}={}) => `
<section class="slice hero ${background.url ? 'full-width' : 'no-background-image'}">
    <div class="hero_texts">
        ${richText(title)}
        <div>
            ${richText(description)}
            ${Linkify(cta, cta_text, "btn")}
        </div>
    </div>
    ${background.url ? `<div class="hero_image" ${background.url ? `style="background-image:url(${background.url})"`: ""}></div>`: ""}
</section>
`

export default html