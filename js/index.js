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
