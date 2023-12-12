document.querySelector(".submitBtn").addEventListener("click", function(e){

  const content = document.getElementsByClassName("editorArea")[0].innerHTML
  document.getElementById("hiddeneditorinput").value = content

},false)