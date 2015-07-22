var user = require('./api/user.js')


module.exports = function (server, db) {
    user(server, db)
}