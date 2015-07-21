// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('weiji', ['ionic', 'ControllersModule', 'ServicesModule', 'ngCordova'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {


                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleLightContent();
                }

            });
        })

        .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

            $ionicConfigProvider.platform.android.tabs.position("bottom");

            $stateProvider
                .state('index', {
                    url: '/index',
                    abstract: true,
                    templateUrl: 'pages/tabs.html'

                })

                //用户主页
                .state('index.home', {
                    url: '/home',
                    views: {
                        'home-tab': {
                            templateUrl: 'pages/home.html',
                            controller: 'HomeCtrl'
                        }
                    }
                })
                //用户搜索页
                .state('search', {
                    url: '/search',
                    views: {
                        'search': {
                            templateUrl: '/pages/search.html',
                            controller: 'SearchCtrl'
                        }
                    }
                })
                //用户登录页
                .state('login', {
                    url: '/login',
                    views: {
                        'login': {
                            templateUrl: '/pages/login.html',
                            controller: 'LoginCtrl'
                        }
                    }
                }).state('register', {
                    url: '/register',
                    views: {
                        'register': {
                            templateUrl: '/pages/register.html',
                            controller: 'RegisterCtrl'
                        }
                    }
                })
                .state('index.interesting', {
                    url: '/interesting',
                    views: {
                        'register': {
                            templateUrl: 'pages/interesting.html',
                            controller: 'InterestCtrl'
                        }
                    }
                });

// setup an abstract state for the tabs directive

// if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/index/home');

        })
    ;

