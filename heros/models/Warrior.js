// import Monster from '../monster';
const Monster = require('../monster');

class Warrior extends Monster {
  lightAtack() {
    console.log(`${this.name}  effectue l'attaque`);
  }

  strongAtack() {
    console.log(`${this.name} effectue l'attaque puissante`);
  }
}

module.exports = Warrior;
