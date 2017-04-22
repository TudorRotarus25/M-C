function Scroll() { }

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

$(document).ready(function () {
    var scroll = new Scroll();
    scroll.initialize();
});


