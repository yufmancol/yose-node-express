var astroport = function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.render('astroport.html');
};

module.exports = astroport;
