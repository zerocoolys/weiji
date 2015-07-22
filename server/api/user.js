/**
 * Created by yousheng on 15/7/22.
 */

var mongojs = require('mongojs')

module.exports = function (server, db) {
    server.get('/:version/users/:id', function (req, res, next) {

        db.Users.findOne({_id: mongojs.ObjectId('55a8da314ef5899886c70cd9')}, null, function (err, docs) {

            docs.password = null;

            res.end(JSON.stringify(docs));
            next();
        })
        return;
    });
}
