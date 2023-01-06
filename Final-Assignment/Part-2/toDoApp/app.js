window.addEventListener("load", () => {
  console.log("reload")
  // localStorage.clear();
  attachListenersToForms();
  if(localStorage.getItem("activeTodo-v14")||localStorage.getItem("deletedTodo-v14")||localStorage.getItem("scratchPad-v14")) {
    stringFromJSON();
    displayActiveTodo();
    displayDeletedTodo();
    updateScrathPad();
  } else {
    return;
  }
}, {once:true})

scratchpadInputField.addEventListener("change", () => {
  // console.log(scratchpadInputField.value)
  localStorage.setItem("scratchPad-v14", scratchpadInputField.value)
})
function updateScrathPad() {
  scratchpadInputField.value = localStorage.getItem("scratchPad-v14");
}
function stringFromJSON() {
  objActiveTodoJSON = JSON.parse(localStorage.getItem("activeTodo-v14"));
  console.log("activeTodo", objActiveTodoJSON)
  objDeletedTodoJSON = JSON.parse(localStorage.getItem("deletedTodo-v14"));
  console.log("deletedTodo", objDeletedTodoJSON)
}
function updateActiveTodoOnLocalStorage() {
  localStorage.setItem("activeTodo-v14", JSON.stringify(objActiveTodoJSON))
  localStorage.setItem("deletedTodo-v14", JSON.stringify(objDeletedTodoJSON))
}
function attachListenersToForms() {
  document.querySelector(".saveNCloseBtn").addEventListener("click", rulesetForSaveNCloseBtn);
  document.querySelector(".addTitleBtn").addEventListener("click", preventBrowserReload);
  document.querySelector(".addLiBtn").addEventListener("click", preventBrowserReload);
  document.querySelector(".addLiBtn").addEventListener("click",rulesetForNewTodoSubmission);
  // createNewTodoBtn.
}
function removeListenersFromForms() {
  saveNCloseBtn.removeEventListener("click", rulesetForSaveNCloseBtn);
  addTitleBtn.removeEventListener("click", preventBrowserReload);
  addLiBtn.removeEventListener("click", preventBrowserReload);
  addLiBtn.removeEventListener("click",rulesetForNewTodoSubmission);
}
    let objActiveTodoJSON = [];
function rulesetForSaveNCloseBtn() {
  let formTitleInputField = document.querySelector(".formTitleInputField")
  let formInputField = document.querySelector(".formInputField")
  let newTodoUL = document.querySelector(".newTodoUL")
  if(formTitleInputField.value == "") {
    formTitleInputField.placeholder = "Enter title..."
    return;
  } else if(formInputField.value == "" && newTodoUL.childElementCount == 0){
      formInputField.placeholder = "Enter your tasks..."
      return;
  } else {
    if(editTodoModeGlobal == true && editTodoModeIndexToSpliceGlobal >= 0) {
      console.log(editTodoModeIndexToSpliceGlobal, "todo edited")
      objActiveTodoJSON.splice(editTodoModeIndexToSpliceGlobal, 1)
      let arrLiPerTodo = []; 
      let title = (formTitleInputField.value).trim();
      let arrPerTodo = [{"title":`${title}`}];
      document.querySelectorAll(".liTodo").forEach((x) => {
          y = {"li":`${x.outerHTML}`};
          arrLiPerTodo.push(y)
      })
      arrPerTodo.push(arrLiPerTodo)
      objActiveTodoJSON.push(arrPerTodo);
      updateActiveTodoOnLocalStorage();
      location.reload();
    } else { 
      editTodoModeGlobal = false;
      console.log(editTodoModeIndexToSpliceGlobal, "new Todo uploaded")
      let arrLiPerTodo = []; 
      let title = (formTitleInputField.value).trim();
      let arrPerTodo = [{"title":`${title}`}];
      document.querySelectorAll(".liTodo").forEach((x) => {
        y = {"li":`${x.outerHTML}`};
        arrLiPerTodo.push(y)
      })
      arrPerTodo.push(arrLiPerTodo)
      objActiveTodoJSON.push(arrPerTodo);
      updateActiveTodoOnLocalStorage();
      location.reload();
    }
  }
}


createNewTodoBtn.addEventListener("click", () => {
  removeListenersFromForms();
  document.querySelector(".newTodoCtnr").remove();
  newTodoMainCtnr.innerHTML += getFreshForms();
  attachListenersToForms();
  createNewTodoBtn.style.display = "none"
  editTodoModeGlobal = false;
})

function getFreshForms() {
  editTodoModeGlobal = false;
  return `
    <div class="newTodoCtnr">
      <form class="newTodoTitleForm headerPerTodo flexRowCenter">
          <input class="formTitleInputField" type="text" size="" maxlength="" placeholder="Title" autocomplete="off" />
          <input class="addTitleBtn" type="submit" value="Add Title"/>
      </form>
      <form class="newTodoForm">
          <input class="formInputField" type="text" size="30" maxlength="" placeholder="Start writing" autocomplete="off" />
          <input class="addLiBtn" type="submit" value="Update"/>
          <ul class="newTodoUL">
          </ul>
      </form>
      <button class="saveNCloseBtn">Save</button>
      <button class="deleteCheckedboxBtn">Delete checked</button>
    </div>
`}

let editTodoModeGlobal = false;
let editTodoModeIndexToSpliceGlobal;
function displayActiveTodo() {
  objActiveTodoJSON.forEach((x) => {
    allTodoSect.innerHTML += `<p class="myActiveTodo flexRowCenter" > ${x[0].title} <span class="editQuote">[edit]</span> </p>`
  })
  document.querySelectorAll(".myActiveTodo").forEach((obj, ind) => obj.addEventListener("click", () => {
    console.log('',obj, ind)
    editTodoModeIndexToSpliceGlobal = ind;
    editTodoModeGlobal = true;
    removeListenersFromForms();
    document.querySelector(".newTodoCtnr").remove();
    newTodoMainCtnr.innerHTML += expandActiveTodo(ind)
    attachListenersToForms();
    attachListenerToCheckboxes();
    createNewTodoBtn.style.display = "block"
    tickOriginallyCheckedBoxes();
    listenerForDeleteBtnOnly();
    listenerDeleteWholeTodo();
  })) 
}

let objDeletedTodoJSON = [];
function listenerDeleteWholeTodo(){
  document.querySelector(".deleteWholeTodo").addEventListener("click", () => {
    tempstr = JSON.stringify(objActiveTodoJSON[editTodoModeIndexToSpliceGlobal])
    tempjson = JSON.parse(tempstr)
    objDeletedTodoJSON.push(tempjson)
    // console.log(objDeletedTodoJSON)
    objActiveTodoJSON.splice(editTodoModeIndexToSpliceGlobal, 1);
    updateActiveTodoOnLocalStorage();
    location.reload();
  })
}

function tickOriginallyCheckedBoxes() {
  document.querySelectorAll(".liTodo").forEach((x) => {
    if(x.getAttribute("isChecked") == "checked") {
      x.firstChild.checked = true;
    } else if(x.getAttribute("isChecked") == "notchecked") {
      x.firstChild.checked = false;
    } else { void(0) }
  })
}
function expandActiveTodo(ind) {
  // console.log(arrToJSON[ind][1])
  myLi = objActiveTodoJSON[ind][1];
  str = "";
  myLi.forEach((x, y) => {
    // str += `<li class="liTodo"><input class="liCheckbox" type="checkbox" />[${[y+1]}] ${x.li}</li>`
    // str += `[${[y+1]}] ${x.li}`
    str += `${x.li}`
  })
  // console.log(str)
  return `
    <div class="newTodoCtnr">
      <form class="newTodoTitleForm headerPerTodo flexRowCenter">
          <input class="formTitleInputField" type="text" size="" maxlength="" value='${objActiveTodoJSON[ind][0].title}' autocomplete="off" />
          <input class="addTitleBtn" type="submit" value="Update"/>
      </form>
      <form class="newTodoForm">
          <input class="formInputField" type="text" size="30" maxlength="" placeholder="Start writing" autocomplete="off" />
          <input class="addLiBtn" type="submit" value="Update"/>
          <ul class="newTodoUL">${str}</ul>
      </form>
      <button class="saveNCloseBtn saveEditBtn">Save & Close</button>
      <button class="deleteCheckedboxBtn">Delete checked</button>
      <button class="deleteWholeTodo">Delete whole</button>
    </div>
`}

function attachListenerToCheckboxes(){
  document.querySelectorAll(".liCheckbox").forEach((x,y) => x.addEventListener("click", () => {
    // console.log(y, x, "checked")
      let checkedBoxes = document.querySelectorAll('input[class="liCheckbox"]:checked');
      checkedBoxes.forEach((z) => {
      // z.parentNode.style.backgroundColor = "lightblue";
      z.parentNode.style.textDecoration = "line-through"
      z.parentNode.style.fontStyle = "italic"
      z.parentNode.setAttribute("isChecked", "checked")
    });
  }))
  document.querySelectorAll(".liCheckbox").forEach((x,y) => x.addEventListener("click", () => {
    // console.log(y, x, "checked")
      let checkedBoxes = document.querySelectorAll('input[class="liCheckbox"]:not(:checked)');
      checkedBoxes.forEach((z) => {
      // z.parentNode.style.backgroundColor = "lightblue";
      z.parentNode.style.textDecoration = "none"
      z.parentNode.style.fontStyle = "normal"
      z.parentNode.setAttribute("isChecked", "notchecked")
      
      // console.log(z.parentNode.outerHTML);
      // console.log("checked :", x.parentNode.childElementCount);
    });
  }))
}
function listenerForDeleteBtnOnly() {
  document.querySelector(".deleteCheckedboxBtn").addEventListener("click", () => {
    let checkedBoxes = document.querySelectorAll('input[class="liCheckbox"]:checked');
    checkedBoxes.forEach((z) => {
      z.parentNode.remove();
    });
  })
}


function rulesetForNewTodoSubmission() {
  let formInputField = document.querySelector(".formInputField")
  let newTodoUL = document.querySelector(".newTodoUL")
  let newTodoForm = document.querySelector(".newTodoForm")
  if(formInputField.value =="") {
    console.log("form is empty")
    // return;
  } else {
    const newLi = document.createElement('li');
    newLi.setAttribute("class", "liTodo");
  
    const newLiBox = document.createElement("input");
    newLiBox.setAttribute("type", "checkbox");
    newLiBox.setAttribute("class", "liCheckbox")
    newLi.appendChild(newLiBox);

    const newLiContent = document.createTextNode((formInputField.value).trim());
    newLi.appendChild(newLiContent);

    newTodoUL.insertBefore(newLi, newTodoUL.children[0]);
    // console.log("new list submitted:", formInputField.value)
  }
  attachListenerToCheckboxes();
  newTodoForm.reset();
  newTodoForm.focus();
}

function preventBrowserReload(e) {
  e.preventDefault();
}






