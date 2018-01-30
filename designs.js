
function makeGrid(){
	$('#pixel_canvas').children().remove();
	//select input size
	var gridWidth = $('#input_width').val();
	var gridHeight = $('#input_height').val();
	//create rows and columns
	if (gridWidth < 41 && gridHeight < 41) {
		for (var r = 0; r < gridHeight; r++) {
			$('#pixel_canvas').append("<tr></tr>");
			for ( var c = 0; c < gridWidth; c++){
				$('tr').last().append('<td></td>');
			};
		};
	};
};


//select color input
$("#pixel_canvas").on("click", "td", function(){
	var color = $("#colorPicker").val();
	$(this).css("background-color", color);
});

$('#submit').on('click', function(evt){
	evt.preventDefault();
	makeGrid();
});


