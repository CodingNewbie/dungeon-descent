// src/components/Floor.js
const MAX_ENCOUNTER_COUNT = 6;
const MAX_ROOM_COUNT = 5;

class Floor {
  constructor() {
    this.depth = 1;
    this.encounter_count = 0;
    this.room_count = 1;
  }

  set_depth(depth) {
    this.depth = depth;
  }

  floor_name() {
    return "Floor " + String(this.depth);
  }

  progress_encounters() {
    this.encounter_count++;
  }

  change_rooms() {
    this.room_count++;
    this.encounter_count = 0;
    console.log(`Room changed: ${this.room_count}`);
  }

  change_floors() {
    this.depth++;
    this.room_count = 0;
    this.encounter_count = 0;
  }

  handle_chest() {
    const roll = Math.random();
    if (roll < 0.5) {
      return "You found an empty chest.";
    } else {
      return "You found a locked chest.";
    }
  }

  handle_mob() {
    return "You encountered a Goliath Nightmare Horned World-ender.";
  }

  handle_corpse() {
    return "You found the corpse of Mitch McConnell.";
  }

  handle_nothing() {
    return "You found nothing.";
  }

  handle_special() {
    return "You found something awesome, like legit super cool.";
  }

  handle_door() {
    return "You found a door.";
  }

  handle_new_floor() {
    this.change_floors();
    return "You moved to the next floor.";
  }

  get_encounter() {
    if (this.encounter_count !== MAX_ENCOUNTER_COUNT) {
      this.progress_encounters();
      let roll = Math.floor(Math.random() * 5);
      switch (roll) {
        case 0:
          return this.handle_chest();
        case 1:
          return this.handle_mob();
        case 2:
          return this.handle_corpse();
        case 3:
          return this.handle_nothing();
        case 4:
          return this.handle_special();
        default:
          return this.handle_nothing();
      }
    } else {
      if (this.room_count !== MAX_ROOM_COUNT) {
        return this.handle_door();
      } else {
        return this.handle_new_floor();
      }
    }
  }
}

export { Floor };
