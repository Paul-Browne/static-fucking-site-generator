export default slideCont => {
    if(!slideCont) return
    
    const moveToX = (el, px) => {
        el.style.scrollBehavior = "auto";
        el.scrollTo(px, 0)
        el.style.scrollBehavior = "";        
    }

    const Width = el => el.getBoundingClientRect().width;

    const slide = slideCont.querySelector(".slider_slide");
    const totalSlides = slideCont.children.length / 3;
    
    moveToX(slideCont, (Width(slide) * totalSlides) - (Width(slideCont) - Width(slide))/2 );

    const _scroll = (a, b) =>{
        return slideCont.addEventListener("scroll", function() {
            clearTimeout(b);
            b = setTimeout(a, 300);
        }), a;
    }    

    _scroll(function() {

        //console.log("fired")

        const x = slideCont.scrollLeft;
        const oneSetOfSlidesWidth = Width(slide) * totalSlides;
        const w = oneSetOfSlidesWidth - ((Width(slideCont) - Width(slide))/2)
    
        if(x - 1 < w - Width(slide)){
            moveToX(slideCont, x + oneSetOfSlidesWidth);
        }else if(x + 1 > w + oneSetOfSlidesWidth){
            moveToX(slideCont, x - oneSetOfSlidesWidth);
        }
    });  
}