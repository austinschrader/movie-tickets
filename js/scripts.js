// Business Logic for MoviesList
//MovieList = [];
function MoviesList() {
	this.titles = [];
	this.currentId = 0;
}

// Business Logic for a Title
function Title(movieName, releaseDate, requiredAge, movieTimes) {
	this.movieName = movieName;
	this.releaseDate = releaseDate;
	this.requiredAge = requiredAge;
	this.movieTimes = movieTimes;
}

//ticketPurchase.prototype.function();

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
// Instantiate the MoviesList object
let moviesList = new MoviesList();
// Instantiate the Title() object
let avengersTitle = new Title('Avengers', 2019, 18, '1:00PM');
// Console Log that Avengers information
console.log(avengersTitle.movieName);
console.log(avengersTitle.releaseDate);
console.log(avengersTitle.requiredAge);
console.log(avengersTitle.movieTimes);

$(document).ready(function () {
	$('.movie-options').append(avengersTitle.movieName);
	$('.movie-options').append(', released in ' + avengersTitle.releaseDate);
	$('.movie-options').append(
		' with a required age of  ' + avengersTitle.requiredAge + '.'
	);
	$('.movie-options').append(
		' The available time(s) are: ' + avengersTitle.movieTimes + ' '
	);

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
