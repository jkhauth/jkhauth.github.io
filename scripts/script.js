var i = 0;
var text = "Welcome! I'm John Kendall";
var speed = 70;
TypeWriter();

function TypeWriter() {
    if (i < text.length){
        document.getElementById("headline").innerHTML += text.charAt(i);
        i++
        setTimeout(TypeWriter, speed);
    }
  }