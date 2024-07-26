import { Stats } from '../components/game/Stats';

const items = {
  // Beholder items
  'Beholder Eye': {
    name: 'Beholder Eye',
    stats: new Stats({ hp: 50, atk: 20 }),
    rarity: 'Common'
  },
  'Beholder Tentacle': {
    name: 'Beholder Tentacle',
    stats: new Stats({ hp: 100, atk: 50, def: 30 }),
    rarity: 'Uncommon'
  },
  'Beholder Crown': {
    name: 'Beholder Crown',
    stats: new Stats({ hp: 150, atk: 80, def: 50 }),
    rarity: 'Rare'
  },
  'Beholder Heart': {
    name: 'Beholder Heart',
    stats: new Stats({ hp: 200, atk: 100, def: 70 }),
    rarity: 'Epic'
  },
  'Beholder Orb': {
    name: 'Beholder Orb',
    stats: new Stats({ hp: 300, atk: 150, def: 100, cRate: 10 }),
    rarity: 'Legendary'
  },

  // Bonewalker items
  'Bone Fragment': {
    name: 'Bone Fragment',
    stats: new Stats({ hp: 20, def: 10 }),
    rarity: 'Common'
  },
  'Bonewalker Shield': {
    name: 'Bonewalker Shield',
    stats: new Stats({ hp: 50, def: 40 }),
    rarity: 'Uncommon'
  },
  'Bonewalker Sword': {
    name: 'Bonewalker Sword',
    stats: new Stats({ atk: 60, def: 10 }),
    rarity: 'Rare'
  },
  'Bonewalker Helmet': {
    name: 'Bonewalker Helmet',
    stats: new Stats({ hp: 80, atk: 20, def: 60 }),
    rarity: 'Epic'
  },
  'Bonewalker Amulet': {
    name: 'Bonewalker Amulet',
    stats: new Stats({ hp: 100, atk: 50, def: 80 }),
    rarity: 'Legendary'
  },

  // Crimson Bonewalker items
  'Crimson Bone Fragment': {
    name: 'Crimson Bone Fragment',
    stats: new Stats({ hp: 30, def: 15 }),
    rarity: 'Common'
  },
  'Crimson Bonewalker Shield': {
    name: 'Crimson Bonewalker Shield',
    stats: new Stats({ hp: 60, def: 50 }),
    rarity: 'Uncommon'
  },
  'Crimson Bonewalker Sword': {
    name: 'Crimson Bonewalker Sword',
    stats: new Stats({ atk: 70, def: 20 }),
    rarity: 'Rare'
  },
  'Crimson Bonewalker Helmet': {
    name: 'Crimson Bonewalker Helmet',
    stats: new Stats({ hp: 100, atk: 30, def: 70 }),
    rarity: 'Epic'
  },
  'Crimson Bonewalker Amulet': {
    name: 'Crimson Bonewalker Amulet',
    stats: new Stats({ hp: 120, atk: 60, def: 90 }),
    rarity: 'Legendary'
  },

  // Dreadshade items
  'Dread Essence': {
    name: 'Dread Essence',
    stats: new Stats({ hp: 40, def: 15 }),
    rarity: 'Common'
  },
  'Shade Cloth': {
    name: 'Shade Cloth',
    stats: new Stats({ hp: 70, def: 60 }),
    rarity: 'Uncommon'
  },
  'Dreadshade Amulet': {
    name: 'Dreadshade Amulet',
    stats: new Stats({ hp: 100, def: 70 }),
    rarity: 'Rare'
  },
  'Dreadshade Ring': {
    name: 'Dreadshade Ring',
    stats: new Stats({ hp: 120, def: 90, atk: 40 }),
    rarity: 'Epic'
  },
  'Dreadshade Crown': {
    name: 'Dreadshade Crown',
    stats: new Stats({ hp: 150, atk: 70, def: 120 }),
    rarity: 'Legendary'
  },

  // Goblin items
  'Dagger': {
    name: 'Dagger',
    stats: new Stats({ atk: 10, def: 5 }),
    rarity: 'Common'
  },
  'Goblin Armor': {
    name: 'Goblin Armor',
    stats: new Stats({ hp: 50, def: 30 }),
    rarity: 'Uncommon'
  },
  'Goblin Mask': {
    name: 'Goblin Mask',
    stats: new Stats({ hp: 70, def: 40 }),
    rarity: 'Rare'
  },
  'Goblin King’s Ring': {
    name: 'Goblin King’s Ring',
    stats: new Stats({ hp: 100, atk: 30, def: 60 }),
    rarity: 'Epic'
  },
  'Goblin Crown': {
    name: 'Goblin Crown',
    stats: new Stats({ hp: 120, atk: 50, def: 80 }),
    rarity: 'Legendary'
  },

  // Grimwalker items
  'Grim Fragment': {
    name: 'Grim Fragment',
    stats: new Stats({ hp: 30, def: 10 }),
    rarity: 'Common'
  },
  'Grimwalker Shield': {
    name: 'Grimwalker Shield',
    stats: new Stats({ hp: 60, def: 50 }),
    rarity: 'Uncommon'
  },
  'Grimwalker Sword': {
    name: 'Grimwalker Sword',
    stats: new Stats({ atk: 70, def: 20 }),
    rarity: 'Rare'
  },
  'Grimwalker Helmet': {
    name: 'Grimwalker Helmet',
    stats: new Stats({ hp: 100, atk: 30, def: 70 }),
    rarity: 'Epic'
  },
  'Grimwalker Amulet': {
    name: 'Grimwalker Amulet',
    stats: new Stats({ hp: 120, atk: 60, def: 90 }),
    rarity: 'Legendary'
  },

  // Kobold items
  'Rusty Pickaxe': {
    name: 'Rusty Pickaxe',
    stats: new Stats({ atk: 10, def: 5 }),
    rarity: 'Common'
  },
  'Kobold Miner’s Helmet': {
    name: 'Kobold Miner’s Helmet',
    stats: new Stats({ hp: 50, def: 30 }),
    rarity: 'Uncommon'
  },
  'Kobold Amulet': {
    name: 'Kobold Amulet',
    stats: new Stats({ hp: 70, def: 40 }),
    rarity: 'Rare'
  },
  'Kobold Gold Nugget': {
    name: 'Kobold Gold Nugget',
    stats: new Stats({ hp: 100, atk: 30, def: 60 }),
    rarity: 'Epic'
  },
  'Kobold King’s Scepter': {
    name: 'Kobold King’s Scepter',
    stats: new Stats({ hp: 120, atk: 50, def: 80 }),
    rarity: 'Legendary'
  },

  // Lich items
  'Lich Bone': {
    name: 'Lich Bone',
    stats: new Stats({ hp: 60, def: 20 }),
    rarity: 'Common'
  },
  'Lich Robes': {
    name: 'Lich Robes',
    stats: new Stats({ hp: 90, def: 70 }),
    rarity: 'Uncommon'
  },
  'Lich Crown': {
    name: 'Lich Crown',
    stats: new Stats({ hp: 120, atk: 40, def: 90 }),
    rarity: 'Rare'
  },
  'Lich Staff': {
    name: 'Lich Staff',
    stats: new Stats({ hp: 150, atk: 60, def: 110 }),
    rarity: 'Epic'
  },
  'Lich Soul Gem': {
    name: 'Lich Soul Gem',
    stats: new Stats({ hp: 200, atk: 80, def: 130, cRate: 5 }),
    rarity: 'Legendary'
  },

  // Mawlurker items
  'Mawlurker Fang': {
    name: 'Mawlurker Fang',
    stats: new Stats({ atk: 25, def: 15 }),
    rarity: 'Common'
  },
  'Mawlurker Hide': {
    name: 'Mawlurker Hide',
    stats: new Stats({ hp: 80, def: 50 }),
    rarity: 'Uncommon'
  },
  'Mawlurker Claw': {
    name: 'Mawlurker Claw',
    stats: new Stats({ hp: 110, def: 70 }),
    rarity: 'Rare'
  },
  'Mawlurker Heart': {
    name: 'Mawlurker Heart',
    stats: new Stats({ hp: 140, atk: 60, def: 90 }),
    rarity: 'Epic'
  },
  'Mawlurker Eye': {
    name: 'Mawlurker Eye',
    stats: new Stats({ hp: 180, atk: 80, def: 110 }),
    rarity: 'Legendary'
  },

  // Midnight Shadowspinner items
  'Shadow Silk': {
    name: 'Shadow Silk',
    stats: new Stats({ hp: 40, def: 15 }),
    rarity: 'Common'
  },
  'Midnight Web': {
    name: 'Midnight Web',
    stats: new Stats({ hp: 70, def: 60 }),
    rarity: 'Uncommon'
  },
  'Shadowspinner Fang': {
    name: 'Shadowspinner Fang',
    stats: new Stats({ hp: 100, atk: 40, def: 70 }),
    rarity: 'Rare'
  },
  'Midnight Spinneret': {
    name: 'Midnight Spinneret',
    stats: new Stats({ hp: 130, atk: 60, def: 90 }),
    rarity: 'Epic'
  },
  'Midnight Silk Amulet': {
    name: 'Midnight Silk Amulet',
    stats: new Stats({ hp: 170, atk: 80, def: 110 }),
    rarity: 'Legendary'
  },

  // Noxious Shadowspinner items
  'Noxious Silk': {
    name: 'Noxious Silk',
    stats: new Stats({ hp: 50, def: 20 }),
    rarity: 'Common'
  },
  'Noxious Web': {
    name: 'Noxious Web',
    stats: new Stats({ hp: 80, def: 70 }),
    rarity: 'Uncommon'
  },
  'Noxious Fang': {
    name: 'Noxious Fang',
    stats: new Stats({ hp: 110, atk: 50, def: 80 }),
    rarity: 'Rare'
  },
  'Noxious Spinneret': {
    name: 'Noxious Spinneret',
    stats: new Stats({ hp: 140, atk: 70, def: 100 }),
    rarity: 'Epic'
  },
  'Noxious Silk Amulet': {
    name: 'Noxious Silk Amulet',
    stats: new Stats({ hp: 180, atk: 90, def: 120 }),
    rarity: 'Legendary'
  },

  // Mimic items
  'Fake Gold Coins': {
    name: 'Fake Gold Coins',
    stats: new Stats({ hp: 30, def: 10 }),
    rarity: 'Common'
  },
  'Mimic Tongue': {
    name: 'Mimic Tongue',
    stats: new Stats({ hp: 60, def: 40 }),
    rarity: 'Uncommon'
  },
  'Mimic Tooth': {
    name: 'Mimic Tooth',
    stats: new Stats({ hp: 90, atk: 30, def: 60 }),
    rarity: 'Rare'
  },
  'Mimic Heart': {
    name: 'Mimic Heart',
    stats: new Stats({ hp: 120, atk: 50, def: 80 }),
    rarity: 'Epic'
  },
  'Mimic Crown': {
    name: 'Mimic Crown',
    stats: new Stats({ hp: 150, atk: 70, def: 100 }),
    rarity: 'Legendary'
  },

  // Rotfang items
  'Rotting Tooth': {
    name: 'Rotting Tooth',
    stats: new Stats({ atk: 15, def: 10 }),
    rarity: 'Common'
  },
  'Rotfang Pelt': {
    name: 'Rotfang Pelt',
    stats: new Stats({ hp: 60, def: 40 }),
    rarity: 'Uncommon'
  },
  'Rotting Claw': {
    name: 'Rotting Claw',
    stats: new Stats({ hp: 90, atk: 30, def: 60 }),
    rarity: 'Rare'
  },
  'Rotfang Heart': {
    name: 'Rotfang Heart',
    stats: new Stats({ hp: 120, atk: 50, def: 80 }),
    rarity: 'Epic'
  },
  'Rotfang Amulet': {
    name: 'Rotfang Amulet',
    stats: new Stats({ hp: 150, atk: 70, def: 100 }),
    rarity: 'Legendary'
  },

  // Veilreaper items
  'Veil Essence': {
    name: 'Veil Essence',
    stats: new Stats({ hp: 40, def: 15 }),
    rarity: 'Common'
  },
  'Reaper Cloth': {
    name: 'Reaper Cloth',
    stats: new Stats({ hp: 70, def: 60 }),
    rarity: 'Uncommon'
  },
  'Veilreaper Amulet': {
    name: 'Veilreaper Amulet',
    stats: new Stats({ hp: 100, atk: 40, def: 70 }),
    rarity: 'Rare'
  },
  'Veilreaper Ring': {
    name: 'Veilreaper Ring',
    stats: new Stats({ hp: 130, atk: 60, def: 90 }),
    rarity: 'Epic'
  },
  'Veilreaper Crown': {
    name: 'Veilreaper Crown',
    stats: new Stats({ hp: 170, atk: 80, def: 110 }),
    rarity: 'Legendary'
  },

  // Vileburrower items
  'Burrowed Soil': {
    name: 'Burrowed Soil',
    stats: new Stats({ hp: 50, def: 20 }),
    rarity: 'Common'
  },
  'Vile Antenna': {
    name: 'Vile Antenna',
    stats: new Stats({ hp: 80, def: 70 }),
    rarity: 'Uncommon'
  },
  'Vile Claw': {
    name: 'Vile Claw',
    stats: new Stats({ hp: 110, atk: 50, def: 80 }),
    rarity: 'Rare'
  },
  'Vile Heart': {
    name: 'Vile Heart',
    stats: new Stats({ hp: 140, atk: 70, def: 100 }),
    rarity: 'Epic'
  },
  'Vile Crown': {
    name: 'Vile Crown',
    stats: new Stats({ hp: 180, atk: 90, def: 120 }),
    rarity: 'Legendary'
  },

  // Vilescale items
  'Vile Scale': {
    name: 'Vile Scale',
    stats: new Stats({ atk: 30, def: 20 }),
    rarity: 'Common'
  },
  'Vilescale Hide': {
    name: 'Vilescale Hide',
    stats: new Stats({ hp: 90, def: 70 }),
    rarity: 'Uncommon'
  },
  'Vilescale Claw': {
    name: 'Vilescale Claw',
    stats: new Stats({ hp: 120, atk: 40, def: 90 }),
    rarity: 'Rare'
  },
  'Vilescale Heart': {
    name: 'Vilescale Heart',
    stats: new Stats({ hp: 150, atk: 60, def: 110 }),
    rarity: 'Epic'
  },
  'Vilescale Crown': {
    name: 'Vilescale Crown',
    stats: new Stats({ hp: 200, atk: 80, def: 130 }),
    rarity: 'Legendary'
  },

  // Boss items
  'Brutal Antler': {
    name: 'Brutal Antler',
    stats: new Stats({ hp: 250, atk: 120, def: 100 }),
    rarity: 'Epic'
  },
  'Brutal Hide': {
    name: 'Brutal Hide',
    stats: new Stats({ hp: 300, def: 150 }),
    rarity: 'Legendary'
  },
  'Brutal Meat': {
    name: 'Brutal Meat',
    stats: new Stats({ hp: 200, atk: 150, def: 80 }),
    rarity: 'Rare'
  },
  'Enforcer Antler': {
    name: 'Enforcer Antler',
    stats: new Stats({ hp: 260, atk: 125, def: 105 }),
    rarity: 'Epic'
  },
  'Enforcer Hide': {
    name: 'Enforcer Hide',
    stats: new Stats({ hp: 310, def: 155 }),
    rarity: 'Legendary'
  },
  'Enforcer Meat': {
    name: 'Enforcer Meat',
    stats: new Stats({ hp: 210, atk: 160, def: 85 }),
    rarity: 'Rare'
  },
  'Gorehoof Antler': {
    name: 'Gorehoof Antler',
    stats: new Stats({ hp: 270, atk: 130, def: 110 }),
    rarity: 'Epic'
  },
  'Ravager Hide': {
    name: 'Ravager Hide',
    stats: new Stats({ hp: 320, def: 160 }),
    rarity: 'Legendary'
  },
  'Moose Meat': {
    name: 'Moose Meat',
    stats: new Stats({ hp: 220, atk: 170, def: 90 }),
    rarity: 'Rare'
  },
  'Brightpeak Antler': {
    name: 'Brightpeak Antler',
    stats: new Stats({ hp: 280, atk: 135, def: 115 }),
    rarity: 'Epic'
  },
  'Brightpeak Hide': {
    name: 'Brightpeak Hide',
    stats: new Stats({ hp: 330, def: 165 }),
    rarity: 'Legendary'
  },
  'Brightpeak Meat': {
    name: 'Brightpeak Meat',
    stats: new Stats({ hp: 230, atk: 180, def: 95 }),
    rarity: 'Rare'
  },
  'Hammerhoof Antler': {
    name: 'Hammerhoof Antler',
    stats: new Stats({ hp: 290, atk: 140, def: 120 }),
    rarity: 'Epic'
  },
  'Hammerhoof Hide': {
    name: 'Hammerhoof Hide',
    stats: new Stats({ hp: 340, def: 170 }),
    rarity: 'Legendary'
  },
  'Hammerhoof Meat': {
    name: 'Hammerhoof Meat',
    stats: new Stats({ hp: 240, atk: 190, def: 100 }),
    rarity: 'Rare'
  },
  'Enchanted Antler': {
    name: 'Enchanted Antler',
    stats: new Stats({ hp: 300, atk: 145, def: 125 }),
    rarity: 'Epic'
  },
  'Enchanted Hide': {
    name: 'Enchanted Hide',
    stats: new Stats({ hp: 350, def: 175 }),
    rarity: 'Legendary'
  },
  'Enchanted Meat': {
    name: 'Enchanted Meat',
    stats: new Stats({ hp: 250, atk: 200, def: 105 }),
    rarity: 'Rare'
  },
  'Unyielding Antler': {
    name: 'Unyielding Antler',
    stats: new Stats({ hp: 310, atk: 150, def: 130 }),
    rarity: 'Epic'
  },
  'Unyielding Hide': {
    name: 'Unyielding Hide',
    stats: new Stats({ hp: 360, def: 180 }),
    rarity: 'Legendary'
  },
  'Unyielding Meat': {
    name: 'Unyielding Meat',
    stats: new Stats({ hp: 260, atk: 210, def: 110 }),
    rarity: 'Rare'
  },
  'Colossal Antler': {
    name: 'Colossal Antler',
    stats: new Stats({ hp: 320, atk: 155, def: 135 }),
    rarity: 'Epic'
  },
  'Colossal Hide': {
    name: 'Colossal Hide',
    stats: new Stats({ hp: 370, def: 185 }),
    rarity: 'Legendary'
  },
  'Colossal Meat': {
    name: 'Colossal Meat',
    stats: new Stats({ hp: 270, atk: 220, def: 115 }),
    rarity: 'Rare'
  }
};

export default items;
