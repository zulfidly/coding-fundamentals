// Task: Build a notification pop up

// In this assignment, you are going to build a notification pop up. When you click the Add button, the notification will pop up and notify the user that the item has been added. You will find that a lot of the modern websites, especially e-commerce websites are using notification UIs to alert user about information.


const addButton = document.querySelector(".add__button");
const showNotification = document.querySelector(".notification");
const xButton = document.querySelector(".cta__button");

addButton.addEventListener("click", () => {
    showNotification.classList.add("show");
    setTimeout (addDelay, 3000);
});

xButton.addEventListener("click", () => {
    showNotification.classList.remove("show");
});

function addDelay () {
    showNotification.classList.remove("show");
}