// TODO

import richText from "../richText.js"

const html = ({
    text
}={}) => `
<section class="slice quote">
    ${richText(text)}
</section>
`

export default html