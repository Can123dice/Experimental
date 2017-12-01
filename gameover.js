var GameOver = function(game){};

GameOver.prototype = {

  	create: function(){
      var me = this;
      //set background color
      me.game.stage.backgroundColor = '8979de';

      var scoreFont = "100px Arial";

      me.scoreLabel = me.game.add.text((me.game.world.centerX), 100, "Game Over!", {font: scoreFont, fill: "#fff"});
      me.scoreLabel.anchor.setTo(0.5, 0.5);
      me.scoreLabel.align = 'center';
      // adding a custom label button
      var button = me.game.add.button(
                              me.game.world.centerX,
                              me.game.world.centerY,
                              'button',
                              function openWindow() { // I guess this function is a listener>CLC
                                  alert('Hello Phaser!');
                              },
                              this,
                              0,
                              1,
                              2,
                              3);
                          button.anchor.x = .5;
                          button.anchor.y = .5;
                          button.input.useHandCursor = true;
    //Next: implement https://phaser.io/examples/v2/buttons/action-on-click

	},

	restartGame: function(){
		this.game.state.start("GameTitle");
	}

}
