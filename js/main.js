'use strict';
$(document).ready(function () {
    if ((navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i))) {
        $("#main-nav li a").on("touchstart", function () {
            $(this).addClass('hover');
            console.log('touch started');
        });
        $("#main-nav li a").on("touchend", function () {
            $(this).removeClass('hover');
            console.log('touchend');
        })
    } else if ((!navigator.userAgent.match(/iPhone/i)) ||
        (!navigator.userAgent.match(/iPod/i)) ||
        (!navigator.userAgent.match(/iPad/i)))  {
        $("#main-nav li a").on("mouseenter", function(){
            $(this).addClass('hover');
            console.log('on hover');
        });
        $("#main-nav li a").on("mouseleave", function(){
            $(this).removeClass('hover');
            console.log('hover ended');
        })
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#main-nav').addClass('changeColor');
        }
        if ($(this).scrollTop() < 50) {
            $('#main-nav').removeClass('changeColor');
        }

        var outerHight = $("#main-nav").outerHeight();
        var topMenuHeight = outerHight + 15;

        $(".page-section").each(function (i) {
            if ($(this).hasClass("contact")) {
                topMenuHeight = outerHight + 150;
            }
            var scrollDistance = $(window).scrollTop() + topMenuHeight;
            if ($(this).position().top <= scrollDistance && $(this).position().top + $(this).height() > scrollDistance) {
                $('#main-nav li a').removeClass('activeMenu');
                $('#main-nav li a').eq(i).addClass('activeMenu');
            }
        });

        $.each(['.fadeDown', '.fadeUp'], function (i) {
            var bottomOfObject = $(this).position().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();

            if (bottomOfWindow > bottomOfObject) {
                $(this).addClass('activate');
            }
        });
    });
});

$(document).ready(function () {

    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 30
            }, 800);
        }
    });

    $('a[href^="#"]').click(function () {
        $('#main-nav').slideUp("fast", function () {
            $(this).slideDown("slow");
        });
    });
    $('.btn-header').click(function (event) {
        var target = $('#contact');
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800);
    });

    //    $(".nav-item").click(function () {
    //        $(".nav-item").removeClass('activeMenu');
    //        $(this).addClass('activeMenu');
    //    });

    $(".dropdown-li").on('click', function () {
        $(".dropdown-content").css("display", "none");
        console.log('dziala');
    });

    $(function () {
        var navMobile = $('.mobileHide');
        $(document.body).on('click', function () {
            navMobile.collapse('hide');
        });
    });

    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        $("*").css({
            "cursor": "pointer"
        });
    }

    // $(".language-select").click(function () {
    //     i18next.changeLanguage($(this).attr('id'), function () {
    //         $('.menu-lng').localize();
    //         $('.header-lng').localize();
    //         $('.aboutme').localize();
    //         $('.skills').localize();
    //         $('.contact').localize();
    //     });
    // });

    $(".english").html("english");
    $(".deutsch").html("deutsch");
    $(".polski").html("polski");
});
