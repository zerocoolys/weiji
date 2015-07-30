ControllersModule.controller('InterestCtrl', function ($scope, $stateParams, $location, UserServices, PostsServices) {

    $scope.items = [
        { id: 1, name: 'Gotta Be Somebody', number: '1', time: '10分钟前', artist: 'Nickelback', image: 'posts/avatars/avatar1.jpg'},
        { id: 2, name: '是否康师傅', number: '20', time: '8分钟前', artist: 'Nickelback', image: 'posts/avatars/avatar1.jpg'},
        { id: 2, name: '吴瑞发速度快', number: '4', time: '14分钟前', artist: 'Nickelback', image: 'posts/avatars/avatar1.jpg'},
        { id: 1, name: 'Gotta Be Somebody', number: '1', time: '15分钟前', artist: 'Nickelback', image: 'posts/avatars/avatar1.jpg'},
        { id: 2, name: '是否康师傅', number: '10', time: '20分钟前', artist: 'Nickelback', image: 'posts/avatars/avatar1.jpg'},
        { id: 2, name: '吴瑞发速度快', number: '5', time: '30分钟前', artist: 'Nickelback', image: 'posts/avatars/avatar1.jpg'}
    ]
    $scope.lickimgs = [
        { show: 'posts/avatars/avatar1.jpg'},
        { show: 'posts/avatars/avatar1.jpg'},
        { show: 'posts/avatars/avatar1.jpg'},
        { show: 'posts/avatars/avatar1.jpg'},
        { show: 'posts/avatars/avatar1.jpg'},
        { show: 'posts/avatars/avatar1.jpg'},
        { show: 'posts/avatars/avatar1.jpg'},
        { show: 'posts/avatars/avatar1.jpg'}

    ]
})