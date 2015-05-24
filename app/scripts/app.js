'use strict';

/**
 * @ngdoc overview
 * @name dataVizApp
 * @description
 * # dataVizApp
 *
 * Main module of the application.
 */
angular
  .module('dataVizApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'highcharts-ng',
    'app.constants'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /portfolio
  $urlRouterProvider.otherwise('/main/');

  // States
  $stateProvider
  .state('main', {
    url: '/main/:team',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl',
  })
  .state('contact', {
    url: '/contact',
    templateUrl: 'views/contact.html',
  });
});