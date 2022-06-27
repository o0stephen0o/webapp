import Hapi from 'hapi';
//#import nunjucks from 'nunjucks'

//#nunjucks.configure('./dist');

// Create a server with a host and port
const server = new Hapi.Server({
    host: 'localhost',
    port: 8000
});

// Add the route
server.route({
    method: 'GET',
    path: '/hello',
    //handler: function (request, reply) {
    //nunjucks.render('index.html',{
    //fname: 'Stephen', lname: 'Hello'
    //}, function(err, html){
    //reply(html);
    //});
    //}*
    handler: function (request, h) {
        const response = h.response('hello world fgo TESTS');
        response.type('text/plain');
        return response;
    }
});

// Start the server
server.start();
