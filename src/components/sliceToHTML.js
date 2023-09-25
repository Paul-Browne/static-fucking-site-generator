import promotion from "./slices/promotion.js"
import countdown from "./slices/countdown.js"
import notification from "./slices/notification.js"
import popup from "./slices/popup.js"
import subscribe_action_bar from "./slices/subscribe_action_bar.js"
import text_block from "./slices/text_block.js"
import hero from "./slices/hero.js"
import accordion from "./slices/accordion.js"
import slide from "./slices/slide.js"
import duo_block from "./slices/duo_block.js"
import collection from "./slices/collection.js"
import grid from "./slices/grid.js"
import blog_content from "./slices/blog_content.js"
import footerItem from "./slices/footer_item.js"
import navigationItem from "./slices/navigation_item.js"
import html_embed from "./slices/html_embed.js"

const sliceToHTML = ({
    type, slices
}={}) => slices.map(element => {
    const {slice_type, primary, items} = element;
    
    if(type === "landing-page"){

        // TODO:
        /*
            52: skipperi_hobs
            51: horizontal_cards
            08: banner
            06: skipperi_p2p_boat_price_calculator
            03: skipperi_p2p_boats
            02: content_section
            01: alternate_grid
            01: onboarding_
            01: skipperi_fleet_pricing

            51: anchor_target
        */
        if(slice_type === "html_embed"){
            return html_embed(primary)
        }else if(slice_type === "promotion"){
            return promotion(primary)
        }else if(slice_type === "popup"){
            return popup(primary)
        }else if(slice_type === "duo_block"){
            return duo_block(primary)        
        }else if(slice_type === "notification"){
            return notification(primary)        
        }else if(slice_type === "subscribe_action_bar"){
            return subscribe_action_bar(primary)
        }else if(slice_type === "text_block"){
            return text_block(primary)      
        }else if(slice_type === "hero"){
            return hero(primary)              
        }else if(slice_type === "countdown"){
            return countdown(primary)
        }else if(slice_type === "collection"){
            return collection({
                title: primary.title,
                items
            })        
        }else if(slice_type === "grid"){
            return grid({
                items
            })          
        }else if(slice_type === "slide"){
            return slide({
                items
            })              
        }else if(slice_type === "accordion"){
            return accordion({
                title: primary.title,
                items
            })
        }
    }else if(type === "footer"){
        if(slice_type === "item"){
            return footerItem({
                title: primary.title, 
                items
            })
        }
    }else if(type === "navigation"){
        if(slice_type === "item"){
            return navigationItem({
                title: primary.title,
                link: primary.link,
                items
            })
        }        
    }else if(type === "blog_post"){
        if(slice_type === "blog_content"){

            // TODO

            /*
                75: quote
            */

            return blog_content(primary)
        }
    }

    // console.log(`slice_type: "${slice_type}" for content_type: "${type}" not found`)

    return ``

}).join("");

export default sliceToHTML