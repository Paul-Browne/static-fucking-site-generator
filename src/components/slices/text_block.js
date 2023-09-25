import { Linkify } from "../utils.js"
import richText from "../richText.js"

const html = ({
    title,
    text,
    cta,
    cta_text
}={}) => `
<section class="slice text-block">
    ${richText(title)}
    ${richText(text)}
    ${Linkify(cta, cta_text, "btn")}
</section>`

export default html