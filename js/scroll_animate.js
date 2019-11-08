$(document).ready(function(){
	$(window).on('resize', function () {
		animate();
	})
});

$(document).on("scroll", function () {
	animate();
})

function animate(){
	var pageTop = $(document).scrollTop()
	var pageBottom = pageTop + $(window).height()
	var tags = $(".js-animate")

	for (var i = 0; i < tags.length; i++) {
		var tag = tags[i]

		if ($(tag).offset().top < pageBottom) {
			$(tag).addClass("js-animate--active")
		} else {
			$(tag).removeClass("js-animate--active")
		}
	}
}