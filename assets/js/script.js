var links = document.querySelectorAll("a[href^='#']");

links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    var targetId = this.getAttribute("href").substring(1);
    var elem = document.getElementById(targetId);

    if (elem) {
      window.scrollTo({
        top: elem.offsetTop,
        behavior: "smooth",
      });
    }
  });
});
// Check if the URL contains the query parameter "?i=1"
if (window.location.search.includes("?i=1")) {
  // Remove the query parameter from the URL
  var newUrl = window.location.href.replace("?i=1", "");

  // Replace the current entry in the browser's history
  history.replaceState({}, document.title, newUrl);
}
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};
