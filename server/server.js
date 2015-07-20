var restify = require('restify');
var morgan = require('morgan');
var server = restify.createServer();
var db = require('mongojs')('weijiapp', ['Users', 'Posts', 'Locations'])

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(morgan('dev')); // LOGGER
// CORS
server.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

server.listen(process.env.PORT || 9804, function () {

    var init = require('./init_api.js')(server, db);



    console.log("Server started @ ", process.env.PORT || 9804);
});