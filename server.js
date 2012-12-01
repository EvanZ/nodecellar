/**
 * Created with JetBrains WebStorm.
 * User: evanzamir
 * Date: 11/30/12
 * Time: 11:25 PM
 * To change this template use File | Settings | File Templates.
 */
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');