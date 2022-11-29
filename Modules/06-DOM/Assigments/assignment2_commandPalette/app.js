// Task: Build a command palette
// In this assignment, you are going to build a command palette. When you click CMD+K on your keyboard, the command palette will open. You will find that a lot of the modern websites, especially documentation websites are using command palettes to make the navigation easier.
let Control=0; Shift=0; Kk=0;
let cmdPaletteKeyCombo = 0;

let staticLi = document.querySelectorAll(".result-item")
let inputField = document.querySelector(".search-input")

inputField.addEventListener("keyup", compareChars);

function compareChars() {
//filter out non-matches
let isNoResultTrue = true;
  let inputFieldString = document.querySelector(".search-input").value
  for(i=0; i<staticLi.length; i++) {
    // console.log(inputFieldString, typeof inputFieldString)
    let compareLi = staticLi[i].innerHTML.toLowerCase();
    if(compareLi.startsWith(inputFieldString.toLowerCase())) {
      staticLi[i].style.display = "block"
    } else {
      staticLi[i].style.display = "none"
    }
    // check for no result
    isNoResultTrue = isNoResultTrue && (staticLi[i].style.display == "none");
    if(isNoResultTrue) {
      document.querySelector(".no-result").style.display = "block"
      document.querySelector(".results-container").style.display = "none"
    } else {
      document.querySelector(".no-result").style.display = "none"
      document.querySelector(".results-container").style.display = "block"
    }
  }  
}


document.onkeyup = function(e) {
  let key_up = e.key;
  key_up = key_up + "=UP";
  ctrl_shift_kK_status(key_up)
}
document.onkeydown = function(e) {
  let key_down = e.key;
    // var key_code = key_press.charCodeAt(0);
  key_down = key_down + "=DOWN";
  ctrl_shift_kK_status(key_down);
}
function ctrl_shift_kK_status(status) {
  // let key_press = e.key;
  if(status == "Control=UP") {
    Control = 0;
  }
  if(status == "Control=DOWN") {
    Control = 1;
  }
  if(status == "Shift=UP") {
    Shift = 0;
  }
  if(status == "Shift=DOWN") {
    Shift = 1;
  }
  if(status == "k=UP" || status == "K=UP") {
    Kk = 0;
  }
  if(status == "k=DOWN" || status == "K=DOWN") {
    Kk = 1;
  }
  // console.log(Control, Shift, k, K)
  cmdPaletteKeyCombo = Control && Shift && Kk
  // console.log(cmdPaletteKeyCombo);

  if(cmdPaletteKeyCombo == 1) {
    document.getElementById("containerID").style.display = "block";
    document.getElementById("search_inputID").focus();
  }

  // return ;
}
