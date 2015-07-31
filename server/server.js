var restify = require('restify');
var socketIo = require('socket.io');
var morgan = require('morgan');
var server = restify.createServer();
var io = socketIo.listen(server.server);
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
server.get('/', function indexHTML(req, res, next) {
    next();
});

io.sockets.on('connection', function (socket) {
    socket.emit('news', {hello: 'world'});
    socket.on('my other event', function (data) {
        console.log(data);
    });
});
//===========================================

server.listen(process.env.PORT || 9804, function () {

    var init = require('./init_api.js')(server, db);

    console.log("Server started @ ", process.env.PORT || 9804);
});