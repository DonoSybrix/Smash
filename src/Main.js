goog.provide('Smash.Main');
goog.require('Smash.Game');

Smash.Main = function()
{
    var smash = new Smash.Game();
    smash.prepare();
    smash.start();
};

window['application'] = Smash.Main;