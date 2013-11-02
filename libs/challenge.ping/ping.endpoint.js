var pong = function(request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.send({ alive: true });
};

module.exports = pong;