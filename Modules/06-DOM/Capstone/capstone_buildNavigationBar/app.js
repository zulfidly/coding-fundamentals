// Project: Build a Navigation Bar
// In this project, you are going to build a responsive navigation bar. When you scroll down the website, 
// the navigation bar will be hidden, it will be shown if user hovers around the top area of the website.
// After you have the base navigation bar up, now it's time to manipulate it with DOM.
// Here's the starter code to get you started:
  // Select the header element
  // Event listener: Mouse move
  // When user hovers around the top area, show the header
  // Event listener: Scroll
  // When user scroll after a certain height, hide the header, else show the header

  // Hints:
  // - Use window.scrollY to check the scroll height of the user on the website.
  // - Use mousemove event for tracking the mouse movement of user.
  // - Use scroll event for tracking the scrolling movement of user.

const navBarId = document.getElementById("navBarId")
const navBarCtnrCl = document.querySelector(".navBarCtnrCl")
const navBarSensor = document.querySelector(".navBarSensor")

document.body.addEventListener ("wheel", function(e) {
  // console.log("scrollY :", scrollY) //coordinate
  // console.log("deltaY :", e.deltaY)
  if(e.deltaY >= 100) {
    navBarCtnrCl.classList.add("slide_down");
    navBarCtnrCl.classList.remove("slide_up");
  } else if (e.deltaY <= -100) {
    navBarCtnrCl.classList.add("slide_up");
    navBarCtnrCl.classList.remove("slide_down");
  } else { void(0) }
}) 

navBarSensor.addEventListener("mouseover", () => {
  navBarCtnrCl.classList.add("slide_down");
  navBarCtnrCl.classList.remove("slide_up");
})

navBarSensor.addEventListener("mouseleave", () => {
  setTimeout (addDelay, 4000);
})

function addDelay () {
  navBarCtnrCl.classList.remove("slide_down");
  navBarCtnrCl.classList.add("slide_up");
}