import { Linkify } from "../utils.js"
import richText from "../richText.js"

const html = ({
    text,
    link
}={}) => `<section class="slice notification full-width">${Linkify(link, richText(text))}</section>`

export default html