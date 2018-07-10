$(document).one('pageinit', function(){
	//add handler
	$('submitAdd').on('tab', addRun);
	/*
	 *Add a run
	 */
	 function addRun(){
		//Get form values
		var miles = $('#addMiles').val();
		var date = $('#addDate').val();
		
		//create 'run' object
		var run = {
			date: date,
			miles:
		}
	 }
});