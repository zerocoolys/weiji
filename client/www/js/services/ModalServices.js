/**
 * Created by yousheng on 15/7/21.
 */

ServicesModule.factory('LoginModalService', ['$ionicModal', function ($ionicModal) {

    return {
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
    }
}]).factory('RegisterModalService', function ($ionicModal) {
    return {
        create: function ($scope) {
            $ionicModal.fromTemplateUrl('pages/register.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.registerModal = modal;
            });
        },
        showRegister: function ($scope) {
            $scope.registerModal.show();
        },

        hideRegister: function ($scope) {
            $scope.registerModal.hide();
        }
    }
})
