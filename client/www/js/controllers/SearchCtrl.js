/**
 * Created by john on 2015/7/30.
 */
ControllersModule.controller('SearchCtrl', function ($scope, $stateParams, $location, $ionicSlideBoxDelegate,$interval,$ionicModal, $timeout) {
//焦点图
    $scope.item = [
        {itm : 'http://d2gxin9b07oiov.cloudfront.net/hotel_photo/98/landscape/p20131115_170414_0c3bee28.jpg'},
        {itm : 'http://d2gxin9b07oiov.cloudfront.net/hotel_photo/98/landscape/p20131115_170534_a6f972fb.jpg'},
        {itm : 'http://d2gxin9b07oiov.cloudfront.net/hotel_photo/98/landscape/p20131115_170536_7b6236a2.jpg'},
        {itm : 'http://d2gxin9b07oiov.cloudfront.net/hotel_photo/98/landscape/p20131115_170627_f4281564.jpg'},
        {itm : 'http://d2gxin9b07oiov.cloudfront.net/hotel_photo/98/landscape/p20131115_171027_b6eba637.jpg'}
    ];


    $scope.open_big_img = function() {
        $scope.caption_toggle = false;
        $scope.detail_slide_show = false;

        $timeout(function(){
            $ionicModal.fromTemplateUrl('big-image.html', function($ionicModal){
                // original : this line server call 0.1sec.
                $scope.common_modal = $ionicModal;
            }, { scope : $scope }).then(function(){
                $scope.imgs = $scope.item;
                $scope.common_modal.show();
                $scope.detail_slide_show = true;
                $scope.caption_toggle = true;
            });
        }, 1000);
    }


    $ionicSlideBoxDelegate.update();
    this.photos = [];
    for (var i = 0; i < 30; i++) {
        this.photos.push('http://lorempixel.com/250/250?q='+(i%30));
    }

})
    .factory('RestServices', function($q, $http) {
        var self = this;

        self.get_group = function() {
            var deferred = $q.defer();
            $http.get("http://www.buyastro.com/NewsDemo1/php/db.php?action=get_group").
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                    g_groupList=[];
                    for (var i = 0; i < data.length; i++) {
                        g_groupList.push({
                            ID: data[i].ID,
                            name: data[i].Name
                        });
                    }
                }).
                error(function(data, status, headers, config) {
                    deferred.reject("data: " + JSON.stringify(data) + ", status: " + JSON.stringify(status) + ", headers: " + JSON.stringify(headers) + ", config: " + JSON.stringify(config));
                });
            return deferred.promise;
        };

        self.get_news = function() {
            var deferred = $q.defer();
            $http.get("http://www.buyastro.com/NewsDemo1/php/db.php?action=get_news").
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                    g_newsList=[];
                    for (var i = 0; i < data.length; i++) {
                        g_newsList.push({
                            ID: data[i].ID,
                            groupID: data[i].GroupID,
                            title: data[i].Title,
                            avatharURL: data[i].Avatar_URL
                        });
                    }
                }).
                error(function(data, status, headers, config) {
                    deferred.reject("data: " + JSON.stringify(data) + ", status: " + JSON.stringify(status) + ", headers: " + JSON.stringify(headers) + ", config: " + JSON.stringify(config));
                });
            return deferred.promise;
        };

        self.get_news_content = function(ID) {
            var deferred = $q.defer();
            $http.get("http://www.buyastro.com/NewsDemo1/php/db.php?action=get_news_content&ID=" + ID).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject("data: " + JSON.stringify(data) + ", status: " + JSON.stringify(status) + ", headers: " + JSON.stringify(headers) + ", config: " + JSON.stringify(config));
                });
            return deferred.promise;
        };


        self.get_freshly_pressed = function(ID) {
            var deferred = $q.defer();
            $http.get("https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/31443").
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject("data: " + JSON.stringify(data) + ", status: " + JSON.stringify(status) + ", headers: " + JSON.stringify(headers) + ", config: " + JSON.stringify(config));
                });
            return deferred.promise;
        };





        return self;
    })
    .controller('searchBanner', function($scope, RestServices) {

        $scope.data = {
            grouplist: []
        };

        $scope.refresh = function() {
            RestServices.get_group()
                .then(function(result) {
                    $scope.debug1 = g_groupList;

                    RestServices.get_news()
                        .then(function(result) {
                            $scope.debug2 = g_newsList;
                            refreshData();
                        }, function(error) {
                            $scope.debug2 = error;
                        });

                }, function(error) {
                    $scope.debug1 = error;
                });
        }
        $scope.refresh();

        var refreshData = function() {
            $scope.data = {
                grouplist: []
            };

            for (var i = 0; i < g_groupList.length; i++) {
                var newslist = [];
                for (var j = 0; j < g_newsList.length; j++) {
                    if (g_newsList[j].groupID == g_groupList[i].ID)
                        newslist.push({
                            ID: g_newsList[j].ID,
                            title: g_newsList[j].title,
                            avatharURL: g_newsList[j].avatharURL
                        });
                }
                $scope.data.grouplist.push({
                    ID: g_groupList[i].ID,
                    'name': g_groupList[i].name,
                    newslist: newslist
                });
            }
        }
        refreshData();

    });
var g_groupList = [
     {
    ID: 2000,
    name: 'Sports'
}];

var g_newsList = [ {
    ID: 14,
    groupID: 2000,
    title: 'title14',
    avatharURL: 'http://www.buyastro.com/NewsDemo1/news_image_folder/20_AvatarImage.png?forimagetoreload=423015710'
}, {
    ID: 15,
    groupID: 2000,
    title: 'title15',
    avatharURL: 'http://www.buyastro.com/NewsDemo1/news_image_folder/20_AvatarImage.png?forimagetoreload=423015710'
},
    {
        ID: 15,
        groupID: 2000,
        title: 'title15',
        avatharURL: 'http://www.buyastro.com/NewsDemo1/news_image_folder/20_AvatarImage.png?forimagetoreload=423015710'
    },
    {
        ID: 15,
        groupID: 2000,
        title: 'title15',
        avatharURL: 'http://www.buyastro.com/NewsDemo1/news_image_folder/20_AvatarImage.png?forimagetoreload=423015710'
    },{
        ID: 15,
        groupID: 2000,
        title: 'title15',
        avatharURL: 'http://www.buyastro.com/NewsDemo1/news_image_folder/20_AvatarImage.png?forimagetoreload=423015710'
    },{
        ID: 15,
        groupID: 2000,
        title: 'title15',
        avatharURL: 'http://www.buyastro.com/NewsDemo1/news_image_folder/20_AvatarImage.png?forimagetoreload=423015710'
    },{
        ID: 15,
        groupID: 2000,
        title: 'title15',
        avatharURL: 'http://www.buyastro.com/NewsDemo1/news_image_folder/20_AvatarImage.png?forimagetoreload=423015710'
    },{
        ID: 15,
        groupID: 2000,
        title: 'title15',
        avatharURL: 'http://www.buyastro.com/NewsDemo1/news_image_folder/20_AvatarImage.png?forimagetoreload=423015710'
    },{
        ID: 15,
        groupID: 2000,
        title: 'title15',
        avatharURL: 'http://www.buyastro.com/NewsDemo1/news_image_folder/20_AvatarImage.png?forimagetoreload=423015710'
    },{
        ID: 15,
        groupID: 2000,
        title: 'title15',
        avatharURL: 'http://www.buyastro.com/NewsDemo1/news_image_folder/20_AvatarImage.png?forimagetoreload=423015710'
    }
];
