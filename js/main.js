$(document).ready(function () {
	// Counter Up 2 Init 
	jQuery(function ($) {
		"use strict";

		var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

		var $counters = $(".count-area .counter");

		/* Start counting, do this on DOM ready or with Waypoints. */
		$counters.each(function (ignore, counter) {
			var waypoint = new Waypoint({
				element: $(this),
				handler: function () {
					counterUp(counter, {
						duration: 2000,
						delay: 16
					});
					this.destroy();
				},
				offset: 'bottom-in-view',
			});
		});

	});
	//Skill Bar Init
	(function ($) {
		'use strict';

		$('.graph').rProgressbar({
			percentage: 90,
			fillBackgroundColor: '#201f24',
			backgroundColor: '#b4aeae'
		});
		$('.css').rProgressbar({
			percentage: 90,
			fillBackgroundColor: '#2ecc71'
		});



		$('.photoshop').rProgressbar({
			percentage: 62,
			fillBackgroundColor: '#201f24',
			backgroundColor: '#b4aeae'
		});



		$('.illus').rProgressbar({
			percentage: 60,
			fillBackgroundColor: '#201f24',
			backgroundColor: '#b4aeae'
		});



		$('.pdesign').rProgressbar({
			percentage: 84,
			fillBackgroundColor: '#201f24',
			backgroundColor: '#b4aeae'
		});







	})(jQuery);

	//Owl Carousel Init
	$('.test .owl-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		dots:true,
		navs:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			},
			1200:{
				items:1
			}
		}
	})


})