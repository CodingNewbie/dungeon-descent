import { Stats } from './Stats';

class Character {
  constructor(name) {
    this.name = name;
    this.stats = new Stats({ hp: 1000, atk: 10, def: 5, atkSpd: 0.1 });
  }

  setName(name) {
    this.name = name;
  }

  getHp() {
    return this.stats.getHp();
  }
}

function createCharacter(name) {
  return new Character(name);
}

export { Character, createCharacter };
