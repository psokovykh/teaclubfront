"use strict";

function toggleMobileSearch() {
  $header = $('#header');
  $input = $('#header-search-input');
  $logo = $('#header-logo');
  $navbar_toggler = $('#header-navbar-toggler');
  $search_icon_mobile = $('#header-search-icon-mobile');

  if ($header.hasClass('search-toggled-mock')) {
    $logo.removeClass('forced-hiden-on-xs');
    $navbar_toggler.removeClass('forced-hiden-on-xs');
    $input.removeClass('forced-inline-block');
    $header.removeAttr('style');
    $search_icon_mobile.removeClass('fa-times');
    $search_icon_mobile.addClass('fa-search');
    $header.removeClass('search-toggled-mock');
  } else {
    $logo.addClass('forced-hiden-on-xs');
    $navbar_toggler.addClass('forced-hiden-on-xs');
    $input.addClass('forced-inline-block');
    $header.attr('style', 'grid-template-areas: "search" "navbar" !important; grid-template-columns: auto !important;');
    $search_icon_mobile.removeClass('fa-search');
    $search_icon_mobile.addClass('fa-times');
    $input.focus();
    $header.addClass('search-toggled-mock');
  }
}

function toggleMobileNavbar() {
  $navbar = $('#header-navbar');

  if ($navbar.hasClass("forced-flex")) {
    $navbar.removeClass("forced-flex");
  } else {
    $navbar.addClass("forced-flex");
  }
}

function focusSearch() {
  $('#navbar-search-input').focus();
}