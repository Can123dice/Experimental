var Preload = function(game){};

Preload.prototype = {

	preload: function(){
		this.game.load.image('tile','assets/tile.png');
		this.game.load.image('player','assets/player.png');
		this.game.load.image('button','assets/button.png')

	},

	create: function(){
		this.game.state.start("Main");
	}
}
