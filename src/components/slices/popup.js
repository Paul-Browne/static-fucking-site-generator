import richText from "../richText.js"
import { uid } from "../utils.js"

const html = ({
    title,
    text,
    delay_in_seconds
}={}) => {
    
    const id = uid(7, "p");

return `
<div id="${id}" class="popup">
    <div class="popup-inner">
        <button class="close">XXX</button>
        <h1>${richText(title)}</h1>
        <div>${richText(text)}</div>        
    </div>
</div>
<script>popup(${id}, ${delay_in_seconds})</script>`
}

export default html