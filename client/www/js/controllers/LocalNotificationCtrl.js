/**
 * Created by dolphineor on 2015-8-3.
 */
ControllersModule.controller('LocalNotificationCtrl', function ($rootScope, $cordovaLocalNotification, SERVER_URL) {
    //$rootScope.add = function (message) {
    //    $cordovaLocalNotification.add({
    //        id: "1234",
    //        message: message,
    //        title: "This is a title",
    //        autoCancel: true,
    //        icon: 'http://sciactive.com/pnotify/includes/github-icon.png'
    //    }).then(function () {
    //        alert("The notification has been set");
    //        console.log("The notification has been set");
    //    });
    //};
    //
    //$rootScope.socket = io(SERVER_URL + '/news');
    //
    //$rootScope.isScheduled = function () {
    //    $cordovaLocalNotification.isScheduled("1234").then(function (isScheduled) {
    //        alert("Notification 1234 Scheduled: " + isScheduled);
    //    });
    //};
    //
    //$rootScope.initSocket = function () {
    //    $rootScope.logtest = "======";
    //
    //    //var socket = io(SERVER_URL + '/news');
    //    $rootScope.socket.on('message', function (data) {
    //        $rootScope.logtest = JSON.stringify(data);
    //        console.log("Socket Client Received Message: " + JSON.stringify(data));
    //        alert("Receive Message" + data);
    //        $rootScope.add(data);
    //    });
    //};
    //
    //$rootScope.initSocket();
});
