function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle("branco")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("branco")) {
    img.setAttribute("src", "/assets/Untitled design.png")
  } else {
    img.setAttribute("src", "/assets/careca.png")
  }
  const alt = document.querySelector("#profile")
  if (html.classList.contains("branco")) {
    alt.setAttribute('alt="Gutin Sorrindo"')
  } else {
    alt.setAttribute('alt="Gutin Careca"')
  }
}
