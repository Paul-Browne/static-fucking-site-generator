import { uid } from "./utils.js"

export default ({
    element = "button",
    classes = "menu",
    activeClass = "menu-open",
    handleClick = () => {}
} = {}) => {
    const id = uid(7, 'm');
    
    return `<${element} id="${id}" class="${classes}">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </${element}>
    <script>${id}.addEventListener("click", event => {
        document.documentElement.classList.toggle("${activeClass}");
        (${handleClick})(event)
    })</script>`
}