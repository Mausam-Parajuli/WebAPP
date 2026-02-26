const add = document.getElementById("add")
const remove = document.getElementById("remove")
const list = document.getElementById("list")
const addSection = document.getElementById("inputListContainer")

let currentLi = null

add.addEventListener("click", () => {
    currentLi = document.currentElement("li");
    addSection.style.display = "block"
})

const inputAddBtn = document.get