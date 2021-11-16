$(window).load(function() {
    function changeTabToIndex(i) {
        $('.steps-tabs .step-item.active, .steps-nav li.active').removeClass('active');
        $('.steps-tabs .step-item').eq(i).addClass('active');
        $('.steps-nav li').eq(i).addClass('active');
        let cclass = (i === $('.steps-nav li').first().index()) ? 'factive' :
        (i === $('.steps-nav li').last().index()) ? 'lactive' :
        '';
        $('.steps-container').removeClass('factive lactive').addClass(cclass);
        $('.steps-pagination span:first-child').html((++i < 10) ? '0' + i : i);
    }
    $('.steps-nav li').click(function() {
        if(!$(this).hasClass('active'))
            changeTabToIndex($(this).index());
    });
    $('.steps-wrapper .arrow').click(function() {
        let needTab = $('.steps-nav li.active').index() + ($(this).hasClass('arrow-left') ? -1 : 1);
        if($('.steps-tabs .step-item').eq(needTab).length > 0 && needTab >= 0)
            changeTabToIndex(needTab);
    });
    $('.reviews-nav img').click(function() {
        let needReview = $('.reviews-wrapper .review.active').index() + ($(this).hasClass('prev') ? -1 : 1);
        $('.reviews-nav .disabled').removeClass('disabled');
        if($('.reviews-wrapper .review').eq(needReview).length > 0 && needReview >= 0) {
            $('.reviews-wrapper .review.active').removeClass('active');
            $('.reviews-wrapper .review').eq(needReview).addClass('active');    
        }
        if($('.reviews-wrapper .review.active').index() === 0) {
            $('.reviews-nav .prev').addClass('disabled');
        } else if($('.reviews-wrapper .review.active').index() === $('.reviews-wrapper .review').last().index()) {
            $('.reviews-nav .next').addClass('disabled');
        }
    });
    $('.faq-header img').click(function() {
        $('.faq-item.active').removeClass('active').find('.faq-content').slideToggle();
        $(this).closest('.faq-item').addClass('active');
        $(this).closest('.faq-item').find('.faq-content').slideToggle();
    });
    if($('.childs-eq').length > 0) {
        $('.childs-eq').each(function() {
            let max = 0;
            $('.childs-eq').children().each(function() {
                if(!$(this).hasClass('active'))
                    $(this).css('display', 'flex');
                if($(this).height() > max)
                    max = $(this).height();
                if(!$(this).hasClass('active'))
                    $(this).hide();
            });
            $('.childs-eq').children().css('height', max);
        });
    }
    $('.popup-close').click(function() {
        $('body').removeClass('popuped');
        $(this).closest('.popup').fadeOut();
    });
    $('.popup-link').click(function(e) {
        e.preventDefault();
        $('body').addClass('popuped');
        $('.popup[data-popup="'+$(this).data('popup')+'"]').css("display", "flex").hide().fadeIn();
    });

    $('.popup.pws').css('display', 'flex');
    let slideWidth = $('.slider').width() / 3;
    $('.popup.pws').hide();
    $('.slider-track').css('width', $('.slider-track').children('.slide').length * slideWidth);
    $('.slide').css('width', slideWidth);
    $('.slider-arrow').click(function() {
        let activeSlide = ($('.slide.active').length>0) ? $('.slide.active').index() : 0;
        let lastSlide = $('.slide').last().index();
        let o = ($(this).hasClass('slider-prev')) ? -1 : 1;
        let needSlide = activeSlide + 3 * o;
        if(needSlide >= 0 && needSlide <= lastSlide) {
            $('.slider-arrow.disabled').removeClass('disabled');
            if(needSlide == 0)
                $('.slider-prev').addClass('disabled');
            else if(needSlide == lastSlide)
                $('.slider-next').addClass('disabled');
            $('.slide').eq(needSlide).addClass('active').siblings('.active').removeClass('active');
            $('.slider-track').css('transform', 'translateX('+-1*slideWidth*needSlide+'px)');
        }
    });
    $('.left-panel').show().css('left', $('.left-panel').outerWidth()*-1);
    $('.menu-call').click(function() {
        $('body').toggleClass('opened');
        let menuLeft = ($('body').hasClass('opened')) ? 113 : $('.left-panel').outerWidth()*-1;
        $('.left-panel').animate({
            left: menuLeft
          }, 400);
    });
});