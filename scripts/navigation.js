var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

$("#portfoliocontent").hide()

$(document).ready(function(){
    $("#portfolio-btn").click(function(){
        $('#aboutmesection').slideToggle(600);
        $("#portfoliocontent").delay(600).slideToggle(600);
});
})

$(document).ready(function(){
  $("#home-btn").click(function(){
      $('#portfoliocontent').slideToggle(600);
      $("#aboutmesection").delay(600).slideToggle(600);
});
})
