const html = input => {

    const embedContent = input.html.map(html => html.text).join("");

    const elfsightScript = embedContent.indexOf("elfsight-app") > 0 ? `<script src="https://static.elfsight.com/platform/platform.js"></script>` : "";

    return `<section class="slice html_embed">
        ${embedContent}
        ${elfsightScript}
    </section>`
}

export default html