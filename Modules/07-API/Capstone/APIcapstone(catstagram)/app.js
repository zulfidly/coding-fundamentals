// Project: Build a Instagram for Cats (Catstagram)
// API: https://api.thecatapi.com/v1/breeds
// Example: https://yap-catstagram.netlify.app/
// Create a Card that contain each cat's information
// For each of the card, please include the image, name, and description of the cat.
// Feel free to use any stylings or structure, the part that you have to focus on is the Cats API fetching. Make sure you got all the cats' information mentioned in the previous point.

let catAllContainer = document.querySelector(".catAllContainer")
let catImgContainer = document.querySelectorAll(".catImgContainer")
const navBar = document.querySelector(".navBar")
const catInfoBox = document.querySelector(".catInfoBox")
const infoBoxBackground = document.querySelector(".infoBoxBackground")
let catInfoBoxToggle = document.querySelector(".catInfoBoxToggle")
const navBarSensor = document.querySelector(".navBarSensor")


const ENDPOINT = "https://api.thecatapi.com/v1/breeds"

async function getCats() {
  const response = await fetch(ENDPOINT)
  const data = await response.json(); // structure response into JSON format
  console.log(data)

  data.forEach((catObj, ind) => {
    constructCatAlbum (data[ind].name, data[ind].image?.url, data[ind].description)
  });

  document.querySelectorAll(".catImgContainer").forEach(n => n.addEventListener("click", () => {
    // console.log(n.getAttribute("imgURL"));
    let catInfoBox = document.querySelector(".catInfoBox")
    console.log(n)
    constructCatInfoBox (n.textContent, n.getAttribute("descr"), n.getAttribute("imgURL"));

    catInfoBox.classList.add("catInfoBoxToggle")
    infoBoxBackground.classList.add("catInfoBoxToggle")
  }))
}

catInfoBox.addEventListener("click", () => {
  catInfoBox.classList.remove("catInfoBoxToggle")
  infoBoxBackground.classList.remove("catInfoBoxToggle")
  catInfoBox.removeChild(catInfoBox.firstElementChild);
  catInfoBox.removeChild(catInfoBox.firstElementChild);
})

function constructCatInfoBox (name, describe, imgURL) {
  let catInfoBox = document.querySelector(".catInfoBox")
  let newUL =  document.createElement("ul");
  let newNameLi =  document.createElement("h1");
  let newDescrLi =  document.createElement("h4");
  newUL.style.overflow = "auto";
  let newImg = document.createElement("img")

  newImg.setAttribute("src", imgURL)
  // console.log(name, describe)
  newNameLi.innerHTML = name;
  newDescrLi.innerHTML = describe;

  catInfoBox.append(newImg)
  newUL.append(newNameLi)
  newUL.append(newDescrLi)
  catInfoBox.append(newUL)

  newUL.style.listStyleType = "none";
}

function constructCatAlbum (catName, isImgAvailable, catDescription) {
  let noImgURL = "https://png2.cleanpng.com/sh/b5e54bc71cbb055d2299187ac179f4b4/L0KzQYm3WMI1N5D6fZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6Tfxwb5CyiNH7dHHlfLa0jvV1f5D3g59wcnHzeLrqk71kdJp1Rdtsb372Pbf2kr1nepZqRdtsb379cX7qigJkdJYyi9HsaXHvPYbpVBZmPGdnTNdsOEG6PoO3WMAyPGM7Sac8NUGzSIO3U8MzOmgziNDw/kisspng-computer-icons-logo-portable-network-graphics-clip-icons-for-free-iconza-circle-social-5b7fe46b4ec817.2080142615351082033227.png"

  if (isImgAvailable == undefined) {
      let new_catImgContainer = document.createElement("section");
      new_catImgContainer.setAttribute("class", "catImgContainer");
      new_catImgContainer.setAttribute("id", catName);
      new_catImgContainer.setAttribute("descr", catDescription);
      new_catImgContainer.setAttribute("imgURL", noImgURL);
      new_catImgContainer.style.backgroundImage = `url(${noImgURL})`;
      catAllContainer.append(new_catImgContainer)

      let catNameTag = document.createElement("p");
      catNameTag.setAttribute("class", "catNameTag");
      catNameTag.innerHTML = catName  + " " + "(Image not available)";
      new_catImgContainer.append(catNameTag);
      catAllContainer.append(new_catImgContainer)
  } else {
      var catImgURL = isImgAvailable.toString();
      let new_catImgContainer = document.createElement("section");
      new_catImgContainer.setAttribute("class", "catImgContainer");
      new_catImgContainer.setAttribute("id", catName);
      new_catImgContainer.setAttribute("descr", catDescription);
      new_catImgContainer.setAttribute("imgURL", catImgURL);

      new_catImgContainer.style.backgroundImage = `url(${catImgURL})`;
      new_catImgContainer.style.backgroundSize = "cover"

      let catNameTag = document.createElement("p");
      catNameTag.setAttribute("class", "catNameTag");
      catNameTag.innerHTML = catName;
      new_catImgContainer.append(catNameTag);
      catAllContainer.append(new_catImgContainer)
  }
// return catImgContainer = document.querySelectorAll(".catImgContainer")
}

window.addEventListener("load", async() => {
  const data = await getCats();
})

document.body.addEventListener ("wheel", function(e) {
  // console.log("scrollY :", scrollY) //coordinate
  // console.log("deltaY :", e.deltaY)
  if(e.deltaY >= 100) {
    navBar.classList.add("slide_down");
    navBar.classList.remove("slide_up");
  } else if (e.deltaY <= -100) {
    navBar.classList.add("slide_up");
    navBar.classList.remove("slide_down");
  } else { void(0) }
}) 
navBarSensor.addEventListener("mousemove", () => {
  navBar.classList.add("slide_down");
  navBar.classList.remove("slide_up");
})

navBarSensor.addEventListener("mouseleave", () => {
  setTimeout (addDelay, 2000);
})
function addDelay () {
  navBar.classList.remove("slide_down");
  navBar.classList.add("slide_up");
}