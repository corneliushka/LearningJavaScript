window.onload = function () {
    var mesElements = document.querySelectorAll("li.page-scroll");

    mesElements.forEach(function (element) {
        element.addEventListener('mouseenter', function (event) {
            element.style.backgroundColor = "rgb(31, 164, 182)";
        }, false);

        element.addEventListener('mouseleave', function (event) {
            element.style.backgroundColor = "rgb(44, 62, 80)";
        }, false);
    });
};