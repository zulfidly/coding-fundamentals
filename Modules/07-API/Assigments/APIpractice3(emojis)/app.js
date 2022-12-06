const emojiForm = document.querySelector('#emoji-form')
const emojiImage = document.querySelector('#emoji-image')
const errorText = document.querySelector('#error-text')

const ENDPOINT = 'https://api.github.com/emojis'

async function getEmojis() {
  const response = await fetch(ENDPOINT);
  const data = await response.json()
  console.log(data);
  return data
}

// window.addEventListener("load", async() => {
//   await getEmojis();
// })

async function getEmoji(name) {
  const emojis = await getEmojis();
  const emoji = emojis?.[name] //return null if not found usin ?.

  if(emoji) {
    errorText.textContent = ""
    emojiImage.src = emoji
  } else {
    errorText.textContent = "No emoji found."
    emojiImage.src = ""
  }
}

emojiForm.addEventListener('submit', async(e) => {
  console.log("test")
  e.preventDefault();
  const emojiSearchInput = emojiForm.querySelector('input').value;
  await getEmoji(emojiSearchInput)
})

