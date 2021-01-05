function myFunction(x) {
  if (x.matches) { // If media query matches
   
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "#2b0fde"
  } else {
  }
}

var x = window.matchMedia("(max-width: 800px)" || "(max-width: 300px)")
myFunction(x)



