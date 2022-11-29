const x_Button = document.querySelector(".close-button")
const slideOverContainer = document.querySelector(".slide-over-container")
const slideOverLayout = document.querySelector(".slide-over-layout")
const registerButton = document.getElementById("registerButton")

slideOverContainer.style.display = "none"

x_Button.addEventListener("click", () => {
  slideOverContainer.classList.add("slide-out")
  slideOverContainer.classList.remove("slide-in")
})
registerButton.addEventListener("click", () => {
  slideOverContainer.style.display = "flex"
  slideOverContainer.classList.add("slide-in")
  slideOverContainer.classList.remove("slide-out")
})