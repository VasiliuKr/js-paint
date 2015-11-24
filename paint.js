$divContainer = $('<div class="container"></div>');
$button = $('<button>Push me</button>');

$(document).ready(function(){
	$("body").prepend($button);
	$("body").append($divContainer);
	$divContainer.height("800px");
	$divContainer.width("800px");

	$("button").click(function () {
		var cellsQuantity = prompt('How many cells do you want?');
		var cellSize = 800 / Math.sqrt(cellsQuantity) + 'px';
		$divContainer.empty();
		for (i = 0; i < cellsQuantity; i++) {
			$(".container").prepend("<div class='cell'></div>");
		}
		$(".cell").css({
			'width' : cellSize,
			'height' : cellSize,
			'outline' : '1px solid black',
			'float' : 'left'
		});
		$('.cell').hover(function() {
			$(this).css({
				'background-color' : 'red'
			});
		});
	});
});

