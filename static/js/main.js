var SCROLL_EPSILON = 10;

var $header = $('#header');
var $header_search = $('#header-search');
var $header_navbar = $('#header-navbar');
var $input = $('#header-search-input');
var $logo = $('#header-logo');
var $navbar_toggler = $('#header-navbar-toggler');
var $search_icon_mobile = $('#header-search-icon-mobile');

function toggleMobileSearch() {

	if( $header.hasClass('search-toggled-mock') )
	{
		$search_icon_mobile.removeClass('fa-times');
		$search_icon_mobile.addClass('fa-search');

		$header_search.removeClass('header-search-shown-mobile');
		$header_navbar.removeClass('header-navbar-hidden-mobile');

		$header.removeClass('search-toggled-mock');
	}
	else
	{
		$search_icon_mobile.removeClass('fa-search');
		$search_icon_mobile.addClass('fa-times');

		$header_search.addClass('header-search-shown-mobile');
		$header_navbar.addClass('header-navbar-hidden-mobile');

		$header.addClass('search-toggled-mock');

		$input.focus();
	}
}

function toggleMobileNavbar() {
	$navbar = $('#header-navbar');

	if( $navbar.hasClass("forced-flex") )
	{
		$navbar.removeClass("forced-flex");
		$header.removeClass("header-expanded");
	}
	else
	{
		$navbar.addClass("forced-flex");
		$header.addClass("header-expanded");
	}
}

function focusSearch() {
	$('#navbar-search-input').focus();
}

var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....

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