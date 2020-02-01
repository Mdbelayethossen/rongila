$( document ).ready( function (){
    // Counter Up 2 Init 
    jQuery(function ($) {
        "use strict";

        var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

        var $counters = $(".count-area .counter");

        /* Start counting, do this on DOM ready or with Waypoints. */
		$counters.each(function (ignore, counter) {
			var waypoint = new Waypoint( {
				element: $(this),
				handler: function() { 
					counterUp(counter, {
						duration: 3000,
						delay: 16
					}); 
					this.destroy();
				},
				offset: 'bottom-in-view',
			} );
		});

    });
})