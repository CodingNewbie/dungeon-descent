import { Stats } from '../components/game/Stats';

const monsters = [
  {
    type: 'Beholder',
    probability: 0.2,
    xp: 70,
    gold: 150,
    stats: new Stats(900, 70, 40, 0.3, 0, 10, 60),
    lootTable: [
      { item: 'Beholder Eye', probability: 0.4, rarity: 'Common' },
      { item: 'Beholder Tentacle', probability: 0.3, rarity: 'Uncommon' },
      { item: 'Beholder Crown', probability: 0.2, rarity: 'Rare' },
      { item: 'Beholder Heart', probability: 0.08, rarity: 'Epic' },
      { item: 'Beholder Orb', probability: 0.02, rarity: 'Legendary' }
    ]
  },
  {
    type: 'Bonewalker',
    probability: 0.2,
    xp: 40,
    gold: 75,
    stats: new Stats(400, 45, 25, 0.5, 0, 8, 40),
    lootTable: [
      { item: 'Bone Fragment', probability: 0.4, rarity: 'Common' },
      { item: 'Bonewalker Shield', probability: 0.3, rarity: 'Uncommon' },
      { item: 'Bonewalker Sword', probability: 0.2, rarity: 'Rare' },
      { item: 'Bonewalker Helmet', probability: 0.08, rarity: 'Epic' },
      { item: 'Bonewalker Amulet', probability: 0.02, rarity: 'Legendary' }
    ]
  },
  {
    type: 'Crimson Bonewalker',
    probability: 0.2,
    xp: 50,
    gold: 100,
    stats: new Stats(450, 50, 30, 0.4, 0, 9, 45),
    lootTable: [
      { item: 'Crimson Bone Fragment', probability: 0.4, rarity: 'Common' },
      { item: 'Crimson Bonewalker Shield', probability: 0.3, rarity: 'Uncommon' },
      { item: 'Crimson Bonewalker Sword', probability: 0.2, rarity: 'Rare' },
      { item: 'Crimson Bonewalker Helmet', probability: 0.08, rarity: 'Epic' },
      { item: 'Crimson Bonewalker Amulet', probability: 0.02, rarity: 'Legendary' }
    ]
  },
  {
    type: 'Dreadshade',
    probability: 0.2,
    xp: 60,
    gold: 120,
    stats: new Stats(700, 60, 35, 0.4, 0, 10, 50),
    lootTable: [
      { item: 'Dread Essence', probability: 0.4, rarity: 'Common' },
      { item: 'Shade Cloth', probability: 0.3, rarity: 'Uncommon' },
      { item: 'Dreadshade Amulet', probability: 0.2, rarity: 'Rare' },
      { item: 'Dreadshade Ring', probability: 0.08, rarity: 'Epic' },
      { item: 'Dreadshade Crown', probability: 0.02, rarity: 'Legendary' }
    ]
  },
  {
    type: 'Goblin',
    probability: 0.3,
    xp: 30,
    gold: 50,
    stats: new Stats(300, 40, 20, 0.6, 0, 10, 30),
    lootTable: [
      { item: 'Dagger', probability: 0.4, rarity: 'Common' },
      { item: 'Goblin Armor', probability: 0.3, rarity: 'Uncommon' },
      { item: 'Goblin Mask', probability: 0.2, rarity: 'Rare' },
      { item: 'Goblin King’s Ring', probability: 0.08, rarity: 'Epic' },
      { item: 'Goblin Crown', probability: 0.02, rarity: 'Legendary' }
    ]
  },
  {
    type: 'Grimwalker',
    probability: 0.2,
    xp: 45,
    gold: 80,
    stats: new Stats(420, 48, 28, 0.5, 0, 8, 42),
    lootTable: [
      { item: 'Grim Fragment', probability: 0.4, rarity: 'Common' },
      { item: 'Grimwalker Shield', probability: 0.3, rarity: 'Uncommon' },
      { item: 'Grimwalker Sword', probability: 0.2, rarity: 'Rare' },
      { item: 'Grimwalker Helmet', probability: 0.08, rarity: 'Epic' },
      { item: 'Grimwalker Amulet', probability: 0.02, rarity: 'Legendary' }
    ]
  },
  {
    type: 'Kobold',
    probability: 0.3,
    xp: 40,
    gold: 75,
    stats: new Stats(400, 45, 25, 0.5, 0, 8, 40),
    lootTable: [
      { item: 'Rusty Pickaxe', probability: 0.4, rarity: 'Common' },
      { item: 'Kobold Miner’s Helmet', probability: 0.3, rarity: 'Uncommon' },
      { item: 'Kobold Amulet', probability: 0.2, rarity: 'Rare' },
      { item: 'Kobold Gold Nugget', probability: 0.08, rarity: 'Epic' },
      { item: 'Kobold King’s Scepter', probability: 0.02, rarity: 'Legendary' }
    ]
  },
  {
    type: 'Lich',
    probability: 0.2,
    xp: 80,
    gold: 200,
    stats: new Stats(1000, 80, 45, 0.3, 0, 15, 70),
    lootTable: [
      { item: 'Lich Bone', probability: 0.4, rarity: 'Common' },
      { item: 'Lich Robes', probability: 0.3, rarity: 'Uncommon' },
      { item: 'Lich Crown', probability: 0.2, rarity: 'Rare' },
      { item: 'Lich Staff', probability: 0.08, rarity: 'Epic' },
      { item: 'Lich Soul Gem', probability: 0.02, rarity: 'Legendary' }
    ]
  },
  {
    type: 'Mawlurker',
    probability: 0.2,
    xp: 55,
    gold: 110,
    stats: new Stats(750, 55, 30, 0.4, 0, 10, 55),
    lootTable: [
      { item: 'Mawlurker Fang', probability: 0.4, rarity: 'Common' },
      { item: 'Mawlurker Hide', probability: 0.3, rarity: 'Uncommon' },
      { item: 'Mawlurker Claw', probability: 0.2, rarity: 'Rare' },
      { item: 'Mawlurker Heart', probability: 0.08, rarity: 'Epic' },
      { item: 'Mawlurker Eye', probability: 0.02, rarity: 'Legendary' }
    ]
  },
  {
    type: 'Midnight Shadowspinner',
    probability: 0.2,
    xp: 60,
    gold: 120,
    stats: new Stats(800, 60, 35, 0.3, 0, 12, 60),
    lootTable: [
      { item: 'Shadow Silk', probability: 0.4, rarity: 'Common' },
      { item: 'Midnight Web', probability: 0.3, rarity: 'Uncommon' },
      { item: 'Shadowspinner Fang', probability: 0.2, rarity: 'Rare' },
      { item: 'Midnight Spinneret', probability: 0.08, rarity: 'Epic' },
      { item: 'Midnight Silk Amulet', probability: 0.02, rarity: 'Legendary' }
    ]
  },
  {
    type: 'Noxious Shadowspinner',
    probability: 0.2,
    xp: 65,
    gold: 130,
    stats: new Stats(850, 65, 38, 0.3, 0, 12, 65),
    lootTable: [
      { item: 'Noxious Silk', probability: 0.4, rarity: 'Common' },
      { item: 'Noxious Web', probability: 0.3, rarity: 'Uncommon' },
      { item: 'Noxious Fang', probability: 0.2, rarity: 'Rare' },
      { item: 'Noxious Spinneret', probability: 0.08, rarity: 'Epic' },
      { item: 'Noxious Silk Amulet', probability: 0.02, rarity: 'Legendary' }
    ]
  },
  {
    type: 'Mimic',
    probability: 0.2,
    xp: 50,
    gold: 100,
    stats: new Stats(800, 60, 30, 0.4, 0, 5, 50),
    lootTable: [
      { item: 'Fake Gold Coins', probability: 0.4, rarity: 'Common' },
      { item: 'Mimic Tongue', probability: 0.3, rarity: 'Uncommon' },
      { item: 'Mimic Tooth', probability: 0.2, rarity: 'Rare' },
      { item: 'Mimic Heart', probability: 0.08, rarity: 'Epic' },
      { item: 'Mimic Crown', probability: 0.02, rarity: 'Legendary' }
    ]
  },
  {
    type: 'Rotfang',
    probability: 0.2,
    xp: 45,
    gold: 90,
    stats: new Stats(600, 55, 30, 0.4, 0, 8, 50),
    lootTable: [
      { item: 'Rotting Tooth', probability: 0.4, rarity: 'Common' },
      { item: 'Rotfang Pelt', probability: 0.3, rarity: 'Uncommon' },
      { item: 'Rotting Claw', probability: 0.2, rarity: 'Rare' },
      { item: 'Rotfang Heart', probability: 0.08, rarity: 'Epic' },
      { item: 'Rotfang Amulet', probability: 0.02, rarity: 'Legendary' }
    ]
  },
  {
    type: 'Veilreaper',
    probability: 0.2,
    xp: 75,
    gold: 150,
    stats: new Stats(900, 70, 40, 0.3, 0, 15, 70),
    lootTable: [
      { item: 'Veil Essence', probability: 0.4, rarity: 'Common' },
      { item: 'Reaper Cloth', probability: 0.3, rarity: 'Uncommon' },
      { item: 'Veilreaper Amulet', probability: 0.2, rarity: 'Rare' },
      { item: 'Veilreaper Ring', probability: 0.08, rarity: 'Epic' },
      { item: 'Veilreaper Crown', probability: 0.02, rarity: 'Legendary' }
    ]
  },
  {
    type: 'Vileburrower',
    probability: 0.2,
    xp: 55,
    gold: 110,
    stats: new Stats(750, 55, 30, 0.4, 0, 10, 55),
    lootTable: [
      { item: 'Burrowed Soil', probability: 0.4, rarity: 'Common' },
      { item: 'Vile Antenna', probability: 0.3, rarity: 'Uncommon' },
      { item: 'Vile Claw', probability: 0.2, rarity: 'Rare' },
      { item: 'Vile Heart', probability: 0.08, rarity: 'Epic' },
      { item: 'Vile Crown', probability: 0.02, rarity: 'Legendary' }
    ]
  },
  {
    type: 'Vilescale',
    probability: 0.2,
    xp: 60,
    gold: 120,
    stats: new Stats(800, 60, 35, 0.4, 0, 12, 60),
    lootTable: [
      { item: 'Vile Scale', probability: 0.4, rarity: 'Common' },
      { item: 'Vilescale Hide', probability: 0.3, rarity: 'Uncommon' },
      { item: 'Vilescale Claw', probability: 0.2, rarity: 'Rare' },
      { item: 'Vilescale Heart', probability: 0.08, rarity: 'Epic' },
      { item: 'Vilescale Crown', probability: 0.02, rarity: 'Legendary' }
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
      { item: 'Brutal Antler', probability: 0.5, rarity: 'Epic' },
      { item: 'Brutal Hide', probability: 0.3, rarity: 'Legendary' },
      { item: 'Brutal Meat', probability: 0.2, rarity: 'Rare' }
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
      { item: 'Enforcer Antler', probability: 0.5, rarity: 'Epic' },
      { item: 'Enforcer Hide', probability: 0.3, rarity: 'Legendary' },
      { item: 'Enforcer Meat', probability: 0.2, rarity: 'Rare' }
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
      { item: 'Gorehoof Antler', probability: 0.5, rarity: 'Epic' },
      { item: 'Ravager Hide', probability: 0.3, rarity: 'Legendary' },
      { item: 'Moose Meat', probability: 0.2, rarity: 'Rare' }
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
      { item: 'Brightpeak Antler', probability: 0.5, rarity: 'Epic' },
      { item: 'Brightpeak Hide', probability: 0.3, rarity: 'Legendary' },
      { item: 'Brightpeak Meat', probability: 0.2, rarity: 'Rare' }
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
      { item: 'Hammerhoof Antler', probability: 0.5, rarity: 'Epic' },
      { item: 'Hammerhoof Hide', probability: 0.3, rarity: 'Legendary' },
      { item: 'Hammerhoof Meat', probability: 0.2, rarity: 'Rare' }
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
      { item: 'Enchanted Antler', probability: 0.5, rarity: 'Epic' },
      { item: 'Enchanted Hide', probability: 0.3, rarity: 'Legendary' },
      { item: 'Enchanted Meat', probability: 0.2, rarity: 'Rare' }
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
      { item: 'Unyielding Antler', probability: 0.5, rarity: 'Epic' },
      { item: 'Unyielding Hide', probability: 0.3, rarity: 'Legendary' },
      { item: 'Unyielding Meat', probability: 0.2, rarity: 'Rare' }
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
      { item: 'Colossal Antler', probability: 0.5, rarity: 'Epic' },
      { item: 'Colossal Hide', probability: 0.3, rarity: 'Legendary' },
      { item: 'Colossal Meat', probability: 0.2, rarity: 'Rare' }
    ]
  }
];

export default monsters;
