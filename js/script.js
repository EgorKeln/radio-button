let buttons = document.querySelectorAll(".button");

$(".button").on("click", function() {
	if($(this).hasClass("active")) {
	} else {
		$(".button").removeClass("active");
		$(this).addClass("active");	
	}	
})