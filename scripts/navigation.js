$('#portfolio').hide()


$(document).ready(function(){
    $("#portfolio-btn").click(function(){
        $('#homepage').slideToggle(600);
        $("#portfolio").delay(600).slideToggle(600);
});

portfoliobtn();
function portfoliobtn(){
    var x = window.matchMedia("(max-width: 700px)" || "(max-width:300px")
    if (x.matches) {
        $("#portfolio-btn").click(function(){
            window.location.href = "portfolio.html"
        });
        }
    }
});