const uid = (length, s) => {
    s += Math.random().toString(36).substring(2);
    if(s.length < length){
        return uid(length, s);
    }
    return s.slice(0,length);
}

const listFromJSON = ({
    items, 
    type,
    classes
}) => {
    return `<${type} class="${classes}">` + items.map(obj => {
        if(obj.children){
            return `<li>
                <span>${obj.content}</span>
                ${listFromJSON({
                    items: obj.children,
                    type,
                    classes: "" 
                })}
            </li>`
        }else{
            if(obj.href){
                return `<li><a href="${obj.href}">${obj.content}</a></li>`
            }else{
                return `<li>${obj.content}</li>`
            }
        }
    }).join("") + `</${type}>`
}

export {
    uid,
    listFromJSON
}