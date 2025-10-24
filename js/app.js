$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: true,
		appendDots: '.slider-dots',
		dotsClass: 'dots',
	});


	let hamburger = document.querySelector('.hameburger');
	let closee = document.querySelector('.closee');
	let mobileNav = document.querySelector('.mobile-nav');

	hamburger.addEventListener('click', function () {
		mobileNav.classList.add('open');
	});
	closee.addEventListener('click', function () {
       mobileNav.classList.remove('open');  
    });
});
