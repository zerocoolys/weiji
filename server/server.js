var restify = require('restify');
var socketIo = require('socket.io');
var morgan = require('morgan');
var server = restify.createServer();
var io = socketIo.listen(server.server);
var fs = require('fs');
var db = require('mongojs')('weijiapp', ['Users', 'Posts', 'Locations']);

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

//================ Socket.io ================
server.get('/pushMsg', function indexHTML(req, res, next) {
    fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) {
            next(err);
            return;
        }

        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(data);
        next();
    });
});

/**
 * 用户订阅属性
 * username
 * type: 'android' / 'ios'
 * token
 */
io.of('/news').on('connection', function (socket) {

    // 监听用户订阅推送
    socket.on('registration', function (obj) {
        //
    });

    // push message to clients under a given scope identified by a pathname (eg: /news)
    socket.on('server_message', function (obj) {
        io.of('/news').emit('message', obj);
    });

    // 监听用户取消订阅
    socket.on('unregistration', function () {
        //
    });
});

server.listen(process.env.PORT || 9804, function () {

    var init = require('./init_api.js')(server, db);

    console.log("Server started @ ", process.env.PORT || 9804);
});
