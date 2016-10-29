var astroport = function(request, response) {
    var name = request.query.name;
    response.setHeader('Content-Type', 'text/html');
    response.render('astroport.html',{'name': name});
};

module.exports = astroport;
