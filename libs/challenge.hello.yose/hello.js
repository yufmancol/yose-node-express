var hello = function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.render('index.html');
};

module.exports = hello;