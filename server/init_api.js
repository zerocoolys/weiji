var user = require('./js/auth/user.js')


module.exports = function (server, db) {
    user(server, db)
}