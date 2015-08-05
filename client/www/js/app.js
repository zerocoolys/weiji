// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('weiji', ['ionic', 'ControllersModule', 'ServicesModule', 'ConfigModule', 'ngCordova'])

    .run(function ($ionicPlatform, NotificationServices) {

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

        NotificationServices.ready.then(function (device) {
            console.log(device)
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
            .state('index.search', {
                url: '/search',
                views: {
                    'search-tab': {
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
            //关注页
            .state('index.interesting', {
                url: '/interesting',
                views: {
                    'int-tab': {
                        templateUrl: 'pages/interesting.html',
                        controller: 'InterestCtrl'
                    }
                }
            })
            //个人中心
            .state('index.person', {
                url: "/person/:id",
                views: {
                    'account-tab': {
                        templateUrl: 'pages/person.html',
                        controller: 'UserCtrl'
                    }
                }

            })
            .state('person.favorite', {
                url: "/person/:id/favorite",
                templateUrl: 'pages/favorite.html',
                controller: 'FavoriteCtrl'
            });

// setup an abstract state for the tabs directive

// if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/index/home');

    })
    .constant('SERVER_URL', 'http://192.168.1.180:9804');
