const monsters = [
  {
    type: 'mimic',
    probability: 0.2,
    xp: 50,
    gold: 100,
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
    lootTable: [
      { item: 'Gorehoof Antler', probability: 0.5, rarity: 'Epic' },
      { item: 'Ravager Hide', probability: 0.3, rarity: 'Legendary' },
      { item: 'Moose Meat', probability: 0.2, rarity: 'Rare' }
    ]
  }
];

export default monsters;
