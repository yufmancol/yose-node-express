var astroport = function(request, response) {
    var newShip = "";
    console.log("luar");
    if(request.query.ship){
      console.log(request.query.ship);
      console.log("dalam");
      newShip = request.query.ship;
    }
    response.setHeader('Content-Type', 'text/html');
    response.render('astroport.html', {'shipName': newShip});
};

module.exports = astroport;
