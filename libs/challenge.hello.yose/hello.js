var hello = function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.send('Hello Yose');
};

module.exports = hello;