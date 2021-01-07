function toggleMobileSearch() {
	$header = $('#header');

	
	$input = $('#header-search-input');
	$logo = $('#header-logo');
	$navbar_toggler = $('#header-navbar-toggler');
	$search_icon_mobile = $('#header-search-icon-mobile');

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
