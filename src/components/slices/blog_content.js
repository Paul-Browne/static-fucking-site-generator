import richText from "../richText.js"

const html = ({
    text
}={}) => `
<section class="slice blog_content">
    ${richText(text)}
</section>
`

export default html