goog.provide('Smash.States.MainState');
goog.require('Game.State');
goog.require('Game.World');

goog.require('Renderer.Camera');
goog.require('Renderer.Scene');
goog.require('Renderer.Mesh');
goog.require('Renderer.Materials.Material');
goog.require('Renderer.PrimitiveBuilder');
goog.require('Smash.Systems.RendererSystem');
goog.require('Smash.Components.RendererComponent');

/**
 * Entry of Smash. 
 * @constructor
 * @implements Game.State
 * @author Orhan Donovan <dono@sybrix.fr>
 */
Smash.States.MainState = function() 
{
	/**
	* Camera used to render the scene.
	* @type {Renderer.Camera}
	* @private
	*/
	this.camera = new Renderer.Camera("3D");

	/**
	* Scene containing the rendering element.
	* @type {Renderer.Scene}
	* @private
	*/
	this.scene = new Renderer.Scene();

	/**
	* World when we will stock and manage entities.
	* @type {Game.World}
	* @private
	*/
	this.world = new Game.World();

};

/**
* Call when the state passing inactif.
* @param {Game.GameInterface} game A reference to the game object.
*/
Smash.States.MainState.prototype.end = function( game ) 
{ 
	
};

/**
* Rendering stuff will be here.
* @param {Renderer.WebGLRenderer} renderer A reference to the renderer.
*/
Smash.States.MainState.prototype.render = function( renderer ) 
{ 
	renderer.render( this.scene, this.camera );
};

/**
* Call when the state start to be actif.
* @param {Game.GameInterface} game A reference to the game object.
*/
Smash.States.MainState.prototype.start = function( game ) 
{
	// Create renderer system.
	var rendererSystem = new Smash.Systems.RendererSystem( game.getRenderer(), this.scene );
	this.world.addSystem( rendererSystem );
};

/**
* Working on the rendering logic.
* @param {Game.GameInterface} game A reference to the game object.
*/
Smash.States.MainState.prototype.update = function( game ) 
{ 
	this.world.update();
};