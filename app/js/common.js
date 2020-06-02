
$(document).ready(function () {

		wow = new WOW(
			{
			boxClass:     'wow',      // default
			animateClass: 'animated', // default
			offset:       200,          // default
			mobile:       false,       // default
			live:         true        // default
		}
		)
		wow.init();


	// ------------------ scroll to form -------------------------

	let $contactBox = $('.contact')

	$('#toFormBtn').on('click', function(){
		$([document.documentElement, document.body]).animate({
			scrollTop: $contactBox.offset().top
	}, 2000);
	});

	// ------------------ counter -------------------------

	var waypoint = new Waypoint({
		element: document.getElementById('counter'),
		handler: function () {
			counter();
			this.destroy();
		},
		offset: '600px'
	});

	function counter() {
		let i = 1;
		let counterInterval = setInterval(() => {
			$('.target__counter-number').html(i);
			i++;
			if (i > 8) {
				clearInterval(counterInterval);
			}
		}, 200);
	}

	// ------------------ tabs -------------------------

	$('.health__btn').on('click', function () {
		$(this).addClass('active');
		$('.health__btn').not($(this)).removeClass('active');
		let num = +$(this).attr('data-num') - 1;
		let text = $('.health__item')[num];
		$('.health__item').not(text).removeClass('active');
		$(text).addClass('active');
	});

	$('.health__item-tab').on('click', function () {
		let dataNum = +$(this).attr('data-num');
		console.log(dataNum );

		$('.health__item-tab, .health__item-content').removeClass('active');
		$('.health__item-tab, .health__item-content').each(function(){
			let itemNum = +$(this).attr('data-num');
			if ( itemNum ===  dataNum ) {
				$(this).addClass('active');
			}
		});

	});

	/* $('.health__item-tab').on('click', function () {
		let $container = $(this).parents('.health__item');

		$(this).addClass('active');
		$($container).find('.health__item-tab').not($(this)).removeClass('active');
		
		let num = +$(this).attr('data-num') - 1;
		let text = $($container).find('.health__item-content')[num];
		$($container).find('.health__item-content').not(text).removeClass('active');
		$(text).addClass('active');
	}); */

	// ------------------ popup -------------------------

	$('.popup__close, .overlay').on('click', function(){
		$('body').removeClass('overlay');
		$('.popup').removeClass('active');
	})







});