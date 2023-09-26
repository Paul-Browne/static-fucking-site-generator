import richText from "../richText.js"

const html = ({
    items
}={}) => {
    return `
    <section class="slice horizontal-cards">
        ${items.map(item => {
            const {image, above_header, content, is_option, price, original_price, discount_label, price_description, footer, traffic_light, status_text} = item;

            const aspectRatio = 100 *  (items[0].image?.dimensions?.height / items[0].image?.dimensions?.width)

            return `
            <div class="horizontal-card ${is_option ? 'is_option' : ''}">
                ${above_header ? `<h3 class="horizontal-card_above-header">${above_header}</h3>` : ""}
                <div class="horizontal-card_image" style="padding-top:${aspectRatio}%">
                    ${image.url ? `<img src="${image.url}">`: ""}
                    ${is_option ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>`: ""}
                </div>
                <div class="horizontal-card_texts">
                ${richText(content)}
                    <div class="horizontal-card_texts_inner">
                        <div class="horizontal-card_price_container">
                            <div>
                                ${price ? `<h2 class="horizontal-card_price ${original_price ? 'has-discount' : ''}"><strong>${price}</strong></h2>` : ""}
                                ${price_description ? `<p class="horizontal-card_price_description">${price_description}</p>` : ""}
                            </div>
                            ${discount_label ? `<strong class="horizontal-card_discount_label">${discount_label}</strong>` : ""}
                        </div>
                        ${original_price ? `<p class="horizontal-card_original_price"><s>${original_price}</s></p>` : ""}
                        ${footer ? `<p class="horizontal-card_footer">${footer}</p>` : ""}
                    </div>
                    ${status_text ? `<p class="horizontal-card_status_text">${traffic_light ? `<span class="horizontal-card_traffic_light" style="background-color:${traffic_light}"></span>` : ""}<strong>${status_text}</strong></p>`: ""}
                </div>    
            </div>
            `
        }).join("")}
    </section>`
}

export default html