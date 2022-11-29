// Select DOM Elements
const updateTodoBtn = document.getElementById("addTodoBtn");
const newTodoForm = document.getElementById("newTodoForm");
const deleteList = document.getElementById("delBtn");
const checkAllBtn = document.getElementById("checkAllBtn");
const unCheckAllBtn = document.getElementById("unCheckAllBtn");
const toDoListUL = document.getElementById("toDoListUL");
const todoForm = document.getElementById("formTodo");

// Event Listener: Add Todo Button
// Feature: Add Todo
updateTodoBtn.addEventListener("click",() => {
  if(newTodoForm.value=="") {
    console.log("form is empty")
    void(0);
  } else {
    const newLi = document.createElement('li');
    newLi.setAttribute("class", "toDoListLI");
  
    const newLiBox = document.createElement("input");
    newLiBox.setAttribute("type", "checkbox");
    newLiBox.setAttribute("class", "toDoListBox")
    newLi.appendChild(newLiBox);

    const newLiContent = document.createTextNode(newTodoForm.value);
    newLi.appendChild(newLiContent);

    toDoListUL.insertBefore(newLi, toDoListUL.children[0]);
    console.log("new list submitted:", newTodoForm.value)
  }
  todoForm.reset();
  newTodoForm.focus();
});

// Feature: Complete Todo
checkAllBtn.addEventListener("click",() => {
  console.log("check all bbtn")
  let selectAllBox = document.querySelectorAll('input[class="toDoListBox"]');
  selectAllBox.forEach((x) => {
    x.checked = true;
    x.parentNode.style.backgroundColor = "lightblue";
  })
  newTodoForm.focus();
});

unCheckAllBtn.addEventListener("click",() => {
  console.log("UN-check all bbtn")
  let selectAllBox = document.querySelectorAll('input[class="toDoListBox"]');
  selectAllBox.forEach((x) => {
  x.checked = false;
  x.parentNode.style.backgroundColor = "lightgoldenrodyellow";
  })
  newTodoForm.focus();
});

// Feature: Delete Todo
deleteList.addEventListener("click", () => {
  let checkedboxes = document.querySelectorAll('input[class="toDoListBox"]:checked');
  console.log("list deleted")
  checkedboxes.forEach((x) => {
    x.parentNode.remove();
  });
  newTodoForm.focus();
});

//color background to lightblue when checked
toDoListUL.addEventListener("click", () => {
  let checkedBoxes = document.querySelectorAll('input[class="toDoListBox"]:checked');
    checkedBoxes.forEach((x) => {
      x.parentNode.style.backgroundColor = "lightblue";
      // console.log("checked :", x.nextSibling.nodeName);
      console.log("checked :", x.nextSibling.nodeValue);
      // console.log("checked :", x.parentNode.childElementCount);
    });
    newTodoForm.focus();
});

//remove background color when unchecked
toDoListUL.addEventListener("click", () => {
  let unCheckedBox = document.querySelectorAll('input[class="toDoListBox"]:not(:checked)');
    unCheckedBox.forEach((x) => {
      x.parentNode.style.backgroundColor = "lightgoldenrodyellow";
      console.log("UN-checked :", x.nextSibling.nodeValue);
    });
    newTodoForm.focus();
});

//prevent page from refreshing after form submit
todoForm.addEventListener("submit", function(e) {
  e.preventDefault();
});

