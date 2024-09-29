function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle("branco")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("branco")) {
    img.setAttribute("src", "/assets/Untitled design.png")
  } else {
    img.setAttribute("src", "/assets/careca.png")
  }
}
