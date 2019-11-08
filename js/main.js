$(function(){
	// 用分享交朋友 收合區
	$('.tipslist__headingbox').click(function(){
				
		if ($(window).width() < 1024) {
			if ($(this).parent().prevAll().hasClass('tipslist__item--active')) {
				$(window).scrollTop($(this).offset().top - $('.tipslist__item--active .tipslist__caselist').outerHeight() - 115);
			} else {
				$(window).scrollTop($(this).offset().top - 115);
			}
		}

		$(this).parent().toggleClass('tipslist__item--active').siblings().removeClass('tipslist__item--active');
	});

	//主選單收合手機板
	$('.menu__trigger').click(function(){
		$(this).parents(".menu").toggleClass("menu--active");
	});
	$('.menu__item').click(function(){
		$(this).parents(".menu").toggleClass("menu--active");
	});

	//注意事項關閉
	$('.section-note__close').click(function(){
		$(this).parents(".section-note").removeClass("section-note--active");
	});
});

function noteShow() {
	$(".section-note").addClass("section-note--active");
}