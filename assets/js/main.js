// preloder
$(window).on("load", function () {
    $(".preloder").fadeOut("slow");
});

$(document).ready(function () {
    // navbar sharink
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });




    // popup video
    const videoSrc = $("#plear-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function () {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#plear-1").attr("src", "")
        } else {
            $(".video-popup").addClass("open");
            if ($("#plear-1").attr("src") == '') {
                $("#plear-1").attr("src", videoSrc);
            }
        }
    });
    // feature carousel
    $('.image-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });
    // screenshort carousel


    // page scroling sectin
    $.scrollIt({
        topOffset: -50
    });
    // navbar collapse 
    $(".nav-link").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    // toggle theme -dark and light theme
    function toggleTheme() {
        if (localStorage.getItem("shala-theme") !== null) {
            if (localStorage.getItem("shala-theme") == "dark") {
                $("body").addClass("dark");
            } else {
                $("body").removeClass("dark");
            }
        }
        updateIcon();
    }
    toggleTheme();

    $(".toggle-theme").on("click", function () {
        $("body").toggleClass("dark");
        if ($("body").hasClass("dark")) {
            localStorage.setItem("shala-theme", "dark");
        } else {
            localStorage.setItem("shala-theme", "light");
        }
        updateIcon();
    })

    function updateIcon() {
        if ($("body").hasClass("dark")) {
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun")
        } else {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon")
        }
    }


});