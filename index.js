const myEmojis = ["👨🏼‍💻", "🎿", "🎧"]
const emojiContainer = document.querySelector("#emoji-container")
const pushBtn = document.querySelector("#push-btn")
const unshiftBtn = document.querySelector("#unshift-btn")
const shiftBtn = document.querySelector("#shift-btn")
const popBtn = document.querySelector("#pop-btn")
const emojiInput = document.querySelector("#emoji-input")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

unshiftBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

pushBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})