export default carouselCont => {
    if(!carouselCont) return
    
    const _scroll = (a, b) =>{
        return carouselCont.addEventListener("scroll", function() {
            clearTimeout(b);
            b = setTimeout(a, 300);
        }), a;
    } 

    const contitionallyAddOrRemoveClass = (condition, element, _class) => {
        if(condition){
            element.classList.add(_class)
        }else{
            element.classList.remove(_class)
        }
    }

    _scroll(function() {
        const totalSlides = carouselCont.children.length;
        const slideWidth = carouselCont.getBoundingClientRect().width;
        contitionallyAddOrRemoveClass(carouselCont.scrollLeft <= 0, carouselCont, "first")
        contitionallyAddOrRemoveClass(carouselCont.scrollLeft >= slideWidth * (totalSlides - 1), carouselCont, "last")

    });    
}
