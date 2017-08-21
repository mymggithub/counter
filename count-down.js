function get_countdown(date_string) {
	var countDownDate = new Date(date_string).getTime();
	// Get todays date and time
	var now = new Date().getTime();
	// Find the distance between now an the count down date
	var distance = countDownDate - now;
	if (distance<0) {return false;}
	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	return {"d":days,"h":hours,"m":minutes,"s":seconds,"data":countDownDate};
}

(function($) {
	var z = setInterval(function() {
		$(".event").each(function(index, el) {
			if ($(this).data("date") == null){
				$(this).data("date",$(this).text())
			}
			date = $(this).data("date");
			
			t = get_countdown( date );
			if (t) {
				$(this).html(
					"<ul class='small-timer'>"
					+"<li>"+t.d+"<span class='timer-text'>d </span></li>"
						+"<li>"+t.h+"<span class='timer-text'>h </span></li>"
						+"<li>"+t.m+"<span class='timer-text'>m </span></li>"
						+"<li>"+t.s+"<span class='timer-text'>s </span></li>"
					+"</ul>"
				);
			}else{
				$(this).html("EXPIRED");
			}
		});
		// clearInterval(z);
	}, 1000);
})(jQuery);



counterID="event";
d=document.getElementById(counterID).innerHTML
// Update the count down every 1 second
var x = setInterval(function() {
	t = get_countdown( d );
	https://www.sitepoint.com/jquery-each-function-examples/
	document.getElementById(counterID).innerHTML = 
	"<ul class='small-timer'>"
	+"<li>"+t.d+"<span class='timer-text'>d </span></li>"
		+"<li>"+t.h+"<span class='timer-text'>h </span></li>"
		+"<li>"+t.m+"<span class='timer-text'>m </span></li>"
		+"<li>"+t.s+"<span class='timer-text'>s </span></li>"
	+"</ul>";
	// If the count down is finished, write some text 
	if (t) {
		clearInterval(x);
		document.getElementById(counterID).innerHTML = "EXPIRED";
	}
}, 1000);
clearInterval(x);