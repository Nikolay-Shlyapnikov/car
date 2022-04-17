/*window.addEventListener(`resize`, event => {
    console.log(window.innerWidth);
}, false);*/
const photo = document.querySelector('.product');
const text = document.querySelector('.photo');
window.addEventListener('scroll', lockScroll);

function lockScroll() {
    const startLock = text.getBoundingClientRect().top;
    console.log(startLock)
    const endLock = text.getBoundingClientRect().bottom;
    if (startLock < -1) {
        document.body.classList.add('lock');
    }
    if (endLock > 0) {
        document.body.classList.remove('lock');
    }
}