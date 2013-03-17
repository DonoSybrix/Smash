goog.provide('Smash.Components.RendererComponent');
goog.require('Game.Component');

/**
 * A renderable component.
 * @constructor
 * @extends Game.Component
 * @param {Renderer.Core.Spacial} renderable Renderable element.
 * @author Orhan Donovan <dono@sybrix.fr>
 */
Smash.Components.RendererComponent = function( renderable ) 
{
    Game.Component.call( this );

    /**
    * Graphic element.
    * @type {Renderer.Core.Spacial}
    * @private
    */
    this.renderable = renderable;

};
goog.inherits( Smash.Components.RendererComponent, Game.Component );

/**
 * Return component's name.
 * @return {string} Name of the component.
 */
Smash.Components.RendererComponent.prototype.getComponentName = function() 
{
    return 'MeshComponent';
};

/**
 * Return rendrable element.
 * @return {Renderer.Core.Spacial} A reference to the renderable.
 */
Smash.Components.RendererComponent.prototype.getRenderable = function() 
{
    return this.renderable;
};