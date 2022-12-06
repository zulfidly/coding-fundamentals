const button = document.querySelector(".button")
const inputForm = document.querySelector(".inputForm")
const inputField = document.querySelector(".inputField")
const userAvatar = document.querySelector(".userAvatar")
const userName = document.querySelector(".userName")
const userBio = document.querySelector(".userBio")
const userCreatedAt = document.querySelector(".userCreatedAt")
const userURL = document.querySelector(".userURL")
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const userNameToPaste = document.querySelectorAll(".userNameToPaste")


const firstHalfENDPOINT = "https://api.github.com/users/"

async function getUser(secondHalfENDPOINT) {
  const response = await fetch(firstHalfENDPOINT + `${secondHalfENDPOINT}`)
  const data = await response.json(); // structure response into JSON format
  console.log(data.message);
  // console.log(data.avatar_url);
  // console.log(data.url);
  if(data.message == "Not Found") {
    userName.textContent = "User Not Found";
    userAvatar.src = "https://freeiconshop.com/wp-content/uploads/edd/document-error-outline.png";
    userBio.textContent = "";
    userURL.href = "";
    userURL.textContent = "";
    userCreatedAt.textContent = "";  
  } else{
    // console.log(data.url, typeof data.url);
    userAvatar.src = data.avatar_url;
    userName.textContent = data.name;
    userBio.textContent = data.bio;
    userURL.href = data.html_url;
    userURL.textContent = data.html_url;
    userCreatedAt.textContent = "Date joined : " + getDMY(data.created_at);  
  }
}

button.addEventListener("click", async(e) => {
  e.preventDefault();
  const inputField = document.querySelector(".inputField")

  if(inputField.value == "") {
    inputField.classList.add("highlight");
  } else {
    inputField.classList.remove("highlight");
    const data = await getUser(inputField.value);
    inputForm.reset();
    inputField.focus();
  }
})

function getDMY(x) {
  let y = new Date(x)
  displayDate = y.getDate().toString().padStart(2, '0') +" "+ month[y.getMonth()] +" "+ y.getFullYear();
  return displayDate;
}
userNameToPaste.forEach(n => n.addEventListener("click", () => {
console.log(n, "**",n.textContent);
console.log(userNameToPaste)
inputField.value = n.textContent;
}))
window.addEventListener("load", async() => {
  const data = await getUser("joinsigma");
  inputField.focus();
})