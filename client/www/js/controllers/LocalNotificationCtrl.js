/**
 * Created by dolphineor on 2015-8-3.
 */
ControllersModule.controller('LocalNotificationCtrl', function ($rootScope, $scope, $cordovaLocalNotification, SERVER_URL) {
    $scope.add = function (message) {
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 1);
        $cordovaLocalNotification.add({
            id: "1234",
            date: alarmTime,
            message: message,
            title: "This is a title",
            autoCancel: true,
            sound: null
        }).then(function () {
            console.log("The notification has been set");
        });
    };

    $scope.isScheduled = function () {
        $cordovaLocalNotification.isScheduled("1234").then(function (isScheduled) {
            alert("Notification 1234 Scheduled: " + isScheduled);
        });
    };

    $scope.initSocket = function () {
        var socket = io(SERVER_URL + '/news');
        socket.on('message', function (data) {
            console.log("Socket Client Received Message: " + JSON.stringify(data));
            $scope.add(data);
        });
    };

    $scope.initSocket();
});
