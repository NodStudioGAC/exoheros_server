// import Monster from '../monster';
const Monster = require('../monster');

console.log(Monster);

class Mage extends Monster {
  fireball() {
    console.log(`${this.name}  effectue l'attaque`);
  }

  lightning() {
    console.log(`${this.name} effectue l'attaque puissante`);
  }
}

module.exports = Mage;
