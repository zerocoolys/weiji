/**
 * Created by dolphineor on 2015-8-5.
 *
 * 二维码扫描
 */
ServicesModule.factory('QRCodeScannerService', ['$q', '$cordovaBarcodeScanner', function ($q, $cordovaBarcodeScanner) {
    var sq = $q.defer();

    return {
        scanQRCode: function () {

            $cordovaBarcodeScanner.scan().then(function (result) {
                sq.resolve(result)
            }, function (err) {
                sq.resolve(err)
            });

            return sq.promise
        }
    }
}]);