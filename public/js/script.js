"use strict";

// custom module
import { addEventOnElems } from "./utils.js";

//search clear functionality
const $searchField = document.querySelector('[data-search-field]');
const $searchClear = document.querySelector('[data-search-clear]');

$searchClear?.addEventListener('click', function () {
  $searchField.value = '';
});

// logo animation in mobile
const $logo = document.querySelector('[data-logo]');

if (!sessionStorage.getItem('logoAnimated')) {
  $logo.classList.add('animate');
  sessionStorage.setItem('logoAnimated', true);
}

// menu toggle 
const $menuWrapper = document.querySelector('[data-menu-wrapper]');
const $menuToggler = document.querySelector('[data-menu-toggler]');

$menuToggler?.addEventListener('click', function () {
  $menuWrapper.classList.toggle('active');
});

// hide top bar on scroll down
const $page = document.querySelector('[data-page]');
let lastScrollPos = 0;

$page?.addEventListener('scroll', function () {
  if (lastScrollPos < this.scrollTop) {
    this.classList.add('header-hide');
  } else {
    this.classList.remove('header-hide');
  }
  lastScrollPos = this.scrollTop;
});

// ripple effect
const ripple = function ($rippleElem) {
  $rippleElem.addEventListener('pointerdown', function (event) {
    event.stopImmediatePropagation();

    const $ripple = document.createElement('div');
    $ripple.classList.add('ripple');

    this.appendChild($ripple);

    const removeRipple = () => {
      $ripple.animate({
        opacity: 0
      }, { fill: 'forwards', duration: 200 });

      setTimeout(() => {
        $ripple.remove();
      }, 1000)
    }

    this.addEventListener('pointerup', removeRipple);
    this.addEventListener('pointerleave', removeRipple);

    const rippleSize = Math.max(this.clientWidth, this.clientHeight);

    $ripple.style.top = `${event.layerY}px`;
    $ripple.style.left = `${event.layerX}px`;
    $ripple.style.width = `${rippleSize}px`;
    $ripple.style.height = `${rippleSize}px`;

  })
}

const $rippleElems = document.querySelectorAll('[data-ripple]');
$rippleElems?.forEach(item => ripple(item));

// image animation on loading
window.addEventListener('DOMContentLoaded', function () {
  const $animatedImages = document.querySelectorAll('[data-image-load-anim]');

  const addAnimation = function () {
    this.animate({
      opacity: 1
    }, { duration: 200, fill: 'forwards' });
  }

  $animatedImages.forEach($image => {
    $image.style.opacity = 0;

    if ($image.complete) {
      addAnimation.call($image);
    } else {
      $image.addEventListener('load', addAnimation);
    }
  })
});

// bottom nav item active
const $bottomNavItems = document.querySelectorAll('[data-bottom-nav-item]');
const $activeBottomNavItem = document.querySelector('[data-bottom-nav-item].active');

const activeNavItem = function () {
  $activeBottomNavItem?.classList.remove('active');
  this.classList.add('active');
}

$bottomNavItems && addEventOnElems($bottomNavItems, 'click', activeNavItem);

/**player modal  toglle*/
const $modalPlayer = document.querySelector('[data-modal-player]');
const $modalPlayerTogglers = document.querySelectorAll('[data-modal-player-toggler]');
const $modalPlayerOverlay = document.querySelector('[data-player-overlay]');

const toggleModalPlayer = function () {
  $modalPlayer.classList.toggle('active');
  $modalPlayerOverlay.classList.toggle('active');
}

$modalPlayerTogglers && addEventOnElems($modalPlayerTogglers, 'click', toggleModalPlayer);