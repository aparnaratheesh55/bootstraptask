// contents of include.js
document.addEventListener("DOMContentLoaded", function () {
    // include header
    fetch("header.html")
        .then(response => response.text())
        .then(data => document.body.insertAdjacentHTML("afterbegin", data));

    // include footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.body.insertAdjacentHTML("beforeend", data));
});

