import richText from "../richText.js"

const html = ({
    badge,
    content
}={}) => `
<section class="slice promotion">
    ${badge ? `<div class="promotion_discount">${badge}</div>` : ""}
    <div class="promotion_text">${richText(content)}</div>
</section>`

export default html