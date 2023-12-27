import { listFromJSON } from "./utils.js"


export default ({
    type = "ul",
    items = "",
    classes = ""
} = {}) => {
    return items ? listFromJSON({
        items,
        type,
        classes
    }) : ""
}