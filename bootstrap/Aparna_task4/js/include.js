//include js to include header and footer
document.addEventListener("DOMContentLoaded", function () {
  // include header
  fetch("../html/header.html")
    .then((response) => response.text())
    .then((data) => document.body.insertAdjacentHTML("afterbegin", data));

  // include footer
  fetch("../html/footer.html")
    .then((response) => response.text())
    .then((data) => document.body.insertAdjacentHTML("beforeend", data));
});
