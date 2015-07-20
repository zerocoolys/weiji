var pwdMgr = require('./managePassword');
var restify = require('restify')
var error_msg = require('../msg/error.json')
var validate = require('../utils/validates.js')
module.exports = function (server, db) {
// unique index
    db.Users.ensureIndex({
        email: 1
    }, {
        unique: true
    })

    server.get('/:version/user/:id', function (req, res, next) {
        res.end(JSON.stringify(req.params));
        return next();
    });

    server.post('/:version/login', function (req, res, next) {
        var credential = req.body


    });

    server.post('/:version/user', function (req, res, next) {
        var user = req.body;
        validate.isNull(user, function () {

        });
        user = JSON.parse(user);

        pwdMgr.cryptPassword(user.password, function (err, hash) {
            user.password = hash;
            console.log("n", hash);
            db.Users.insert(user,
                function (err, dbUser) {
                    if (err) { // duplicate key error
                        if (err.code == 11000) /* http://www.mongodb.org/about/contributors/error-codes/*/ {
                            res.writeHead(400, {
                                'Content-Type': 'application/json; charset=utf-8'
                            });
                            res.end(JSON.stringify({
                                error: err,
                                message: "A user with this email already exists"
                            }));
                        }
                    } else {
                        res.writeHead(200, {
                            'Content-Type': 'application/json; charset=utf-8'
                        });
                        dbUser.password = "";
                        res.end(JSON.stringify(dbUser));
                    }
                });
        });
        return next();
    });
    server.post('/api/v1/bucketList/auth/login', function (req, res, next) {
        var user = req.params;
        if (user.email.trim().length == 0 || user.password.trim().length == 0) {
            res.writeHead(403, {
                'Content-Type': 'application/json; charset=utf-8'
            });
            res.end(JSON.stringify({
                error: "Invalid Credentials"
            }));
        }
        console.log("in");
        db.appUsers.findOne({
            email: req.params.email
        }, function (err, dbUser) {
            pwdMgr.comparePassword(user.password, dbUser.password, function (err, isPasswordMatch) {
                if (isPasswordMatch) {
                    res.writeHead(200, {
                        'Content-Type': 'application/json; charset=utf-8'
                    });
// remove password hash before sending to the client
                    dbUser.password = "";
                    res.end(JSON.stringify(dbUser));
                } else {
                    res.writeHead(403, {
                        'Content-Type': 'application/json; charset=utf-8'
                    });
                    res.end(JSON.stringify({
                        error: "Invalid User"
                    }));
                }
            });
        });
        return next();
    });
};