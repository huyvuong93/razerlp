const animationObserver = new IntersectionObserver(
    (entries, animationObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('enter');
                animationObserver.unobserve(entry.target);
            }
        })
    }
);

export default{
    bind(el){
        el.classList.add('before-enter');
        animationObserver.observe(el);
    }
}