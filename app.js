let http = require('http');
const moment = require('moment');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    switch (req.url) {
        case '/':
            res.end("Bienvenidos");
            break;
        case '/productos':
            res.end("productos");
            break;
        case '/hora':
            res.end(moment().format('MMMM Do YYYY, h:mm:ss a'));
            break;

        default:
            res.end("Error, intente más tarde por favor");
            break;

            res.end("Terminado");

    }


    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("cuerpo");
}).listen(3030, 'localhost');

