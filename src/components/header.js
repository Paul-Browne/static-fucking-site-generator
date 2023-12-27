import menu from "./menu.js"
import list from "./list.js"
import { uid } from "./utils.js"

export default ({
    logo = {
        class: "logo",
        href: "/",
        path: "/img/logo.svg",
        alt: "logo"
    },
    links = [{
        href: "always",
        text: "always"
    },
    {
        href: "three",
        text: "three"
    },
    {
        href: "links",
        text: "links"
    }],
    sideMenu = [{
        content: "hello",
        children: [{
            content: "foo",
            href: "foo"
        },
        {
            content: "bar",
            href: "bar"
        },
        {
            content: "world",
            children: [{
                content: "fooeeee",
                href: "foeeeeo"
            },
            {
                content: "omg",
                children: [{
                    content: "awesome-list 1",
                    href: "foeeeeo"
                },
                {
                    content: "awesome-list 2",
                    href: "baeeeer"
                },
                {
                    content: "awesome-list 3",
                    href: "bufeeeef"
                },
                {
                    content: "awesome-list 4",
                    href: "baeeeer"
                },
                {
                    content: "awesome-list 5",
                    href: "baeeeer"
                },
                {
                    content: "awesome-list 6",
                    href: "baeeeer"
                }]
            },            
            {
                content: "bareeee",
                href: "baeeeer"
            },
            {
                content: "buffeeee",
                href: "bufeeeef"
            }]
        },        
        {
            content: "buff",
            href: "buff"
        }]
    }]
} = {}) => 
{
    const id = uid(7, "s");
 
    return `
    <header id="${id}">
        <script>scrollHide(${id})</script>
        <nav>
            <a class="${logo.class}" href="${logo.href}"><img src="${logo.path}" alt="${logo.alt}"></a>
            ${links?.map(link => `<a href="/${link.href}">${link.text}</a>`).join("")}
            ${menu ? `
                ${menu()}
                ${list({
                    classes: "reset side-menu",
                    items: sideMenu
                })}
            ` : ""}
        </nav>
    </header>`
}