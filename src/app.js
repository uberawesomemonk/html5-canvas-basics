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
	var player = {
		color: "#00A",
		x: 220,
		y: 270,
		width: 32,
		height: 32,
		draw: function() {
			canvas.fillStyle = this.color;
			canvas.fillRect(this.x, this.y, this.width, this.height);
		},
		clamp: function(val, min, max)
		{
			if(val < min){
				val = min;
			}else if(val > max){
				val = max;
			}

			return val;
		}
	};




	var keys = ["none", "left", "right"];
	var keydown = "none";
	

	// When a key is down on our website
	$(document).keydown(function(e){

		// If the key is the left key...
		if(e.keyCode == 37){
			// Set keydown to "left"
			keydown = keys[1];

		// if the ky is the right key...
		}else if(e.keyCode == 39){
			// Set keydown to "right"
			keydown = keys[2];
		}
	});

	// When a key is down on our website..
	$(document).keyup(function(e){
		// No keys down
		keydown = keys[0];
	});



	// Update method
	function update() {

		if (keydown == "left") {
		 	player.x -= 5;
		}

		if (keydown == "right") {
			player.x += 5;
		}

		// PUT THE CLAMPS ON!!!!!!
		player.x = player.clamp(player.x, 0, CANVAS_WIDTH - player.width);
		player.y = player.clamp(player.y, 0, CANVAS_HEIGHT - player.height)
	}


	// Draw the update
	function draw() {
		// We have to clear our screen on each draw
		canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		// Draw our player
		player.draw();
	}

});