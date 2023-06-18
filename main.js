const images = Array.from(document.querySelectorAll(".img-holder img"))
const rightBtn = document.querySelector("button.right-arrow")
const leftBtn = document.querySelector("button.left-arrow")

let imgCount = images.length
let start = 0

rightBtn.addEventListener('click', () => {
    ClearActive();
    start++
    Checker()
    images[start].classList.add("active")
})

leftBtn.addEventListener('click', () => {
    ClearActive();
    start--
    Checker()
    images[start].classList.add("active")
})

function ClearActive() {
    images.forEach((e) => {
        e.classList.remove("active");
    })
}
function Checker() {
    if (start == imgCount) {
        return start = 0
    } else if (start < 0) {
        return start = 2
    }
}