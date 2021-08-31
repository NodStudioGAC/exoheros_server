const Warrior = require('./models/Warrior');
const Mage = require('./models/Mage');

class Player {
  constructor(name, level, life, strenght, parade, lifePotion) {
    this.name = name;
    this.level = level;
    this.life = life;
    this.strenght = strenght;
    this.parade = parade;
    this.lifePotion = lifePotion;
  }

  toJSON() {
    return {
      name: this.name,
      level: this.level,
      life: this.life,
      strenght: this.strenght,
      parade: this.parade,
      lifePotion: this.lifePotion,
    };
  }
}

let player;
let currentMonster;

const Handler = {
  initiationPlayer: (req, res) => {
    const { name } = req.params;
    player = new Player(name, 1, 10, 5, 2, 0);
    res.send(player);
    console.log(player);
  },
  adventure: (req, res) => {
    const radomAction = Math.floor(Math.random() * 20);
console.log("Arriver");
    if (radomAction <= 10) {
      // le joueur trouve un obj
      console.log("1");
      res.send(findObjet());
    } else if (radomAction <= 20) {
      // le joueur rencontre un monstre
      console.log("2");
      createMonster();
      res.send(`Le joueur combat un monstre de niveau ${currentMonster.level}`);
    }
    // Le joueur part en aventure, soit il trouve un objet ou combat un monstre
  },
  reload:(req,res) => 
  {
    res.send(player);
  },
  atack1: (req, res) => {
    res.send('Attaque 1');
    atack(0);
    // Lancement de la methode d'attaque numero 1
  },
  atack2: (req, res) => {
    res.send('Attaque 2');
    // Lancement de la methode d'attaque numero 2
  },
  parade: (req, res) => {
    res.send('Attaque 2');
    // Lancement de la methode de parade
  },
  heal: (req, res) => {
    res.send('Popo Heal');
    // Utilisation de la popo de Heal si le joueur en possède
  },
  routePost: (req, res) =>{
    //console.log(req.body);
    res.send('ok');
  },
  loadMonster: (req,res) =>{
    res.send(currentMonster);
  }
};

const atack = (bonusAtack) => {
  currentMonster.life -= (player.strenght + bonusAtack);

  if (currentMonster.life <= 0) {
    currentMonster.dead();
    currentMonster = null;
  }
  console.log(currentMonster);
};

const createMonster = () => {
  const randomType = Math.floor(Math.random() * 10);
  if (randomType <= 5) {
    currentMonster = new Warrior('Porko', 2, 6, 4, 2);
    console.log(currentMonster);
    return currentMonster;
  } if (randomType > 5) {
    console.log(Mage);
    currentMonster = new Mage('Polo', 1, 2, 6, 1);
    console.log(currentMonster);
    return currentMonster;
  }
};

const findObjet = () => {
  const randomObject = Math.floor(Math.random() * 10);
  if (randomObject <= 5) {
    player.lifePotion++;
    console.log(player.lifePotion);
    return ('Le joueur trouve une potion de heal');
  } else if (randomObject > 5) {
    return  ('Avance'); //afficher le Pop Up
  }
};

module.exports.Handler = Handler;
