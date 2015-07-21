ServicesModule.factory('AvatarDropdownService', function ($ionicActionSheet) {

    return {
        create: function ($scope) {
            $scope.showActionSheet = function (id) {
                $ionicActionSheet.show({
                    buttons: [
                        {
                            text: '关注',
                            onclick: function () {
                                console.log('关注' + id);
                            }
                        },
                        {
                            text: '屏蔽此人',
                            onclick: function () {
                                console.log('屏蔽' + id);
                            }
                        }
                    ],
                    cancelText: '退出',
                    buttonClicked: function (index) {
                        this.buttons[index].onclick();
                        return true;
                    }
                })
            }
        }
    }
})