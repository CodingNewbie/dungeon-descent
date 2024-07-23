import { Stats } from './Stats';

class Character {
  constructor() {
    this.name = "";
    this.stats = new Stats();
  }

  set_name(name) {
    this.name = name;
  }

  getHp() {
    return this.stats.getHp();
  }
}

function createCharacter(name) {
  const character = new Character();
  character.set_name(name);
  return character;
}

const character = new Character();

export { Character, createCharacter };
