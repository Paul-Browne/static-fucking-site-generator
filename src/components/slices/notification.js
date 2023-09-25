import { Linkify } from "../utils.js"
import richText from "../richText.js"

const html = ({
    text,
    link
}={}) => Linkify(link, richText(text), "slice notification full-width")

export default html