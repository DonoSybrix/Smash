goog.provide('Smash.States.MainState');
goog.require('Game.State');
goog.require('Game.World');

goog.require('Renderer.Camera');
goog.require('Renderer.Scene');
goog.require('Renderer.Mesh');
goog.require('Renderer.Materials.Material');
goog.require('Renderer.PrimitiveBuilder');

/**
 * Entry of Smash. 
 * @constructor
 * @implements Game.State
 * @author Orhan Donovan <dono@sybrix.fr>
 */
Smash.States.MainState = function() 
{
	/**
	* World when we will stock and manage entities.
	* @type {Game.World}
	* @private
	*/
	this.world = new Game.World();

	/**
	* Camera used to render the scene.
	* @type {Renderer.Camera}
	* @private
	*/
	this.camera = new Renderer.Camera("3D" );

	/**
	* Mesh to test the engine.
	* @type {Renderer.Mesh}
	* @private
	*/
	this.mesh = null;

	/**
	* Scene containing the rendering element.
	* @type {Renderer.Scene}
	* @private
	*/
	this.scene = new Renderer.Scene();

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
	// Configurate camera.
	this.camera.setPosition( 0, 0, 2 );
	this.camera.lookAt( 0, 0, -5 );
	this.camera.setPosition( 0, 0, 0 );

	// Test mesh
	this.mesh = new Renderer.Mesh( 	Renderer.PrimitiveBuilder.Plane(), 
									new Renderer.Materials.Material() );
    this.mesh.transformable.setScale( 1, 1, 1 );
	this.scene.add( this.mesh );
};

/**
* Working on the rendering logic.
* @param {Game.GameInterface} game A reference to the game object.
*/
Smash.States.MainState.prototype.update = function( game ) 
{ 
	this.world.update();

	var rotation = this.mesh.getTransformable().getRotation();
    this.mesh.transformable.setRotation( rotation[0], rotation[1], rotation[2] + 0.01 );
};