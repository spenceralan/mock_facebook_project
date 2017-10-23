document.addEventListener('click', function(e){
  var titleElement = document.getElementById("title")
  if (e.target.matches('#title')) {
    if (titleElement.textContent === "facebook") {
      titleElement.textContent = "Spencer Alan"
    } else {
      titleElement.textContent = "facebook"
    }
  }
});