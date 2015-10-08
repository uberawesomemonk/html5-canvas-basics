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
		},
		shoot: function() {
			console.log("Pew pew");

			var bulletPosition = this.midpoint();
			var newBullet = Bullet({
					speed: 5,
					x: bulletPosition.x,
					y: bulletPosition.y
				});

			playerBullets.push(newBullet);

			console.log(playerBullets);
			// :) Well at least adding the key binding was easy...
		},
		midpoint: function() {
			return {
				x: this.x + this.width/2,
				y: this.y + this.height/2
			};
		}
	};



	/* KEY MANAGEMENT */
	var keys = ["none", "left", "right", "up", "down", "space"];
	var keydown = "none";
	

	// When a key is down on our website
	$(document).keydown(function(e){
		console.log(e.keyCode);

		if(e.keyCode == 32){
			console.log("SPACE WAS PRESSED!");
			keydown = keys[5];

		}else if(e.keyCode == 40){
			keydown = keys[4];

		}else if(e.keyCode == 38){
			keydown = keys[3];

		// If the key is the left key...
		}else if(e.keyCode == 37){
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



	/* BULLET MANAGEMENT */
	var playerBullets = [];

	function Bullet(I){
		I.active = true;

		I.xVelocity = 0;
		I.yVelocity = -I.speed;
		I.width = 3;
		I.height = 3;
		I.color = "#000";

		I.inBounds = function(){
			return 	I.x >= 0 && I.x <= CANVAS_WIDTH &&
					I.y >= 0 && I.y <= CANVAS_HEIGHT;
		};

		I.draw = function() {
			canvas.fillStyle = this.color;
			canvas.fillRect(this.x, this.y, this.width, this.height);
		};

		I.update = function(){
			I.x += I.xVelocity;
			I.y += I.yVelocity;

			I.active = I.active && I.inBounds();
		};

		return I;
	}




	// Update method
	function update() {

		if(keydown == "space"){
			player.shoot();
		}
		if(keydown == "down"){
			player.y += 5;
		}
 
		if (keydown == "up"){
			player.y -= 5;
		}

		if (keydown == "left") {
		 	player.x -= 5;
		}

		if (keydown == "right") {
			player.x += 5;
		}

		// PUT THE CLAMPS ON!!!!!!
		player.x = player.clamp(player.x, 0, CANVAS_WIDTH - player.width);
		player.y = player.clamp(player.y, 0, CANVAS_HEIGHT - player.height)
	
		// Updates x, y, and active
		playerBullets.forEach(function(bullet) {
			bullet.update();
		});

		// Removes inactive bullets
		playerBullets = playerBullets.filter(function(bullet){
			return bullet.active;
		});
	}


	// Draw the update
	function draw() {
		// We have to clear our screen on each draw
		canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		// Draw our player
		player.draw();

		// Draw all of our bullets
		playerBullets.forEach(function(bullet){
			//console.log(bullet);
			bullet.draw();
		});
	}

});