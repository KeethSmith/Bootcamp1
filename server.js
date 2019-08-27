var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server, newData;

fs.readFile('listings.json', 'utf8', function (err, data) {

    let rawdata = fs.readFileSync('listings.json');
    let listingData = JSON.parse(rawdata);
    let data3 = JSON.stringify(listingData,null,4);
    fs.writeFileSync('listingData.json', data3);
    listingData = data3;
    newData = data3;
    //console.log(listingData);

    //Creates the server
    var server = http.createServer(requestHandler);
    

    //Start the server
    server.listen(port, function () {
        //once the server is listening, this callback function is executed
        console.log('Server listening on: http://localhost:' + port);
    });

});


process.on('uncaughtException', function (err) {
    console.log(err);
}); 

var requestHandler = function (request, response) {
    if (request.url == '/listings' && request.method === 'GET') {

        response.writeHead(200, { 'Content-Type': 'application/json' });
        let rawdata = fs.readFileSync('listingData.json');
        let listingData = JSON.parse(rawdata);
        newData = JSON.stringify(listingData,null,4);
        response.write(newData);        
        response.end();        

    }

    else {
        response.writeHead(404);
        response.end('Bad gateway error');
    }
        
    var parsedUrl = url.parse(request.url);

};






