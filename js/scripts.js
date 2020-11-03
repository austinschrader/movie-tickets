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

let movieTimes = [];

Title.prototype.movieInfo = function () {
	return (
		this.movieName +
		'; ' +
		'Release date: ' +
		this.releaseDate +
		'; ' +
		'Age Requirement: ' +
		this.requiredAge +
		'; ' +
		'Show Times: ' +
		this.movieTimes
	);
};

let avengersTitle = new Title('Avengers', 2019, 18, [
	'1:00PM',
	'4:00PM',
	'8:00PM',
]);
let titanicTitle = new Title('Titanic', 1997, 13, [
	'11:00AM',
	'3:30PM',
	'8:00PM',
]);
let cocoTitle = new Title('Coco', 2017, 0, [
	'10:30AM',
	'1:00PM',
	'4:00PM',
	'7:00PM',
]);

//Movie Title, 20xx, Age Requirement: x+, Show Times:

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

// // User Interface Logic
// // Instantiate the MoviesList object
// let moviesList = new MoviesList();
// // Instantiate the Title() object

// // Console Log that Avengers information

// console.log(avengersTitle.movieName);
// console.log(avengersTitle.releaseDate);
// console.log(avengersTitle.requiredAge);
// console.log(avengersTitle.movieTimes);

$(document).ready(function () {
	$('#click-me').click(function () {
		$('#show-movies').empty().toggle();
		$('#show-movies').append(avengersTitle.movieInfo() + '</br></br>');
		$('#show-movies').append(titanicTitle.movieInfo() + '</br></br>');
		$('#show-movies').append(cocoTitle.movieInfo() + '</br></br>');
	});

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
