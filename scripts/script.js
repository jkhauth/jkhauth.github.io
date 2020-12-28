var foldericon = $('#folder-icon')
var foldericon_open = $('#folder-icon-open')
var textcontent = $('#text-content')
var mainpic = $('#ascii-pic')
var projects = $('#projects')


$('ul').toggle()
$(foldericon_open).toggle()
$(projects).toggle()


$('#projectbtn').click(function (e) { 
  e.preventDefault();
  foldericon.toggle()
  foldericon_open.toggle()

  //main content
  $(textcontent).toggle()
  $(mainpic).toggle()

  //project content
  $(projects).toggle()
  $('ul').slideToggle("slow")
});


