function chanceColor() {
  let color = ["red", "green", "yellow", "orange","pink"]
  let randomColor = color[Math.floor(Math.random()*color.length)]
  document.body.style.backgroundColor = randomColor
}
