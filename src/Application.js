goog.provide('Application.main');
goog.require('Mango.Renderers.WebGLRenderer');
goog.require('Mango.Objects.Mesh');
goog.require('Mango.Materials.MeshMaterial');
goog.require('Mango.Skybox');
goog.require('Mango.Sprite');
goog.require('Mango.Effects.PostFXComposer');
goog.require('Nucleus.ResourceManager');
goog.require('Mango.Core.TextureCubeMap');
goog.require('Mango.Materials.ShaderMaterial');
goog.require('Mango.Objects.Model');
goog.require('Mango.Geometric.Primitive');
goog.require('Mango.Objects.PointLight');

var temp = {
    renderer        : null,
    scene           : null,
    camera          : null,
    effectComposer  : null
};

/**
 * A sample for basic application. 
 * @constructor
 * @author Orhan Donovan <dono@sybrix.fr>
 */
Application.main = function() 
{
    /**
    * Return screen size.
    * @return {Object.<number, number>} Size of the screen.
    */
    function viewport()
    {
        var e = window
        , a = 'inner';
        if ( !( 'innerWidth' in window ) )
        {
        a = 'client';
        e = document.documentElement || document.body;
        }
        return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
    };

    var viewPortSize = viewport();
    var screenSize = { w: viewPortSize.width, h: viewPortSize.height };

    // Create renderer.
    var renderer = new Mango.Renderers.WebGLRenderer();
    renderer.setSize( screenSize.w, screenSize.h );
    renderer.appendTo( document.body );    
    temp.renderer = renderer;

    // Create the scene.
    var scene   = new Mango.Scenes.Scene();
    temp.scene  = scene;

    // Create the camera.
    var camera  = new Mango.Cameras.Camera("3D");
    camera.setPosition( 0, 0, 2 );
    camera.lookAt( 0, 0, -5 );
    camera.setPosition( 0, 0, 0 );
    temp.camera = camera;

    var teapotModel = null;
    var teapotObject = new Mango.Objects.Model('data/head.a3', function( modelGeometry )
    {
        var model = new Mango.Objects.Mesh({
            geometry: modelGeometry,
            material: new Mango.Materials.MeshMaterial()
        });
        model.material.setDrawingMode( goog.webgl.TRIANGLES );
        model.material.addTexture( metalTexture );
        model.transformable.setPosition( 0, 0, 0 );
        model.transformable.setScale( 0.02, 0.02, 0.02 );
        scene.add( model );
        teapotModel = model;
    });

    // Textures    
    var cubeGeometry = Mango.Geometric.Primitive.Cube();
    var metalTexture = new Mango.Core.Texture("data/metal.jpg");

    // Walls
    /*var sprite = new Mango.Sprite( metalTexture );

            sprite.transformable.setScale( 0.6,0.6, 0.5 );
            sprite.transformable.setPosition( 0 , 0.0 , 0 );
            sprite.setSubRect( 0, 0, 128, 128 );
            scene.add( sprite );
*/


             var light = new Mango.Objects.PointLight();
    light.setColor( 0, 255, 0 );
    light.transformable.setPosition( 0, 0, -10 );
    scene.add( light );

    var lightCube = new Mango.Objects.Mesh({
        geometry: cubeGeometry,
        material: new Mango.Materials.MeshMaterial()
    });
    lightCube.setTransformable( light.transformable );
    lightCube.material.addTexture( metalTexture );
    lightCube.transformable.setScale( 0.02, 0.02, 0.02 );
    scene.add( lightCube );

        /*   var wall1 = new Mango.Objects.Mesh({
                geometry : Mango.Geometric.Primitive.Cube(),
                material : new Mango.Materials.MeshMaterial()
            });

            wall1.material.addTexture( metalTexture );
            wall1.transformable.setScale( 0.5, 0.5, 0.5 );
            wall1.transformable.setPosition( 0, 0, 0 );
            scene.add( wall1 );*/

    var t = 0;
    function animloop()
    {
        t = new Date().getTime();
        window.requestAnimFrame(animloop);

        temp.renderer.render( temp.scene, temp.camera );

        var x = Math.sin( t / 1000 ) * 3;
        var y = 0.1;
        var z = Math.cos( t / 1000 ) * 3;
        light.transformable.setPosition( x / 10, y, z / 10 );

        //teapotModel.transformable.setRotation( x, y, z );
    };

    animloop();
};

    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

window['application'] = Application.main;

window.onresize = function(event) 
{
    var screenSize = { w: window.innerWidth, h: window.innerHeight };
    temp.renderer.setSize( screenSize.w, screenSize.h );
}