let indexOfDeletedTodo;
function displayDeletedTodo() {
    objDeletedTodoJSON.forEach((x) => {
        allDeletedSect.innerHTML += `<p class="myDeletedTodo flexRowCenter" > ${x[0].title} <span class="editQuote">[view]</span> </p>`
    })
    document.querySelectorAll(".myDeletedTodo").forEach((obj, ind) => obj.addEventListener("click", () => {
      console.log('',obj, ind)
      indexOfDeletedTodo = ind;
        removeListenersFromForms();
      document.querySelector(".newTodoCtnr").remove();
      newTodoMainCtnr.innerHTML += expandDeletedTodo(ind)
      attachListenersToForms();
      attachListenerToCheckboxes();
      createNewTodoBtn.style.display = "block"
      tickOriginallyCheckedBoxes();
      listenerForDeleteBtnOnly();
      listenerDeletePermanentlyBtn();
      listenerRestoreBtn();
    })) 
  }
  
function expandDeletedTodo(ind) {
  // console.log(arrToJSON[ind][1])
  myLi = objDeletedTodoJSON[ind][1];
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
          <input class="formTitleInputField" type="text" size="" maxlength="" value='${objDeletedTodoJSON[ind][0].title}' autocomplete="off" />
          <input class="addTitleBtn" type="submit" value="Update"/>
      </form>
      <form class="newTodoForm">
          <input class="formInputField" type="text" size="30" maxlength="" placeholder="Start writing" autocomplete="off" />
          <input class="addLiBtn" type="submit" value="Update"/>
          <ul class="newTodoUL">${str}</ul>
      </form>
      <button class="saveNCloseBtn restoreBtn">Restore</button>
      <button class="deleteCheckedboxBtn">Delete checked</button>
      <button class="deletePermanentBtn">Delete permanently</button>
    </div>
`}

function listenerDeletePermanentlyBtn() {
    document.querySelector(".deletePermanentBtn").addEventListener("click", () => {
        console.log(indexOfDeletedTodo);
        console.log(objDeletedTodoJSON);
        objDeletedTodoJSON.splice(indexOfDeletedTodo, 1)
        updateActiveTodoOnLocalStorage();
        location.reload();
    })
}
function listenerRestoreBtn() {
    document.querySelector(".restoreBtn").addEventListener("click", () => {
        console.log(indexOfDeletedTodo);
        console.log(objDeletedTodoJSON);
        objDeletedTodoJSON.splice(indexOfDeletedTodo, 1)
        updateActiveTodoOnLocalStorage();
        location.reload();
    })
}
