(function($) {
    var currentSlide = 0;

    function resetButtons() {
        $('.next').toggle(currentSlide < $('.slide').length - 1);
        $('.prev').toggle(currentSlide > 0);
    }

    function changeSlide() {
        $('.slides').css({
            top: -1 * $(window).height() * currentSlide
        });
        resetButtons();
    }

    $(function() {
        $('.next').click(function() {
            currentSlide ++;
            changeSlide();
        });

        $('.prev').click(function() {
            currentSlide --;
            changeSlide();
        });

        changeSlide();
    });
})(jQuery);