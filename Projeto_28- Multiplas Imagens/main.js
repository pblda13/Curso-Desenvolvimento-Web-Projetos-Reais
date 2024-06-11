const imagens = ["imagens/image_1", "imagens/image_2", "imagens/image_3"]

let currentIndex = 0
let imageElement = document.getElementById("image")
let buttonElement = document.getElementById("button")

buttonElement.addEventListener("click", function () {
  currentIndex++
  if (currentIndex >= imagens.length) {
    currentIndex = 0
  }
  imageElement.src = imageElement[currentIndex]
})
