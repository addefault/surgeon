jQuery(document).ready(function() {
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
        if($('.reviews-wrapper .review').eq(needReview).length > 0 && needReview >= 0) {
            $('.reviews-wrapper .review.active').removeClass('active');
            $('.reviews-wrapper .review').eq(needReview).addClass('active');    
        }
    });
    $('.faq-header img').click(function() {
        $('.faq-item.active').removeClass('active');
        $(this).closest('.faq-item').addClass('active');
    });
});