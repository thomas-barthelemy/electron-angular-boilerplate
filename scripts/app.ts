/// <reference path='_app.ts' />

module App {
    'use strict';

    import IRouteProvider = angular.route.IRouteProvider;

    function AppConfig($routeProvider:IRouteProvider) {
        $routeProvider.when(
            '/', {
                templateUrl: './scripts/home/home.html'

            }
        );
        $routeProvider.otherwise({redirectTo: '/'});
    }

    var app = angular.module(
        'app',
        [
            'ngRoute',
            'ngMaterial',
            'ngAnimate'
        ],
        AppConfig
    );
}