
function makeGrid(){
	$('#pixel_canvas').children().remove();
	//select input size
	const gridWidth = $('#input_width').val();
	const gridHeight = $('#input_height').val();
	//create rows and columns
	if (gridWidth < 41 && gridHeight < 41) {
		for (let r = 0; r < gridHeight; r++) {
			$('#pixel_canvas').append("<tr></tr>");
			for (let c = 0; c < gridWidth; c++){
				$('tr').last().append('<td></td>');
			};
		};
	};
};


//select color input
$("#pixel_canvas").on("click", "td", function(){
	let color = $("#colorPicker").val();
	if($(this).attr("bgcolor")){
		$(this).removeAttr("bgcolor");
	}
	else{
		$(this).attr("bgcolor", color);}
});


$('#submit').on('click', function(evt){
	evt.preventDefault();
	makeGrid();
});


