/**
 * Created by yousheng on 15/7/20.
 */

ServicesModule.factory('PostServices', function ($http) {

    return {
        lastest: function ($scope) {
            $http.get('http://test.com/v1/users/' + id + '/posts').then(function (data) {
                console.log(data);

                $scope.posts = data;
            })
        }
    };

})