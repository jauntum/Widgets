$(document).ready(function () {
	$(".pie, .circle, .vertical, .horizontal").each(function (index) { $(this).random(); });
	
	$(".pie").each(function (index) { $(this).pie(); });
    $(".circle").each(function (index) { $(this).circle(); });
    $(".vertical").each(function (index) { $(this).vertical(); });
    $(".horizontal").each(function (index) { $(this).horizontal(); });  
})