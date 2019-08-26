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
    /*
      This callback function should save the data in the listingData variable, 
      then start the server. 
  
      HINT: Check out this resource on fs.readFile
      //https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
  
      HINT: Read up on JSON parsing Node.js
     */

    //Check for errors


    //Save the sate in the listingData variable already defined






var requestHandler = function (request, response) {
    if (request.url == '/listings') {

        response.writeHead(200, { 'Content-Type': 'application/json' });
        let rawdata = fs.readFileSync('listingData.json');
        let listingData = JSON.parse(rawdata);
        newData = JSON.stringify(listingData,null,4);
        response.write(newData);        
        
        //response.write('Keeth is a server god!');
        //response.write('\n');
        //response.end('Keeth is a server god!');
    }

    else {
        response.writeHead(404);
        response.end('Bad gateway error');
    }
        
    var parsedUrl = url.parse(request.url);



};
  /*
    Your request handler should send listingData in the JSON format as a response if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: Explore the request object and its properties 
    HINT: Explore the response object and its properties
    https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
    
    HINT: Explore how callback's work 
    http://www.theprojectspot.com/tutorial-post/nodejs-for-beginners-callbacks/4
    
    HINT: Explore the list of MIME Types
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
   */





