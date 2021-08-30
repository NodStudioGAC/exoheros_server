const { Handler } = require('./handlers');

const routes = (router) => {
  router.get('/player/:name', Handler.initiationPlayer);
  router.get('/player/adventure/', Handler.adventure); // Utilisation du bouton adventure
  router.get('/player/atack/', Handler.atack1); // Utilisation du bouton adventure
};

module.exports.routes = routes;
