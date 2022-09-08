/**
 * Set the correct mask image for all elements with the car logo icons class
 */
function setIcons() {
    const identifier = 'cli-';
    const icons = document.querySelectorAll("[class*="+identifier+"]");
    icons.forEach( (icon) => {
        const iconSlug = filterClassNames(icon.classList, identifier);
        icon.setAttribute("style", "-webkit-mask-image: url('../icons/"+iconSlug+".svg');")
    })
}


/**
 * Filter classnames
 */
function filterClassNames(classes, identifier) {
    let classFound;
    classes.forEach( (className) => {
        if(className.includes(identifier)) {
            classFound = className.replace(identifier, "");
        }
    });
    return classFound;
}


/**
 * Run function when the DOM is finished loading
 */
window.addEventListener('DOMContentLoaded', () => {
    setIcons() 
});

