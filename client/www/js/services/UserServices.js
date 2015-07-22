ServicesModule.factory('UserServices', function ($http, siteConfig) {
    return {
        info: function ($scope, id) {
            //$http.get(siteConfig.url + '/users/' + id).then(function (data) {
            //    console.log(data);
            //    $scope.person = data.data;
            //})

            $scope.person = {
                photo: 'http://localhost:8100/posts/avatars/avatar1.jpg',
                background: 'http://localhost:8100/posts/background/1.jpg',
                name: 'Jason',
                intro: 'Life itself never seems to be a ....'
            }
        }
    }
})