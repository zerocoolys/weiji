angular.module('camera.controllers', []).controller(
    "CameraCtrl", function ($scope,$ionicPlatform, $cordovaDevice, $cordovaCamera) {


        $scope.picture = function () {

            alert('haha')


            //$ionicPlatform.ready(function () {
            //
            //    console.log($cordovaDevice);
            //
            //    var device = $cordovaDevice.getDevice();
            //
            //    console.log(device);
            //    var cordova = $cordovaDevice.getCordova();
            //    console.log(cordova);
            //
            //    var model = $cordovaDevice.getModel();
            //    console.log(model);
            //
            //    var platform = $cordovaDevice.getPlatform();
            //    console.log(platform);
            //
            //    var uuid = $cordovaDevice.getUUID();
            //    console.log(uuid);
            //
            //    var version = $cordovaDevice.getVersion();
            //    console.log(version);
            //
            //
            //
            //}, false);

            $ionicPlatform.ready(function () {


                console.log(Camera);

                var options = {
                    quality: 50,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 100,
                    targetHeight: 100,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };

                $cordovaCamera.getPicture(options).then(function (imageData) {
                    var image = document.getElementById('myImage');
                    image.src = "data:image/jpeg;base64," + imageData;
                }, function (err) {
                    // error
                });

            }, false);


        }

    }
)
