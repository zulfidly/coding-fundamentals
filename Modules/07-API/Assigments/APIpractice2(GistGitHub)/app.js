const nameText = document.querySelector("#name")
const ageText = document.querySelector("#age")
const hobbiesList = document.querySelector("#hobbies")

//for so-called "static" json
// const ENDPOINT = "https://gist.githubusercontent.com/zulfidly/5dd2ee74b7936499576ede83133124e6/raw/d2dc0600abd4a8f4847fa82973e75600c5b5a0d0/Prac2.json"

//for so-called "live" json. Follow /gists/{gist ID} format
const ENDPOINT = "https://api.github.com/gists/5dd2ee74b7936499576ede83133124e6"

async function getData() {
  const response = await fetch(ENDPOINT)
  const data = await response.json(); // structure response into JSON format
  console.log(data);

  let x = data.files["Prac2.json"].content; // de-structure json
  let y = JSON.parse(x); // parse it from JSON to normal string format
  return y;
}

function displayData({name, age,hobbies}) {
  nameText.textContent = name;
  ageText.textContent = age;
  hobbies.forEach((hobby) => {
      hobbiesList.innerHTML += `<li> ${hobby} </li>`
    })
}

window.addEventListener("load", async() => {
  const data = await getData();
  console.log(data);
  displayData(data);
})