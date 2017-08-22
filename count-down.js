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
function int_split(int) {
	return [Math.trunc(int/10),int%10]
}

/*=============================================
=            For All Class Evnents            =
=============================================*/

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

/*=====  End of For All Class Evnents  ======*/



/*============================================
=            For single event ids            =
============================================*/

counterID="event";
if (document.getElementById(counterID) != null) {
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
}

/*=====  End of For single event ids  ======*/



num = ['zero','one','two','three','four','five','six','seven','eight','nine'];
cleanClassNameArr = ['block_label', 'nums', 'block_r' , 'block_l'].concat(num);
$("div.svg_counter svg g, div.svg_counter svg path").each(function(index, el) {
	name = $(this).attr("id");
	if (name!=null) {
		for (var i = 0; i < cleanClassNameArr.length; i++) {
			if(name.indexOf(cleanClassNameArr[i])!==-1){
				name=cleanClassNameArr[i];
				break;
			}
		}
		$(this).addClass(name).removeAttr('id');
	}
});


	var zz = setInterval(function() {
		$("div.svg_counter svg").each(function(index, el) {
			$(this).find(".nums path").hide();
			if ($(this).data("date") == null){
				$(this).data("date","2017-10-30, 00:00")
			}
			date = $(this).data("date");
			
			t = get_countdown( date );
			console.log(t);
			if (t) {
				$(this).find(".sec .block_l .nums ."+num[ int_split(t.s)[0] ]).show();
				$(this).find(".sec .block_r .nums ."+num[ int_split(t.s)[1] ]).show();
				
				$(this).find(".min .block_l .nums ."+num[ int_split(t.m)[0] ]).show();
				$(this).find(".min .block_r .nums ."+num[ int_split(t.m)[1] ]).show();

				$(this).find(".hr .block_l .nums ."+num[ int_split(t.h)[0] ]).show();
				$(this).find(".hr .block_r .nums ."+num[ int_split(t.h)[1] ]).show();

				$(this).find(".day .block_l .nums ."+num[ int_split(t.d)[0] ]).show();
				$(this).find(".day .block_r .nums ."+num[ int_split(t.d)[1] ]).show();
			}else{
				// EXPIRED
			}
		});
		// clearInterval(zz);
	}, 1000);