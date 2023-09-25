import richText from "../richText.js"

const html = ({
    title, 
    items
}={}) => {
return `
<section class="slice accordion">
    ${richText(title)}
    ${items.map(item => {
        const accordion_content = richText(item.text);
        return (accordion_content && item.title ) ? `
            <div class="accordion_title" onclick='this.classList.toggle("active")'><h3>${item.title}</h3><span class="plus-minus"></span></div>
            <div class="accordion_content">${accordion_content}</div>
        ` : ""
    }).join("")}            
</section>`
}

export default html;