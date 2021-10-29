document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".object").forEach(function (move) {

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}
new TypeIt(".simpleUsage", {
    strings: "",
    speed: 50,
    waitUntilVisible: true,
}).go();

$(document).ready(function () {
    //sticky navbar
    window.onscroll = () => {
        let header = document.querySelector('header');

        if (window.pageYOffset > 0) {
            header.classList.add("sticky")
        } else {
            header.classList.remove("sticky");
        }
    }
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (event) {
    event.target // newly activated tab
    event.relatedTarget // previous active tab
})
