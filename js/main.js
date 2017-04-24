function Scroll() { }
function MobileNav() { }

Scroll.prototype = {
    initialize: function () {
        this.workAnchor = $('#work-anchor');
        this.aboutAnchor = $('#about-anchor');
        this.workSection = $('#work');
        this.aboutSection = $('#about');
        this.initialiseListeners();
    },
    initialiseListeners: function () {
        var scope = this;

        if (scope.workSection) {
            this.workAnchor.on('click', function () {
                scope.scrollTo(scope.workSection);
            });
            this.aboutAnchor.on('click', function () {
                scope.scrollTo(scope.aboutSection);
            });

            $(window).scroll(function () {
                var workTop = scope.workSection.offset().top - 200,
                    aboutTop = scope.aboutSection.offset().top - 200,
                    windowScroll = $(this).scrollTop();
                if (windowScroll >= workTop && windowScroll < aboutTop) {
                    scope.workAnchor.addClass('selected');
                    scope.aboutAnchor.removeClass('selected');
                } else if (windowScroll >= aboutTop) {
                    scope.workAnchor.removeClass('selected');
                    scope.aboutAnchor.addClass('selected');
                }
            });
        }
    },
    scrollTo: function (element) {
        $('html, body').animate({
            scrollTop:  element.offset().top - 160
        }, 1000);
    }
};

MobileNav.prototype = {
    initialise: function () {
        this.openButton = $('#open-menu-button');
        this.closeButton = $('#close-menu-button');
        this.navigationContent = $('.navigation-content');
        this.links = $('.links a');
        this.initialiseListeners();
    },
    initialiseListeners: function () {
        var scope = this;
        this.openButton.on('click', function () {
            scope.navigationContent.show();
            scope.openButton.hide();
            scope.closeButton.show();
        });
        this.closeButton.on('click', function () {
            scope.navigationContent.hide();
            scope.openButton.show();
            scope.closeButton.hide();
        });
        this.links.on('click', function () {
            if (scope.isMobileTheme()) {
                scope.navigationContent.hide();
                scope.openButton.show();
                scope.closeButton.hide();
            }
        })
    },
    isMobileTheme: function () {
        return ($('.mobile-buttons').is(":visible"));
    }
};

$(document).ready(function () {
    var scroll = new Scroll();
    scroll.initialize();
    var mobileNav = new MobileNav();
    mobileNav.initialise();
});


