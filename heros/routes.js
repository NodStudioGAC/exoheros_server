const { Handler } = require('./handlers');

const routes = (router) => {
  router.get('/player/adventure/', Handler.adventure); // Utilisation du bouton adventure
  router.get('/player/reload/', Handler.reload); // Utilisation du bouton adventure
  router.get('/player/:name', Handler.initiationPlayer);
  router.get('/player/atack/', Handler.atack1); // Utilisation du bouton adventure
  router.post('/testpost/', Handler.routePost);
  router.get('/monster/load', Handler.loadMonster);

  // API REST
/*
  router.get('/posts/')
  router.get('/posts/:id')
  router.post('/posts/')
  router.put('/posts/:id')
  router.delete('/posts/:id')
  */
};

module.exports.routes = routes;
