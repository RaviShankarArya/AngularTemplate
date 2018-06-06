(function ()
{
    'use strict';

    angular
        .module('angularApp')
        .config(config);

    /** @ngInject */
    function config($translateProvider,$httpProvider)
    {
        // Put your common app configurations here

        // angular-translate configuration
        $httpProvider.interceptors.push('apiInterceptor');
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '{part}/i18n/{lang}.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('sanitize');
    }

})();