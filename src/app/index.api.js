(function ()
{
    'use strict';

    angular
        .module('angularApp')
        .factory('apiService', apiService)
        .service('apiInterceptor', apiInterceptor);

    /** @ngInject */
    function apiService($http)
    {


        // var api = {};

        // Base Url notśśśśś
        // var baseUrl = 'http://moutain-dev.ap-south-1.elasticbeanstalk.com/appname';
        var baseUrl = 'http://myahanauat.ahana.co.in:82/appname';
        apiService.baseUrl = baseUrl;

        apiService.getVendorCode = function(data){
            return $http.get(baseUrl+"/vendor_list/?search="+data);
        }

        apiService.getCatalougeList = function(){
            return $http.get(baseUrl+"/catelouge_list");
        }

        apiService.getSegregationList = function(){
            return $http.get(baseUrl+"/segregation_list");
        }

        return apiService;
    }


    function apiInterceptor($rootScope,$localStorage){
        var service = this;
        // debugger;
        service.request = function (config) {
            if(config.method != "GET"){
                config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            }else{
                config.headers = {}
            }
            if(angular.isDefined($localStorage.authorizationToken)){
                config.headers['Authorization'] = 'Token '+  $localStorage.authorizationToken;
            }
            return config;
        };

        service.response = function (response) {
            var response_code = response.data.code;
            if (response_code === 305){
                $rootScope.$broadcast();
            }
            return response;
        }
    }

})();