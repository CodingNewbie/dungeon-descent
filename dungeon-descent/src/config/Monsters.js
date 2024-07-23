import { Stats } from '../components/game/Stats';

const monsters = [
  {
    type: 'mimic',
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
    type: 'goblin',
    probability: 0.2,
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
    type: 'kobold',
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
    type: 'skeleton',
    probability: 0.3,
    xp: 20,
    gold: 30,
    stats: new Stats(200, 35, 15, 0.3, 0, 7, 25),
    lootTable: [
      { item: 'Basic Sword', probability: 0.4, rarity: 'Common' },
      { item: 'Bone Shield', probability: 0.3, rarity: 'Uncommon' },
      { item: 'Skeleton Helm', probability: 0.2, rarity: 'Rare' },
      { item: 'Soul Gem', probability: 0.08, rarity: 'Epic' },
      { item: 'Necromancer Amulet', probability: 0.02, rarity: 'Legendary' }
    ]
  },
  {
    type: 'gorehoof-the-ravager',
    isBoss: true,
    xp: 200,
    gold: 500,
    stats: new Stats(2000, 100, 50, 0.2, 0, 20, 100),
    lootTable: [
      { item: 'Gorehoof Antler', probability: 0.5, rarity: 'Epic' },
      { item: 'Ravager Hide', probability: 0.3, rarity: 'Legendary' },
      { item: 'Moose Meat', probability: 0.2, rarity: 'Rare' }
    ]
  }
];

export default monsters;
