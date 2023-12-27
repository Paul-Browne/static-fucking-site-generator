export default navigationCont => {
    if(!navigationCont) return
    let previousY = window.scrollY;
    window.addEventListener("scroll", () => {
        const currentY = window.scrollY;
        if(currentY < previousY){
            // scrolling up
            navigationCont.classList.remove("hide")
        }else if(currentY > navigationCont.getBoundingClientRect().height){
            // scrolling down
            navigationCont.classList.add("hide")
        }
        if(currentY <= 0){
            navigationCont.classList.remove("not-top")
        }else{
            navigationCont.classList.add("not-top")
        }        
        previousY = currentY;
    })      
}