


//Burger
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.header__list').click(function (event) {
		$('.header__burger,.header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
});



//Price to 



// let myNumber = document.getElementById("value3").innerHTML;
// let newValue = Number(myNumber).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');                   
// document.getElementById("value3").innerHTML = newValue;

