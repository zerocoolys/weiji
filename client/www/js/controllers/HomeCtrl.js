//angular.module('weiji.controllers', []).controller('HomeCtrl', ['LoginModal', function ($scope, $rootScope, $ionicModal, $ionicActionSheet, LoginModal) {
ControllersModule.controller('HomeCtrl', function ($scope, $rootScope, $location, $stateParams, $ionicModal, RegisterModalService, LoginModalService, AvatarDropdownService, QRCodeScannerService, CameraService) {

    LoginModalService.create($scope);
    RegisterModalService.create($scope);
    AvatarDropdownService.create($scope);
    CameraService.create($scope);


    $scope.showLogin = function () {
        LoginModalService.showLogin($scope);
    };

    $scope.hideLogin = function () {
        console.log('hideLogin');
        LoginModalService.hideLogin($scope);
    };

    $scope.showRegister = function () {
        RegisterModalService.showRegister($scope);
    };

    $scope.hideRegister = function () {
        RegisterModalService.hideRegister($scope);
    };

    $scope.person = function (id) {
        console.log($location);

        $location.path('/person/' + id);
    };

    $scope.scanQRCode = function () {
        QRCodeScannerService.scanQRCode().then(function (result) {
            alert(JSON.stringify(result));
        }, function (err) {
            console.log("An error happened: " + JSON.stringify(err))
        });
    };

})
    .controller('LoginCtrl', function ($scope) {

        $scope.data = {};

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
                var lat = position.coords.latitude;
                var long = position.coords.longitude;


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
                var lat = position.coords.latitude;
                var long = position.coords.longitude;


                console.log(position)
            });


        watch.clearWatch();
    });