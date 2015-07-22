/**
 * Created by yousheng on 15/7/20.
 */

ServicesModule.factory('PostsServices', function ($http) {

    return {
        user_posts: function ($scope, uid) {
            //$http.get('http://test.com/v1/users/' + id + '/posts').then(function (data) {
            //    console.log(data);
            //
            //    $scope.posts = data;
            //})


            $scope.posts = [
                {
                    id: "p1",
                    uid: "1",
                    user: "Jason",
                    content: "Content test!",
                    location: "123,213123",
                    locDisplay: "Sichuan Chengdu",
                    picture: "http://localhost:8100/posts/pics/1.jpeg",
                    comments: 102,
                    likes: 4,
                    tags: ["meishi", "mudidi"]
                },
                {
                    id: "p2",
                    uid: "1",
                    user: "Jason",
                    content: "Content test123123!",
                    location: "123,213123",
                    locDisplay: "Sichuan Leshan",
                    picture: "http://localhost:8100/posts/pics/2.jpeg",
                    comments: 102,
                    likes: 4,
                    tags: ["meishi", "mudidi"]
                }
            ]
        },
        get_post: function ($scope, pid) {
            $scope.post = {
                id: "p1",
                uid: "1",
                user: "Jason",
                content: "Content test!",
                location: "123,213123",
                locDisplay: "Sichuan Chengdu",
                picture: "http://localhost:8100/posts/pics/1.jpeg",
                comments: 102,
                likes: 4,
                tags: ["meishi", "mudidi"]
            }
        }
    };

})