export const checkAnim = (element, anim) => {
    let el = document.getElementById(element);
    if(el.classList.contains(anim)){
        return
    }

    if(isElementInView(el)){
        el.classList.add(anim);
    }

    function isElementInView(element){
        let scrollPos = window.scrollY;
        let elementPos = window.pageYOffset + element.getBoundingClientRect().top + (element.offsetHeight / 4);
        if(scrollPos + window.innerHeight > elementPos){
            return true
        }
        return false
    }
}