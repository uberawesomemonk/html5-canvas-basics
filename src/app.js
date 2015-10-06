// Don't start until domReady
$(function(){

	// Static Vars
	var CANVAS_WIDTH = 480;
	var CANVAS_HEIGHT = 320;
	var FPS = 30;

	// Create and insert DOM
	var canvasElement = $("<canvas width='" + CANVAS_WIDTH + 
	                      "' height='" + CANVAS_HEIGHT + "'></canvas>");
	var canvas = canvasElement.get(0).getContext("2d");
	canvasElement.appendTo('body');


	// Game loop
	// 
	// Run this code every X seconds
	setInterval(function() {
	  update();
	  draw();
	}, 1000/FPS);




	// Init vars
	var textX = 50;
	var textY = 50;

	var player = {
		color: "#00A",
		x: 220,
		y: 270,
		width: 32,
		height: 32,
		draw: function() {
			canvas.fillStyle = this.color;
			canvas.fillRect(this.x, this.y, this.width, this.height);
		}
	};








	// Update method
	function update() {
		textX += 1;
		textY += 0;
	}

	// Draw the update
	function draw() {
		// We have to clear our screen on each draw
		canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		// Draw our player
		player.draw();

		// Redraw
		canvas.fillStyle = "#000";
		canvas.fillText("Sup Bro!", textX, textY);
	}

});