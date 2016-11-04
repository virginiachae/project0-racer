console.log('linked!');

$(window).keypress(function(e){
	if(e.keyCode === 108) {
		$('.pink').css({'margin-left': '+=100',
										'opacity' : '+=0.15'});
		checkWinner();
} else if (e.keyCode === 97) {
		$('.green').css({'margin-left': '+=100',
										'opacity' : '+=0.15'});
		checkWinner();
	}
});

function checkWinner(){
	if ($('.pink').css('margin-left')==='1100px') {
		//alert('pink wins!');
		$('body').prepend("<h3>pink wins!</h3>");
		$('.pink').css({'margin-left': '0'});
		$('.green').css({'margin-left': '0'});
	} else if ($('.green').css('margin-left')==='1100px'){
		//alert('green wins!');
		$('.container').prepend("<h3>green wins!</h3>");
		$('.green').css({'margin-left': '0'});
		$('.pink').css({'margin-left': '0'});

	}
}
