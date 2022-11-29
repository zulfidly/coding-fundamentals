const hex = [0 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 'A','B', 'C', 'D', 'E', 'F']

function hexGenerator() {
  let hexString = '#';
  for(i=0; i<6; i++) {
    let hexChar = hex[Math.floor(Math.random() * hex.length)];
    hexString += hexChar
  }
  // console.log(hexString);
  return hexString;
}

const button = document.getElementById("button");
const logHex = document.getElementsByClassName("color");
const container = document.getElementsByClassName("container");

button.addEventListener("click", () => {
  let newColor = hexGenerator();
  // console.log(hexGenerator())
  let newColorNode = document.createTextNode(newColor);
  logHex[0].replaceChild(newColorNode, logHex[0].childNodes[0]);

  document.body.style.backgroundColor = newColor;
  console.log(logHex[0].firstChild.nodeValue);
});