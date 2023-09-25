const html = input => {

    const embedContent = input.html.map(html => html.text).join("");

    return `<section class="slice html_embed">${embedContent}</section>`


}

export default html