/**
 * Created by xiaowei on 15-7-29.
 */
ControllersModule.controller('CameradCtrl', function ($scope, $rootScope,CameraService,$cordovaCamera,$cordovaFile,$cordovaImagePicker) {
    $scope.allowUpload=true;
    $scope.text={
        addImage:"添加图片",
        upload:'上传'
    }
    CameraService.create($scope,$cordovaCamera,$cordovaImagePicker);
    //$scope.urlForImage = function(imageName) {
    //    var name = imageName.substr(imageName.lastIndexOf('/') + 1);
    //    var trueOrigin = cordova.file.dataDirectory + name;
    //    return trueOrigin;
    //}
})