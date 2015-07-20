module.exports.isNull = function (obj, cb) {
    if (obj == null || obj == undefined) {
        cb();
        return true;
    }
}