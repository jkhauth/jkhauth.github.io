function myFunction(x) {
  if (x.matches) { // If media query matches
    $('#me-pic').hide()
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "#2b0fde"
  } else {
    $('#me-pic').show()
  }
}

var x = window.matchMedia("(max-width: 800px)" || "(max-width: 300px)")
myFunction(x)



