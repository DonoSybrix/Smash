goog.provide('Smash.Systems.RendererSystem');
goog.require('Game.System');

/**
 * Manage renderer elements.
 * @constructor
 * @extends Game.System
 * @param {Renderer.WebGLRenderer} renderer Reference to the renderer.
 * @param {Renderer.Scene} scene Reference to the scene.
 * @author Orhan Donovan <dono@sybrix.fr>
 */
Smash.Systems.RendererSystem = function( renderer, scene ) 
{
    Game.System.call( this );

    /**
    * Reference to the renderer.
    * @type {Renderer.WebGLRenderer}
    * @private 
    */
    this.renderer = renderer;

    /**
    * Reference to the used scene.
    * @type {Renderer.Scene}
    * @private
    */
    this.scene = scene;

    /**
    * Set allowed components.
    */
    this.key.allow('MeshComponent');

};
goog.inherits( Smash.Systems.RendererSystem, Game.System );

/**
 * Call when the system is initialised.
 * @override
 */
Smash.Systems.RendererSystem.prototype.init = function() 
{ 

};

/**
 * Update system's entities.
 * @override
 */
Smash.Systems.RendererSystem.prototype.processEntity = function( entity ) 
{
    /*var renderable      = entity.getComponent('MeshComponent').getRenderable();
    var transformable   = renderable.getTransformable();

    var position = transformable.getPosition();
    var rotation = transformable.getRotation();

    var tx = (0.5 - Math.random() ) * 0.2;
    var ty = (0.5 - Math.random() ) * 0.2;
    var tz = (0.3 - Math.random() ) * 0.1;

    transformable.setPosition( position[0] + tx, position[1] + ty, position[2] + tz );
    transformable.setRotation( rotation[0] + tx*2, rotation[1] + ty*2, rotation[2] + tz*2 )*/
};

/**
 * Shutdown the system, remove elements.
 * @override
 */
Smash.Systems.RendererSystem.prototype.shutdown = function() 
{ 

};

/**
 * Method call when a entity is added to the system.
 * @param {Game.Entity} entity Last entity added.
 * @override
 */
Smash.Systems.RendererSystem.prototype.onEntityAdded = function( entity ) 
{
    var renderable = entity.getComponent('MeshComponent');
    this.scene.add( renderable.getRenderable() );
};

/**
 * Method call when a entity is removed from the system.
 * @param {Game.Entity} entity Entity removed.
 * @override
 */
Smash.Systems.RendererSystem.prototype.onEntityRemoved = function( entity ) 
{ 
    var renderable = entity.getComponent('MeshComponent');
    this.scene.remove( renderable.getRenderable() );
};