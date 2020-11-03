// Front End Logic
$(document).ready(function () {
	$('#formOne').submit(function () {
		event.preventDefault();
		let userInputTitle = $('#userInputTitle').val();
		let userInputTime = $('#userInputTime').val();
		let userInputAge = $('#userInputAge').val();

		$('.userResults').append(userInputTitle);
		$('.userResults').append(userInputTime);
		$('.userResults').append(userInputAge);

		// numberTo(userInput);
	});
});
