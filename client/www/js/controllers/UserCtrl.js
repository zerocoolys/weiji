ControllersModule.controller('UserCtrl', function ($scope, $stateParams, $location, UserServices, PostsServices) {

    UserServices.info($scope, $stateParams.id);
    PostsServices.user_posts($scope, $stateParams.id);

    $scope.person_info = function () {
        console.log($scope.person.id);
    }


    $scope.person_posts = function () {
        UserServices.posts($scope, $scope.person.id);
    }

    $scope.person_favorite = function () {
        $location.path('/person/' + $scope.person.id + '/favorite');
    }
})