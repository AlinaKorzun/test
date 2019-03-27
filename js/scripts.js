$(document).ready(function () {
    $('.text_slick-wrapper').slick({
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 1
    });

//    CONTACT SIGNUP
    $(document).on('click', '.each_choose', function () {
        let that = $(this);
        $('.each_choose').removeClass('active');
        that.addClass('active');
    })

//    HAMBURGER
    $(document).on('click', '.hamburger_btn', function () {
        $('.hamburger').addClass('open');
        $('body, html').css({
            overflow: 'hidden',
            position: 'relative',
            height: '100%'

        })
    });

    $(document).on('click', '.hamburger .close', function () {
        $('.hamburger').removeClass('open');
        $('body, html').css({
            overflow: 'auto',
            position: 'relative',
            height: 'auto'
        })
    });

});
