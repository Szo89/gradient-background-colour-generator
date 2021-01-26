const css = document.querySelector("h3")
const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const body = document.getElementById("gradient")
const btnTop = document.getElementById("top")
const btnRight = document.getElementById("right")
const btnBottom = document.getElementById("bottom")
const btnLeft = document.getElementById("left")


const setGradient = (position = 'left') => {
	body.style.background = `linear-gradient(to ${position}, ${color1.value} , ${color2.value})`
	css.textContent = body.style.background;
}

const setupButtons = () => {
	btnTop.addEventListener("click", () => { setGradient('top') })
	btnRight.addEventListener("click", () => { setGradient('right') })
	btnBottom.addEventListener("click", () => { setGradient('bottom') })
	btnLeft.addEventListener("click", () => { setGradient('left') })
}

const setupColours = () => {
	color1.addEventListener("input", () => { setGradient() })
	color2.addEventListener("input", () => { setGradient() })
}

setupButtons();
setupColours();

