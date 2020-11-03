// Business Logic
//MovieList = [];

//ticketPurchase,prototype.function();

// If/Else Statement
// Take these user inputs and put them through an if/else statement

// Create a MoviesList() Object, and a Titles Object
// time property associated with the titles

// new Titles() = "Titantic"
// Titanic.time = "10am, noon, 1pm"
// Matinee time = 9am to 12pm & 3:30pm to 6pm

// $10 for regular show, $5 for matinee and half off for seniors
// if title.releaseDate == new ; then the price is 50% more
// time is during matinee then the price is 50% off
// if the users age is 60+ then the price is 50% off

// User Interface Logic
let moviesList = new MoviesList();

$(document).ready(function () {
	$('#formOne').submit(function () {
		event.preventDefault();
		let userInputTitle = $('#userInputTitle').val();
		let userInputTime = $('#userInputTime').val();
		let userInputAge = $('#userInputAge').val();

		$('.userResults').append(userInputTitle);
		$('.userResults').append(userInputTime);
		$('.userResults').append(userInputAge);
	});
});
