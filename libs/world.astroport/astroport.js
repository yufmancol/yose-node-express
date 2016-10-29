var astroport = function(request, response) {
    var newShip = "";
    var cssClasGate1 = "free";
    var cssClasInfo = "hidden";
    if(request.query.ship){
      cssClasGate1 = "occupied";
      cssClasInfo = "karepe";
      newShip = request.query.ship;
    }
    response.setHeader('Content-Type', 'text/html');
    response.render('astroport.html', {'shipName': newShip, 'cssClasGate1': cssClasGate1, 'cssClasInfo': cssClasInfo});
};

module.exports = astroport;
