import { Stats } from '../components/game/Stats';

const monsters = [
  {
    type: 'Beholder',
    probability: 0.2,
    xp: 70,
    gold: 150,
    stats: new Stats({
      hp: 900,
      atk: 70,
      def: 40,
      atkSpd: 0.3,
      vamp: 0,
      cRate: 10,
      cDmg: 60
    }),
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
    stats: new Stats({
      hp: 400,
      atk: 45,
      def: 25,
      atkSpd: 0.5,
      vamp: 0,
      cRate: 8,
      cDmg: 40
    }),
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
    stats: new Stats({
      hp: 450,
      atk: 50,
      def: 30,
      atkSpd: 0.4,
      vamp: 0,
      cRate: 9,
      cDmg: 45
    }),
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
    stats: new Stats({
      hp: 700,
      atk: 60,
      def: 35,
      atkSpd: 0.4,
      vamp: 0,
      cRate: 10,
      cDmg: 50
    }),
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
    stats: new Stats({
      hp: 300,
      atk: 40,
      def: 20,
      atkSpd: 0.6,
      vamp: 0,
      cRate: 10,
      cDmg: 30
    }),
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
    stats: new Stats({
      hp: 420,
      atk: 48,
      def: 28,
      atkSpd: 0.5,
      vamp: 0,
      cRate: 8,
      cDmg: 42
    }),
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
    stats: new Stats({
      hp: 400,
      atk: 45,
      def: 25,
      atkSpd: 0.5,
      vamp: 0,
      cRate: 8,
      cDmg: 40
    }),
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
    stats: new Stats({
      hp: 1000,
      atk: 80,
      def: 45,
      atkSpd: 0.3,
      vamp: 0,
      cRate: 15,
      cDmg: 70
    }),
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
    stats: new Stats({
      hp: 750,
      atk: 55,
      def: 30,
      atkSpd: 0.4,
      vamp: 0,
      cRate: 10,
      cDmg: 55
    }),
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
    stats: new Stats({
      hp: 800,
      atk: 60,
      def: 35,
      atkSpd: 0.3,
      vamp: 0,
      cRate: 12,
      cDmg: 60
    }),
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
    stats: new Stats({
      hp: 850,
      atk: 65,
      def: 38,
      atkSpd: 0.3,
      vamp: 0,
      cRate: 12,
      cDmg: 65
    }),
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
    stats: new Stats({
      hp: 800,
      atk: 60,
      def: 30,
      atkSpd: 0.4,
      vamp: 0,
      cRate: 5,
      cDmg: 50
    }),
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
    stats: new Stats({
      hp: 600,
      atk: 55,
      def: 30,
      atkSpd: 0.4,
      vamp: 0,
      cRate: 8,
      cDmg: 50
    }),
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
    stats: new Stats({
      hp: 900,
      atk: 70,
      def: 40,
      atkSpd: 0.3,
      vamp: 0,
      cRate: 15,
      cDmg: 70
    }),
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
    stats: new Stats({
      hp: 750,
      atk: 55,
      def: 30,
      atkSpd: 0.4,
      vamp: 0,
      cRate: 10,
      cDmg: 55
    }),
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
    stats: new Stats({
      hp: 800,
      atk: 60,
      def: 35,
      atkSpd: 0.4,
      vamp: 0,
      cRate: 12,
      cDmg: 60
    }),
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
    stats: new Stats({
      hp: 2200,
      atk: 110,
      def: 60,
      atkSpd: 0.2,
      vamp: 0,
      cRate: 25,
      cDmg: 120
    }),
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
    stats: new Stats({
      hp: 2400,
      atk: 120,
      def: 65,
      atkSpd: 0.2,
      vamp: 0,
      cRate: 30,
      cDmg: 130
    }),
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
    stats: new Stats({
      hp: 2000,
      atk: 100,
      def: 50,
      atkSpd: 0.2,
      vamp: 0,
      cRate: 20,
      cDmg: 100
    }),
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
    stats: new Stats({
      hp: 2500,
      atk: 130,
      def: 70,
      atkSpd: 0.2,
      vamp: 0,
      cRate: 30,
      cDmg: 140
    }),
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
    stats: new Stats({
      hp: 2600,
      atk: 140,
      def: 75,
      atkSpd: 0.2,
      vamp: 0,
      cRate: 35,
      cDmg: 150
    }),
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
    stats: new Stats({
      hp: 2700,
      atk: 150,
      def: 80,
      atkSpd: 0.2,
      vamp: 0,
      cRate: 35,
      cDmg: 160
    }),
    lootTable: [
      { item: 'Enchanted Antler', probability: 0.5 },
      { item: 'Enchanted Hide', probability: 0.3 },
      { item: 'Enchanted Meat', probability: 0.2 }
    ]
  },
  {
    type: 'Thalrik the Unyielding',
    probability: 0.2,
    isBoss: true,
    xp: 350,
    gold: 900,
    stats: new Stats({
      hp: 3000,
      atk: 160,
      def: 90,
      atkSpd: 0.2,
      vamp: 0,
      cRate: 40,
      cDmg: 180
    }),
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
    stats: new Stats({
      hp: 3500,
      atk: 180,
      def: 100,
      atkSpd: 0.2,
      vamp: 0,
      cRate: 50,
      cDmg: 200
    }),
    lootTable: [
      { item: 'Colossal Antler', probability: 0.5 },
      { item: 'Colossal Hide', probability: 0.3 },
      { item: 'Colossal Meat', probability: 0.2 }
    ]
  }
];

export default monsters;
