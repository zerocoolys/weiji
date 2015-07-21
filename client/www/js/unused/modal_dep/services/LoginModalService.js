/**
 * Created by yousheng on 15/7/21.
 */


modalModule.factory('LoginModalService', function ($ionicModal) {

    return {


        //$ionicModal.fromTemplateUrl('pages/register.html', {
        //    scope: $scope,
        //    animation: 'slide-in-up'
        //}).then(function (modal) {
        //    $scope.registerModal = modal;
        //});
        create: function ($scope) {
            $ionicModal.fromTemplateUrl('pages/login.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.loginModal = modal;
            });
        },
        showLogin: function ($scope) {
            $scope.loginModal.show();
        },

        hideLogin: function ($scope) {
            $scope.loginModal.hide();
        }

        //$scope.showRegister = function () {
        //    $scope.loginModal.hide();
        //
        //    //$scope.registerModal.show();
        //}
        //$scope.hideRegister = function () {
        //    //$scope.registerModal.hide();
        //}

    }

})