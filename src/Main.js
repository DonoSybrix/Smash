goog.provide('Smash.Main');
goog.require('Smash.Game');

Smash.Main = function()
{
    var smash = Smash.Game.getInstance();
    smash.prepare();
    smash.start();
};

window['application'] = Smash.Main;