// src/components/Floor.js
import { selectMonster } from '../utils/SelectMonsters';

const MAX_ENCOUNTER_COUNT = 6;
const MAX_ROOM_COUNT = 5;

class Floor {
  constructor() {
    this.depth = 1;
    this.encounterCount = 0;
    this.roomCount = 1;
  }

  setDepth(depth) {
    this.depth = depth;
  }

  floorName() {
    return "Floor " + String(this.depth);
  }

  progressEncounters() {
    this.encounterCount++;
  }

  changeRooms() {
    this.roomCount++;
    this.encounterCount = 0;
    console.log(`Room changed: ${this.roomCount}`);
  }

  changeFloors() {
    this.depth++;
    this.roomCount = 1;
    this.encounterCount = 0;
  }

  handleChest() {
    const roll = Math.random();
    if (roll < 0.5) {
      return "You found an empty chest.";
    } else {
      return "You found a locked chest.";
    }
  }

  handleMob() {
    return `You encountered a ${selectMonster()}`;
  }

  handleCorpse() {
    return "You found the corpse of Mitch McConnell.";
  }

  handleNothing() {
    return "You found nothing.";
  }

  handleSpecial() {
    return "You found something awesome, like legit super cool.";
  }

  handleDoor() {
    if (this.roomCount === MAX_ROOM_COUNT) {
      return "You found the door to the boss room.";
    } else {
      return "You found a door.";
    }
  }

  handleNewFloor() {
    this.changeFloors();
    return "You moved to the next floor.";
  }

  getEncounter() {
    if (this.encounterCount !== MAX_ENCOUNTER_COUNT) {
      this.progressEncounters();
      let roll = Math.floor(Math.random() * 5);
      switch (roll) {
        case 0:
          return this.handleChest();
        case 1:
          return this.handleMob();
        case 2:
          return this.handleCorpse();
        case 3:
          return this.handleNothing();
        case 4:
          return this.handleSpecial();
        default:
          return this.handleNothing();
      }
    } else {
      return this.handleDoor();
    }
  }
}

export { Floor };
