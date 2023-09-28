// TODO: check date is in the future

import {uid} from "../utils.js"

const html = ({
    title, 
    date_time
}={}) => {
    const id = uid(7, "c")
return `
<section class="slice countdown">
    <h1 class="countdown_title">${title}</h1>
    <div id="${id}" class="countdown_timer">
        <div class="countdown_unit">
            <span class="countdown_digits js-days">.</span>
            <span class="countdown_label days"></span>
        </div>
        <div class="countdown_unit">
            <span class="countdown_digits js-hours">.</span>
            <span class="countdown_label hours"></span>
        </div>
        <div class="countdown_unit">
            <span class="countdown_digits js-minutes">.</span>
            <span class="countdown_label minutes"></span>
        </div>
        <div class="countdown_unit">
            <span class="countdown_digits js-seconds">.</span>
            <span class="countdown_label seconds"></span>
        </div>                        
    </div>
    <script>countdown(${id}, "${date_time}")</script>                            
</section>
`}

export default html;