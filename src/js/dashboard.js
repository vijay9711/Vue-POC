import $ from "jquery";

var $window = $(window)
$(window).on("scroll", function () {
    let height = document.getElementById("dashboard")
    console.log(height)
    // check_if_in_view(height)
});
// function check_if_in_view(height) {
//     var window_height = $window.height();
//     var window_top_position = $window.scrollTop();
//     var window_bottom_position = (window_top_position + window_height);
// }
// $(document).ready(() => {
//     const screen = $window.width()
//     if (screen > 1024) {
//         document.getElementById("#dashboard").addclass("nav-class")
//     }
//     console.log("screeen", screen)
// })