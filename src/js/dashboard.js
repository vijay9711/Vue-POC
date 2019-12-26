import $ from "jquery";
$(window).resize(function () {
    let screenWidth = $(window).width();
    if (screenWidth > 580) {
        $("#set-toggle-true").click();
    }
    if (screenWidth < 580) {
        $("#close-nav").click();
    }
});
