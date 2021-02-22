/*!
 * HWCOE SYLLABI DISPLAY scripts
 */

jQuery(function($) {
	
	//Data Tables
	var table = $('#syllabi-table').DataTable( {
        "dom": 'lf<"table-wrapper"t>ip',
		//responsive: true,
		"pageLength": 50
	});
	
	table.on('page.dt', function() {
		$('html, body').animate({
			scrollTop: $(".dataTables_wrapper").offset().top -200
		}, 'slow');
	});
	
});

