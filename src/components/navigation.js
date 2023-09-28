import { Linkify } from "./utils.js";
import sliceToHTML from "./sliceToHTML.js"

const html = (data, lang) => {

    const {desktop_menu_bar_items, body} = data
    
    const links = sliceToHTML({
        type: "navigation",
        slices: body
    });
    return `
<header id="navi" class="reveal top">
    <nav>
        ${Linkify({lang}, `<img src="/img/skipperi-logo-navigation.svg" alt="Skipperi">`, "logo")}
        <div>
            ${desktop_menu_bar_items.map(item => Linkify(item.link, item.title)).join("")}
        </div>
        <a href="/app/my-skipperi" target="_blank"><span class="fa fa-user"></span>My Skipperi</a>
    </nav>
    <button class="hamburger" onclick="menu(this, sideMenu)">
    <div>
        <span></span>
        <span></span>
        <span></span>
    </div>
    </button>
    <div id="sideMenu" class="menu">
        ${links}
    </div>
</header>
<script>navbar(navi, menu)</script>
`
}

export default html