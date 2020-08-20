/* Theme Name: Responsive Landing Page Template
   Author: Mehedi002
   Version: 1.0.0
   File Description: Main jquery file of the template
*/

! function($) {
    "use strict";

    var WebSite = function() {};

    //scroll
    WebSite.prototype.initNavbarStickey = function() {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= 50) {
                    $(".sticky").addClass("darkheader");
                } else {
                    $(".sticky").removeClass("darkheader");
                }
            });
        },

        WebSite.prototype.initMagnificPopup = function() {
            $('.video-play-icon-trigger').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        },

        WebSite.prototype.initNavbarToggler = function() {
            var scroll = $(window).scrollTop();

            $('.navbar-toggle').on('click', function(event) {
                $(this).toggleClass('open');
                $('#navigation').slideToggle(400);
            });

            $('.navigation-menu>li').slice(-2).addClass('last-elements');

            $('.menu-arrow,.submenu-arrow').on('click', function(e) {
                if ($(window).width() < 992) {
                    e.preventDefault();
                    $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
                }
            });
        },

        WebSite.prototype.initTestimonialSlider = function() {
            $('#owl-demo').owlCarousel({
                autoplay: true,
                lazyLoad: true,
                loop: true,
                margin: 20,
                /*
               animateOut: 'fadeOut',
               animateIn: 'fadeIn',
               */
                responsiveClass: true,
                autoHeight: true,
                autoplayTimeout: 7000,
                smartSpeed: 800,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },

                    600: {
                        items: 3
                    },

                    1024: {
                        items: 4
                    },

                    1366: {
                        items: 4
                    }
                }
            });
        },

        WebSite.prototype.initSmoothLink = function() {
            $('.navigation-menu a').on('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 0
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        },

        WebSite.prototype.initScrollspy = function() {
            $("#navigation").scrollspy({
                offset: 50
            });
        },

        WebSite.prototype.init = function() {
            this.initNavbarStickey();
            this.initMagnificPopup();
            this.initNavbarToggler();
            this.initTestimonialSlider();
            this.initSmoothLink();
            this.initScrollspy();
        },
        //init
        $.WebSite = new WebSite, $.WebSite.Constructor = WebSite
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.WebSite.init();
}(window.jQuery);