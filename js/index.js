const flashingText = document.querySelector('.flashing-text');
const texts = [
  "Thank you for waiting",
  "Free server is a little slow",
  "🙏"
];
let index = 0;

function changeText() {
  flashingText.textContent = texts[index];
  index = (index + 1) % texts.length;
}

setInterval(changeText, 5000);

function redirectToNewPage() {
  setTimeout(function() {
    window.location.href = 'https://heidis-python-portfolio.onrender.com/';
  }, 7000);
}

window.onload = function() {
  if (window.location.pathname === '/loading-page.html') {
    redirectToNewPage();
  }
};
