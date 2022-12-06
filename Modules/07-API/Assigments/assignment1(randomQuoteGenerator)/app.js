const quotePhrase = document.querySelector(".quotePhrase")
const quoteAuthor = document.querySelector(".quoteAuthor")
const button = document.querySelector(".button")
const quoteContainer = document.querySelector(".quoteContainer")

const ENDPOINT = "https://api.quotable.io/random"

async function getRandomQuote() {
  let response = await fetch(ENDPOINT)
  let data = await response.json();
  // console.log(data)
  // console.log(data.author)
  // console.log(data.content)
  quoteContainer.classList.remove("reemergeCenter")

  quotePhrase.textContent = "\"" + data.content+ "\"";
  quoteAuthor.textContent = "~" + data.author;
}

button.addEventListener("click", () => {
  quoteContainer.classList.add("reemergeCenter")
  setTimeout(getRandomQuote, 0);
})

window.addEventListener("load", () => {
  getRandomQuote();
})