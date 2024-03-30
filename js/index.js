const portfolioButton =document.getElementById('portfolio-button');
const serverLoadingMessage = document.getElementById('server-message');
const containerDiv = document.querySelector(".container")


portfolioButton.addEventListener("click", function(){
  serverLoadingMessage.style.display = "block";
  containerDiv.style.opacity = "0.3";

  setTimeout(function() {
    serverLoadingMessage.style.display = "none";
    window.location.assign("https://heidis-python-portfolio.onrender.com/");
  }, 5000)
})
