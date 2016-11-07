$(window).keypress(function(e){
	if(e.keyCode === 108) {
		$('.bear').css({'margin-left': '+=100'});
		checkWinner();
} else if (e.keyCode === 97) {
		$('.doe').css({'margin-left': '+=100'});
		checkWinner();
	}
});

function checkWinner(){
	if ($('.bear').css('margin-left')==='1000px') {
		return 	$('h3').text("bear wins!");
	} else if ($('.doe').css('margin-left')==='1000px'){
		return $('h3').text("doe wins!");
	}
}
