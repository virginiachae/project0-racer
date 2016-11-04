console.log('linked!');


$(window).keypress(function(e){
	if(e.keyCode === 108) {
		$('.pink').css({'margin-left': '+=100'});
		checkWinner();
} else if (e.keyCode === 97) {
		$('.blue').css({'margin-left': '+=100'});
		checkWinner();
	}
});

function checkWinner(){
	console.log('checking winner');
}
