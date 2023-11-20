//First animation 
const bysElement = document.getElementById('bts');
const animation1Element = document.getElementById('animation1');

const translate = () => {
    let bysPos = bysElement.getBoundingClientRect().top + window.scrollY + 150;
    if(window.scrollY > bysPos) {
        let curPos = window.scrollY;
        let degree = (curPos - bysPos) * -0.08
        degree = Math.max(-120, Math.min(0, degree));
        animation1Element.style.transform = `translateY(${degree}vh)`
}
}
window.addEventListener('scroll', translate)

//Second animation
const btwElement = document.getElementById('bys');
const animation2Element = document.getElementById('animation2')

const grow = () => {
    let btwPos = btwElement.getBoundingClientRect().top + window.scrollY + 150;
    if(window.scrollY > btwPos) {
        let curPos = window.scrollY;
        let degree = (curPos - btwPos) * 0.13;
        animation2Element.style.transform =`scale(${degree})`
    }
}
window.addEventListener('scroll', grow)

//Side Window
const sideWindow = document.getElementById('side-screen');
const sideButton = document.getElementById('bar');
const icon = document.getElementById('side-button');

let isActive = false
const slide = () => {
    if (isActive === false) {
        sideWindow.style.marginRight = '15px';
         isActive = true;
    } else {
        sideWindow.style.marginRight = '93.46%';
        isActive = false
    }
}
sideButton.onclick = slide