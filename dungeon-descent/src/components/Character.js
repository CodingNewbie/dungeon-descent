class Character {
    constructor() {
      this.name = "";
    }
    set_name(name) {
      this.name = name;
    }
  }
  
  function createCharacter(name) {
    const character = new Character();
    character.set_name(name);
    return character;
  }
  
  const character = new Character();
  
  export { Character, createCharacter };
  