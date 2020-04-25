$(function () {
	// sliders

	$('.main-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev" aria-label="slide prev"></button>',
		nextArrow: '<button type="button" class="slick-next" aria-label="slide next"></button>',
	});

	$('#projectsSlider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 2,
		centerPadding: 15,
		prevArrow: '<button type="button" class="slick-prev" aria-label="slide prev"><img src="./img/icons/carret-left.png" alt="arrows"></button>',
		nextArrow: '<button type="button" class="slick-next" aria-label="slide next"><img src="./img/icons/carret-right.png" alt="arrows"></button>',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
    },
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});
	$('#partnersSlider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 2,
		centerPadding: 15,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
    },
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});

	// phone mask
	//$(".phones").mask("+7(999) 999-99-99");

	// burger
	var burger = $('#burgerBtn');
	var mobileContent = $('.header-nav');

	burger.on('change', function () {
		mobileContent.toggleClass('show');
	});

	$(document).on('click', function (e) {
		var target = e.target;
		if (!target.closest('.burger') && !$(target).closest(mobileContent).length) {
			burger.prop('checked', false);
			mobileContent.removeClass('show');
		}
	});


	// tabs

	$('.tabs').on('click', '.tabs-link', function (e) {
		e.preventDefault();
		var active = $(this).data('target');
		var activeTab = $('#' + active);
		$('.tabs .tabs-link').each(function () {
			$(this).removeClass('active');
		});
		$('.tabs-content .tab').each(function () {
			$(this).removeClass('active');
			$(this).removeClass('fade');
		});
		$(this).addClass('active');
		activeTab.addClass('active');
		activeTab.addClass('fade');
	})

	// modal
	$('.modal-open').on('click', function (e) {
		e.preventDefault();
		var modal = $('.' + $(this).attr('data-target'));
		console.log(modal);
		modal.addClass('show');
		$('.backdrop').addClass('show');
		$('body').css('overflow', 'hidden');
	});

	$('.modal .close').on('click', function (e) {
		e.preventDefault();
		$('.modal').removeClass('show');
		$('.backdrop').removeClass('show');
		$('body').attr('style', '');
	})

});