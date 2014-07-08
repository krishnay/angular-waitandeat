'use strict';

/**
 * @ngdoc overview
 * @name angularWaitandeatApp
 * @description
 * # angularWaitandeatApp
 *
 * Main module of the application.
 */
angular
  .module('myApp', [
    'ngRoute',
    'myApp.controllers',
    'firebase'
    ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing_page.html',
        controller: 'LandingPageController'
      })
      .when('/waitlist', {
        templateUrl: 'views/waitlist.html',
        controller: 'WaitlistController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
