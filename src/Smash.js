goog.provide('Smash.Game');
goog.require('Game.GameInterface');
goog.require('Smash.States.MainState');

/**
 * Entry of Smash game. 
 * @constructor
 * @extends Game.GameInterface 
 * @author Orhan Donovan <dono@sybrix.fr>
 */
Smash.Game = function() 
{
    Game.GameInterface.call( this );
};
goog.inherits( Smash.Game, Game.GameInterface );
goog.addSingletonGetter( Smash.Game );

/**
 * Prepare the game.
 */
Smash.Game.prototype.prepare = function() 
{ 
	// First state of the game.
	this.currentState = new Smash.States.MainState();

	// Renderer used by the game.
	this.renderer = new Renderer.WebGLRenderer( document.getElementById("test") );

	// Run the first state.
	this.currentState.start( this );
};