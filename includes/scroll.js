$(document).ready( function () {

    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).parent().removeClass('active');
        })
        $(this).parent().addClass('active');

        var target = this.hash;
        var menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-10
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop() + 80;
    $('#menu-center ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if ( refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos ) {
            $('#menu-center ul li').removeClass("active");
            currLink.parent().addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}

$(function() {
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});