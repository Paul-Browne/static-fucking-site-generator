const Linkify = (link, text, _classes) => {    
    const {url, uid, lang} = link;

    if(url === "" && typeof uid == "undefined" && typeof lang == "undefined"){
        //console.log(link, text, _classes)
    }    

    // url might be empty string ""
    const href = url ? url : ((lang && uid) ? `/${lang}/${uid}` : "");

    // const href = url ? url : `/${lang}/${uid}`;
    return (href && text) ? `<a ${_classes ? `class="${_classes}"` : ''} href="${href}">${text}</a>` : ""
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

