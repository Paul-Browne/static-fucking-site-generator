const Linkify = (link, text, classes, inlineStyle) => {
    
    const {url, uid, target, lang} = link;
    const href = url ? url : (lang ? `/${lang}/${uid || ""}` : "");

    if(!text) return "";

    return href ? 
        `<a ${classes ? `class="${classes}"` : ''} href="${href}" ${inlineStyle ? `style="${inlineStyle}"` : "" } ${target ? `target="${target}"` : "" } >${text}</a>` 
        :
        `<span ${classes ? `class="${classes}"` : ''} ${inlineStyle ? `style="${inlineStyle}"` : "" }>${text}</span>`

}

const uid = (length, s) => {
    s += Math.random().toString(36).substring(2);
    if(s.length < length){
        return uid(length, s);
    }
    return s.slice(0,length);
}

export {
    uid,
    Linkify
}

