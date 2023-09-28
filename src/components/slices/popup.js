import richText from "../richText.js"
import { uid } from "../utils.js"

const html = ({
    title,
    text,
    delay_in_seconds
}={}) => {
    
    const id = uid(7, "p");

return `
<section class="popup" id="${id}" >
    <div class="popup-inner">
        <button class="close">XXX</button>
        ${richText(title)}
        <div>${richText(text)}</div>        
    </div>
    <script>popup(${id}, ${delay_in_seconds})</script>
</section>`
}

export default html