import { Stats } from '../components/game/Stats';

const monsters = [
  {
    type: 'Beholder',
    probability: 0.2,
    xp: 70,
    gold: 150,
    stats: new Stats(900, 70, 40, 0.3, 0, 10, 60),
    lootTable: [
      { item: 'Beholder Eye', probability: 0.5 },
      { item: 'Beholder Tentacle', probability: 0.3 },
      { item: 'Beholder Crown', probability: 0.15 },
      { item: 'Beholder Heart', probability: 0.04 },
      { item: 'Beholder Orb', probability: 0.01 }
    ]
  },
  {
    type: 'Bonewalker',
    probability: 0.2,
    xp: 40,
    gold: 75,
    stats: new Stats(400, 45, 25, 0.5, 0, 8, 40),
    lootTable: [
      { item: 'Bone Fragment', probability: 0.5 },
      { item: 'Bonewalker Shield', probability: 0.3 },
      { item: 'Bonewalker Sword', probability: 0.15 },
      { item: 'Bonewalker Helmet', probability: 0.04 },
      { item: 'Bonewalker Amulet', probability: 0.01 }
    ]
  },
  {
    type: 'Crimson Bonewalker',
    probability: 0.2,
    xp: 50,
    gold: 100,
    stats: new Stats(450, 50, 30, 0.4, 0, 9, 45),
    lootTable: [
      { item: 'Crimson Bone Fragment', probability: 0.5 },
      { item: 'Crimson Bonewalker Shield', probability: 0.3 },
      { item: 'Crimson Bonewalker Sword', probability: 0.15 },
      { item: 'Crimson Bonewalker Helmet', probability: 0.04 },
      { item: 'Crimson Bonewalker Amulet', probability: 0.01 }
    ]
  },
  {
    type: 'Dreadshade',
    probability: 0.2,
    xp: 60,
    gold: 120,
    stats: new Stats(700, 60, 35, 0.4, 0, 10, 50),
    lootTable: [
      { item: 'Dread Essence', probability: 0.5 },
      { item: 'Shade Cloth', probability: 0.3 },
      { item: 'Dreadshade Amulet', probability: 0.15 },
      { item: 'Dreadshade Ring', probability: 0.04 },
      { item: 'Dreadshade Crown', probability: 0.01 }
    ]
  },
  {
    type: 'Goblin',
    probability: 0.3,
    xp: 30,
    gold: 50,
    stats: new Stats(300, 40, 20, 0.6, 0, 10, 30),
    lootTable: [
      { item: 'Dagger', probability: 0.5 },
      { item: 'Goblin Armor', probability: 0.3 },
      { item: 'Goblin Mask', probability: 0.15 },
      { item: 'Goblin King’s Ring', probability: 0.04 },
      { item: 'Goblin Crown', probability: 0.01 }
    ]
  },
  {
    type: 'Grimwalker',
    probability: 0.2,
    xp: 45,
    gold: 80,
    stats: new Stats(420, 48, 28, 0.5, 0, 8, 42),
    lootTable: [
      { item: 'Grim Fragment', probability: 0.5 },
      { item: 'Grimwalker Shield', probability: 0.3 },
      { item: 'Grimwalker Sword', probability: 0.15 },
      { item: 'Grimwalker Helmet', probability: 0.04 },
      { item: 'Grimwalker Amulet', probability: 0.01 }
    ]
  },
  {
    type: 'Kobold',
    probability: 0.3,
    xp: 40,
    gold: 75,
    stats: new Stats(400, 45, 25, 0.5, 0, 8, 40),
    lootTable: [
      { item: 'Rusty Sword', probability: 0.5 },
      { item: 'Kobold Miner’s Helmet', probability: 0.3 },
      { item: 'Kobold Amulet', probability: 0.15 },
      { item: 'Kobold Gold Nugget', probability: 0.04 },
      { item: 'Kobold King’s Scepter', probability: 0.01 }
    ]
  },
  {
    type: 'Lich',
    probability: 0.2,
    xp: 80,
    gold: 200,
    stats: new Stats(1000, 80, 45, 0.3, 0, 15, 70),
    lootTable: [
      { item: 'Lich Bone', probability: 0.5 },
      { item: 'Lich Robes', probability: 0.3 },
      { item: 'Lich Crown', probability: 0.15 },
      { item: 'Lich Staff', probability: 0.04 },
      { item: 'Lich Soul Gem', probability: 0.01 }
    ]
  },
  {
    type: 'Mawlurker',
    probability: 0.2,
    xp: 55,
    gold: 110,
    stats: new Stats(750, 55, 30, 0.4, 0, 10, 55),
    lootTable: [
      { item: 'Mawlurker Fang', probability: 0.5 },
      { item: 'Mawlurker Hide', probability: 0.3 },
      { item: 'Mawlurker Claw', probability: 0.15 },
      { item: 'Mawlurker Heart', probability: 0.04 },
      { item: 'Mawlurker Eye', probability: 0.01 }
    ]
  },
  {
    type: 'Midnight Shadowspinner',
    probability: 0.2,
    xp: 60,
    gold: 120,
    stats: new Stats(800, 60, 35, 0.3, 0, 12, 60),
    lootTable: [
      { item: 'Shadow Silk', probability: 0.5 },
      { item: 'Midnight Web', probability: 0.3 },
      { item: 'Shadowspinner Fang', probability: 0.15 },
      { item: 'Midnight Spinneret', probability: 0.04 },
      { item: 'Midnight Silk Amulet', probability: 0.01 }
    ]
  },
  {
    type: 'Noxious Shadowspinner',
    probability: 0.2,
    xp: 65,
    gold: 130,
    stats: new Stats(850, 65, 38, 0.3, 0, 12, 65),
    lootTable: [
      { item: 'Noxious Silk', probability: 0.5 },
      { item: 'Noxious Web', probability: 0.3 },
      { item: 'Noxious Fang', probability: 0.15 },
      { item: 'Noxious Spinneret', probability: 0.04 },
      { item: 'Noxious Silk Amulet', probability: 0.01 }
    ]
  },
  {
    type: 'Mimic',
    probability: 0.2,
    xp: 50,
    gold: 100,
    stats: new Stats(800, 60, 30, 0.4, 0, 5, 50),
    lootTable: [
      { item: 'Fake Gold Coins', probability: 0.5 },
      { item: 'Mimic Tongue', probability: 0.3 },
      { item: 'Mimic Tooth', probability: 0.15 },
      { item: 'Mimic Heart', probability: 0.04 },
      { item: 'Mimic Crown', probability: 0.01 }
    ]
  },
  {
    type: 'Rotfang',
    probability: 0.2,
    xp: 45,
    gold: 90,
    stats: new Stats(600, 55, 30, 0.4, 0, 8, 50),
    lootTable: [
      { item: 'Rotting Tooth', probability: 0.5 },
      { item: 'Rotfang Pelt', probability: 0.3 },
      { item: 'Rotting Claw', probability: 0.15 },
      { item: 'Rotfang Heart', probability: 0.04 },
      { item: 'Rotfang Amulet', probability: 0.01 }
    ]
  },
  {
    type: 'Veilreaper',
    probability: 0.2,
    xp: 75,
    gold: 150,
    stats: new Stats(900, 70, 40, 0.3, 0, 15, 70),
    lootTable: [
      { item: 'Veil Essence', probability: 0.5 },
      { item: 'Reaper Cloth', probability: 0.3 },
      { item: 'Veilreaper Amulet', probability: 0.15 },
      { item: 'Veilreaper Ring', probability: 0.04 },
      { item: 'Veilreaper Crown', probability: 0.01 }
    ]
  },
  {
    type: 'Vileburrower',
    probability: 0.2,
    xp: 55,
    gold: 110,
    stats: new Stats(750, 55, 30, 0.4, 0, 10, 55),
    lootTable: [
      { item: 'Burrowed Soil', probability: 0.5 },
      { item: 'Vile Antenna', probability: 0.3 },
      { item: 'Vile Claw', probability: 0.15 },
      { item: 'Vile Heart', probability: 0.04 },
      { item: 'Vile Crown', probability: 0.01 }
    ]
  },
  {
    type: 'Vilescale',
    probability: 0.2,
    xp: 60,
    gold: 120,
    stats: new Stats(800, 60, 35, 0.4, 0, 12, 60),
    lootTable: [
      { item: 'Vile Scale', probability: 0.5 },
      { item: 'Vilescale Hide', probability: 0.3 },
      { item: 'Vilescale Claw', probability: 0.15 },
      { item: 'Vilescale Heart', probability: 0.04 },
      { item: 'Vilescale Crown', probability: 0.01 }
    ]
  },
  {
    type: 'Bramblehoof the Brutal',
    probability: 0.2,
    isBoss: true,
    xp: 250,
    gold: 600,
    stats: new Stats(2200, 110, 60, 0.2, 0, 25, 120),
    lootTable: [
      { item: 'Brutal Antler', probability: 0.5 },
      { item: 'Brutal Hide', probability: 0.3 },
      { item: 'Brutal Meat', probability: 0.2 }
    ]
  },
  {
    type: 'Cragmar the Enforcer',
    probability: 0.2,
    isBoss: true,
    xp: 270,
    gold: 650,
    stats: new Stats(2400, 120, 65, 0.2, 0, 30, 130),
    lootTable: [
      { item: 'Enforcer Antler', probability: 0.5 },
      { item: 'Enforcer Hide', probability: 0.3 },
      { item: 'Enforcer Meat', probability: 0.2 }
    ]
  },
  {
    type: 'Gorehoof the Ravager',
    probability: 0.2,
    isBoss: true,
    xp: 200,
    gold: 500,
    stats: new Stats(2000, 100, 50, 0.2, 0, 20, 100),
    lootTable: [
      { item: 'Gorehoof Antler', probability: 0.5 },
      { item: 'Ravager Hide', probability: 0.3 },
      { item: 'Moose Meat', probability: 0.2 }
    ]
  },
  {
    type: 'Magnar Brightpeak',
    probability: 0.2,
    isBoss: true,
    xp: 280,
    gold: 700,
    stats: new Stats(2500, 130, 70, 0.2, 0, 30, 140),
    lootTable: [
      { item: 'Brightpeak Antler', probability: 0.5 },
      { item: 'Brightpeak Hide', probability: 0.3 },
      { item: 'Brightpeak Meat', probability: 0.2 }
    ]
  },
  {
    type: 'Moorok the Hammerhoof',
    probability: 0.2,
    isBoss: true,
    xp: 300,
    gold: 750,
    stats: new Stats(2600, 140, 75, 0.2, 0, 35, 150),
    lootTable: [
      { item: 'Hammerhoof Antler', probability: 0.5 },
      { item: 'Hammerhoof Hide', probability: 0.3 },
      { item: 'Hammerhoof Meat', probability: 0.2 }
    ]
  },
  {
    type: 'Staghammer the Enchanted',
    probability: 0.2,
    isBoss: true,
    xp: 320,
    gold: 800,
    stats: new Stats(2700, 150, 80, 0.2, 0, 35, 160),
    lootTable: [
      { item: 'Enchanted Antler', probability: 0.5 },
      { item: 'Enchanted Hide', probability: 0.3 },
      { item: 'Enchanted Meat', probability: 0.2 }
    ]
  },
  {
    type: 'Thralik the Unyielding',
    probability: 0.2,
    isBoss: true,
    xp: 350,
    gold: 900,
    stats: new Stats(3000, 160, 90, 0.2, 0, 40, 180),
    lootTable: [
      { item: 'Unyielding Antler', probability: 0.5 },
      { item: 'Unyielding Hide', probability: 0.3 },
      { item: 'Unyielding Meat', probability: 0.2 }
    ]
  },
  {
    type: 'Violetgrove the Colossal',
    probability: 0.2,
    isBoss: true,
    xp: 400,
    gold: 1000,
    stats: new Stats(3500, 180, 100, 0.2, 0, 50, 200),
    lootTable: [
      { item: 'Colossal Antler', probability: 0.5 },
      { item: 'Colossal Hide', probability: 0.3 },
      { item: 'Colossal Meat', probability: 0.2 }
    ]
  }
];

export default monsters;
