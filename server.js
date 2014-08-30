// Include The 'http' Module
var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");

var mimeTypes = {
      "html": "text/html"
    , "jpeg": "image/jpeg"
    , "jpg": "image/jpeg"
    , "png": "image/png"
    , "js": "text/javascript"
    , "css": "text/css"
};

// Create the HTTP Server
var server = http.createServer(function(req, res) {
    // Handle HTTP Request
    var uri = url.parse(req.url).pathname;
    var filename = path.join(process.cwd(), uri);
    var mimeType = mimeTypes[path.extname(filename).split(".").reverse()[0]];

    fs.exists(filename, function(exists) {
        if (!exists) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.write("404 Not Found\n");
            res.end();
            return;
        }

        if (fs.statSync(filename).isDirectory()) {
            filename += "/index.html";
        }

        fs.readFile(filename, "binary", function(err, file) {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.write(err + "\n");
                res.end();
                return;
            }

            if (mimeType) {
                res.writeHead(200, { "Content-Type": mimeType });
            }
            else {
                res.writeHead(200);
            }

            res.write(file, "binary");
            res.end();
        });
    });
}).listen(process.env.PORT || 8000, process.env.HOST || "0.0.0.0", function() {
    console.log("HTTP Server Started. Listening on " + server.address().address + " : Port " + server.address().port + "/\nCTRL + C to Shutdown");
});