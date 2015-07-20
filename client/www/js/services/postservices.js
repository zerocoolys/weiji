/**
 * Created by yousheng on 15/7/20.
 */

angular.service('postservices', [$rootScope])
    .factory('Posts', function ($rootScope) {
        var Posts = {

            latest: function () {

                $rootScope.$broadcast('lastest')

            }
        }

        return Posts;

    })