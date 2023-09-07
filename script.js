document.addEventListener("DOMContentLoaded", function (e) {
    var timerId = setInterval(function () {
        console.log("Hello");
    }, 500);
    document.addEventListener("dblclick", function (e) {
        clearInterval(timerId);
    });
});
