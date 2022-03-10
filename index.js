const myEmojis = ["👩‍💻", "👩", "🎧"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const shoesEmojis = ["👞", "👟", "🥾", "🥿", "👠", "👡", "👢" ]
const randomShoes = document.getElementById("random-shoes")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})
function chooseShoes(){
    let randomIndex = Math.floor(Math.random() * shoesEmojis.length)
    return shoesEmojis[randomIndex]    
}
console.log(chooseShoes())


//console.log(shoe)
randomShoes.addEventListener("click", function(){
    chooseShoes()
    const shoe = chooseShoes()
    //for (let i = 0; i < myEmojis.length; i++) {
      myEmojis.push(shoe)
      renderEmojis()
  //emojiContainer.innerHTML = `${myEmojis} ${shoe}`
    //} 
} )
// javascript