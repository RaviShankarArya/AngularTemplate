(function ()
{
    'use strict';

    /**
     * Main module of the mainModule
     */
    angular
        .module('angularApp', [
            'pascalprecht.translate',
            'ui.router',
            'ngStorage',
            'ngAnimate', 
            'ngSanitize', 
            'ui.bootstrap'

            //custome modules
        ]);
})();