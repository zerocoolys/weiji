//angular.module('weiji.controllers', []).controller('HomeCtrl', ['LoginModal', function ($scope, $rootScope, $ionicModal, $ionicActionSheet, LoginModal) {
app.controller('HomeCtrl', function ($scope, $rootScope, $ionicModal, $ionicActionSheet, Chats, LoginModalService) {

    $scope.data = {}

    console.log($rootScope)
    $ionicModal.fromTemplateUrl('pages/login.html', {
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.loginModal = modal;
    });

    $ionicModal.fromTemplateUrl('pages/register.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.registerModal = modal;
    });


    $scope.showLogin = function () {
        $scope.loginModal.show();
    }
    $scope.hideLogin = function () {
        console.log('hide');
        $scope.loginModal.hide();
    }

    $scope.showRegister = function () {
        $scope.loginModal.hide();

        $scope.registerModal.show();
    }
    $scope.hideRegister = function () {
        $scope.registerModal.hide();
    }


    $scope.showLocation = function () {
        console.log('!!')
    }


    $scope.showAction = function () {
        $ionicActionSheet.show({
            buttons: [
                {
                    text: '关注',
                    onclick: function () {
                        console.log('关注')
                    }
                },
                {
                    text: '屏蔽此人'
                }
            ],
            cancelText: '退出',
            buttonClicked: function (index) {
                console.log(this)
                this.buttons[index].onclick();
                return true;
            }
        })
    }
    // latest updates
})
    .controller('LoginCtrl', function ($scope) {

        $scope.data = {}

        $scope.login = function () {
            console.log('LOGIN user:' + $scope.data.username + ' - PW: ' + $scope.data.password);
        }
    })

    .controller('AboutCtrl', function ($scope) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});


    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })
    .controller('GeoCtrl', function ($cordovaGeolocation) {

        var posOptions = {timeout: 10000, enableHighAccuracy: true};
        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function (position) {
                var lat = position.coords.latitude
                var long = position.coords.longitude


                var map = new AMap.Map('mapContainer', {
                    resizeEnable: true,
                    //rotateEnable: true,
                    dragEnable: true,
                    zoomEnable: true,
                    //设置可缩放的级别
                    zooms: [10],
                    //传入2D视图，设置中心点和缩放级别
                    view: new AMap.View2D({
                        center: new AMap.LngLat(position.coords.longitude, position.coords.latitude),
                        zoom: 1
                    })
                });

                console.log(position)
            }, function (err) {
                // error
            });


        var watchOptions = {
            frequency: 1000,
            timeout: 3000,
            enableHighAccuracy: false // may cause errors if true
        };

        var watch = $cordovaGeolocation.watchPosition(watchOptions);
        watch.then(
            null,
            function (err) {
                // error
            },
            function (position) {
                var lat = position.coords.latitude
                var long = position.coords.longitude


                console.log(position)
            });


        watch.clearWatch();
    });