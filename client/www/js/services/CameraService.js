/**
 * Created by xiaowei on 15-7-29.
 */
ServicesModule.factory('CameraService', function ($ionicActionSheet, $ionicLoading) {
    return {
        create: function ($scope, $cordovaCamera, $cordovaImagePicker) {
            $scope.showCameraModal = function () {
                //$scope.images = [];
                $ionicActionSheet.show({
                    titleText: '图片上传',
                    buttons: [
                        {
                            text: '拍照',
                            onclick: function () {
                                if (!navigator.camera) {
                                    $ionicLoading
                                    alert('请在真机环境中使用拍照上传。')
                                    return;
                                }
                                var options = {
                                    quality: 100,
                                    destinationType: Camera.DestinationType.FILE_URI,
                                    sourceType: Camera.PictureSourceType.CAMERA,
                                    allowEdit: false,
                                    encodingType: Camera.EncodingType.JPEG,
                                    targetWidth: 323,
                                    targetHeight: 600,
                                    popoverOptions: CameraPopoverOptions,
                                    correctOrientation: true,
                                    saveToPhotoAlbum: false
                                };

                                $cordovaCamera.getPicture(options).then(function (imageURI) {
                                    $scope.imageUrl = imageURI;
                                    //var img = document.getElementById("myImg");
                                    //img.src = "data:image/jpeg;base64," + imageURI;
                                    $scope.allowUpload = false;
                                }, function (err) {
                                    // error
                                });
                            }
                        },
                        {
                            text: '从相机里面选择一张',
                            onclick: function () {
                                if (!navigator.camera) {
                                    $ionicLoading
                                    alert('请在真机环境中使用相册功能。')
                                    return;
                                }
                                var options = {
                                    quality: 100,
                                    destinationType: Camera.DestinationType.FILE_URI,
                                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                                    allowEdit: false,
                                    encodingType: Camera.EncodingType.JPEG,
                                    targetWidth: 323,
                                    targetHeight: 600,
                                    popoverOptions: CameraPopoverOptions,
                                    correctOrientation: true,
                                    saveToPhotoAlbum: false
                                };

                                $cordovaCamera.getPicture(options).then(function (imageURI) {
                                    $scope.imageUrl = imageURI;
                                    //var img = document.getElementById("myImg");
                                    //img.src = "data:image/jpeg;base64," + imageURI;
                                    $scope.allowUpload = false;
                                }, function (err) {
                                    // error
                                });
                                //var options = {
                                //    quality: 50,
                                //    destinationType: Camera.DestinationType.FILE_URI,
                                //    sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
                                //    allowEdit: false,
                                //    encodingType: Camera.EncodingType.JPEG,
                                //    targetWidth: 323,
                                //    targetHeight: 600,
                                //    popoverOptions: CameraPopoverOptions,
                                //    correctOrientation: true,
                                //    saveToPhotoAlbum: false
                                //};
                                //$cordovaCamera.getPicture(options).then(function (imageURI) {
                                //    $scope.imageUrl = imageURI;
                                //    $scope.allowUpload = false;
                                //})
                            }
                        }
                    ],
                    cancelText: '取 消',
                    buttonClicked: function (index) {
                        this.buttons[index].onclick();
                        return true;
                    }
                });
                $scope.uploadImg = function () {
                    var fileURL = $scope.imageUrl;
                    var options = new FileUploadOptions();
                    options.fileKey = "file";
                    options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
                    options.mimeType = "image/jpeg";
                    options.chunkedMode = true;
                    var baseObj = {
                        "bucket": "weiji",
                        "expiration": (Date.parse(new Date()) / 1000) + 3600,
                        "save-key": "/test/{random}{.suffix}"
                    };
                    var baseStr = JSON.stringify(baseObj);
                    var policy = base64.base64encode(baseStr);
                    var signature = md5(policy + "&Ezfhr1z69Tg2+kcVus/mHHFBHqY=");
                    var params = {
                        //bucket: "weiji",
                        //expiration: (Date.parse(new Date()) / 1000) + 3600,
                        //'save-key': "/test/{random}{.suffix}",
                        policy: policy,
                        signature: signature
                    }
                    options.params = params;

                    $ionicLoading.show({
                        template: '上传中...'
                    });
                    var ft = new FileTransfer();
                    ft.upload(fileURL, "http://v0.api.upyun.com/weiji", function (data) {
                        alert(JSON.stringify(data));
                        $ionicLoading.hide();
                    }, function (error) {
                        alert(JSON.stringify(error));
                        $ionicLoading.hide();
                    }, options);

                }
            }
        }
    }
})
;