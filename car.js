
/*скрипт для шапки*/

function scrollIn(TargetScroll) {
    document.querySelector(`.${TargetScroll}-scrollTarget`).scrollIntoView({ behavior: "smooth" });
};

function addActiveClass() {
    if (event.target.classList.contains('dropdown-tablet')) {
        if (!event.target.lastElementChild.classList.contains('__active')) {
            event.target.lastElementChild.classList.add('__active');
            event.target.firstElementChild.classList.add('__active');
        } else {
            event.target.lastElementChild.classList.remove('__active');
            event.target.firstElementChild.classList.remove('__active');
        }
    }
}

function showMobileMenu() {
    if (!document.querySelector('.mobile-header__burger').classList.contains('__active')) {
        document.querySelector('.mobile-header__burger').classList.add('__active');
        document.querySelector('.mobile-header__mobile-menu').classList.add('__active');
    } else {
        document.querySelector('.mobile-header__burger').classList.remove('__active');
        document.querySelector('.mobile-header__mobile-menu').classList.remove('__active');
    }
}

/*скрипт для машин */
const animItems = document.querySelectorAll('.__anim-items');
if (animItems.length > 0) {

    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemOffsetTop = animItem.getBoundingClientRect().top;
            const animItemOffsetBottom = animItem.getBoundingClientRect().bottom;
            let endPostition = window.innerHeight - animItemOffsetBottom;
            if (animItem.classList.contains('large-animation-block')) {
                if (window.innerHeight > animItemOffsetTop > 0) {
                    animItem.classList.add('__active');
                }
            }
            if ((animItemOffsetTop > 0) && (endPostition > 0)) {
                animItem.classList.add('__active');
            } else {
                if (!animItem.classList.contains('non-returnable')) {
                    animItem.classList.remove('__active');
                }
            }
        }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);

}
