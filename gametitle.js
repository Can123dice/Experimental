/*
*Add Pic: up+right,left = bounce
*click to start game
*
*ICING
*
*
*/



var GameTitle = function(game){};

GameTitle.prototype = {

	create: function(){
//Name Bouncy Brick
var me = this;

var scoreFont = "100px Arial";

me.scoreLabel = me.game.add.text((me.game.world.centerX), 100, "Bouncy Brick", {font: scoreFont, fill: "#fff"});
me.scoreLabel.anchor.setTo(0.5, 0.5);
me.scoreLabel.align = 'center';

//set background color
me.game.stage.backgroundColor = '749cde';
	},

	startGame: function(){
		this.game.state.start("Main");
	}

}
