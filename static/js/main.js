var SCROLL_EPSILON = 10;

var $header = $('#header');
var $input = $('#header-search-input');
var $logo = $('#header-logo');
var $navbar_toggler = $('#header-navbar-toggler');
var $search_icon_mobile = $('#header-search-icon-mobile');

function toggleMobileSearch() {

	if( $header.hasClass('search-toggled-mock') )
	{
		$search_icon_mobile.removeClass('fa-times');
		$search_icon_mobile.addClass('fa-search');

		$header.removeClass('search-toggled-mock');
	}
	else
	{
		$search_icon_mobile.removeClass('fa-search');
		$search_icon_mobile.addClass('fa-times');

		$header.addClass('search-toggled-mock');

		$input.focus();
	}
}

function toggleMobileNavbar() {
	$navbar = $('#header-navbar');

	if( $navbar.hasClass("forced-flex") )
	{
		$navbar.removeClass("forced-flex");
	}
	else
	{
		$navbar.addClass("forced-flex");
	}
}

function focusSearch() {
	$('#navbar-search-input').focus();
}

var lastScrollTop = 0;

window.addEventListener("scroll", function(){

	var st = window.pageYOffset || document.documentElement.scrollTop;
	 if (Math.abs(st - lastScrollTop) > SCROLL_EPSILON || !st) {
   		if (st > lastScrollTop || !st){
				$header.addClass("header-sticky-beyond-screen");

				setTimeout(function() {
					$header.removeClass("header-sticky");
					$header.removeClass("header-sticky-on-screen");
					$header.removeClass("header-sticky-beyond-screen");
				}, 250)
   		} else {
				if (!$header.attr("class").split(/\s+/).includes("header-sticky")) {
					$header.addClass("header-sticky");
		
					setTimeout(function() {
						$header.addClass("header-sticky-on-screen");
					}, 0)
			}
   	}
	}

   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);