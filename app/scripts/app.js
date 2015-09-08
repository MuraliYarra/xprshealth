'use strict';

/**
 * @ngdoc overview
 * @name xprshealthApp
 * @description
 * # xprshealthApp
 *
 * Main module of the application.
 */
angular
  .module('xprshealthApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-growl',
    'ngTable',
    "ui.bootstrap",
    'ui.router',
    "angular-loading-bar",
    "LocalStorageModule",
    'ngBootbox',
    "checklist-model",
  ])
  .config(function ($stateProvider,$sceProvider, $urlRouterProvider,growlProvider,$modalProvider,cfpLoadingBarProvider,localStorageServiceProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    $sceProvider.enabled(false);
    localStorageServiceProvider.setPrefix('xprscrm')
                               .setStorageType('sessionStorage')
                               .setNotify(true, true);
    // cfpLoadingBarProvider.latencyThreshold = 500;
    $modalProvider.options.animation = false;

    /* states*/
   
    $urlRouterProvider.otherwise("/main");
    $stateProvider.state('root',{
      url: '',
      views: {
        "content@":{
          controller:function($state){
            console.log("ok");
            $state.go('root.main');
          }
        },
        'header': {
          templateUrl: "views/header.html",
          // controller:"HeaderCtrl"
        },
        'header-aside': {
          templateUrl: "views/header-aside.html",
          controller:"HeaderCtrl"
        },
      }
    }).state('root.main', {
      url: "/main",
      views:{
        "content@":{
           templateUrl: "views/main.html",
           controller: 'MainCtrl'
        },
         "profile-box@root.main":{
           templateUrl: "views/profile-box.html",
        },
        "right-side-menu@root.main":{
           templateUrl: "views/right-side-menu.html",
        }
      }
     
    });
  });
