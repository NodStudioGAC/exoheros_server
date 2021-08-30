class Monster {
  constructor(name, level, life, strenght, parade) {
    this.name = name;
    this.level = level;
    this.life = Math.floor((life + level) + ((Math.floor(Math.random() * 3))));
    this.strenght = Math.floor((strenght + level) + ((Math.floor(Math.random() * 4))));
    this.parade = level + ((Math.floor(Math.random() * 2)));
  }

  toJSON() {
    return {
      name: this.name,
      level: this.level,
      life: this.life,
      strenght: this.strenght,
      parade: this.parade,
    };
  }

  dead() {
    console.log('Le monstre est mort');
  }
}

module.exports = Monster;
