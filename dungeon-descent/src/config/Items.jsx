import { Stats } from '../components/game/Stats';

const items = {
  // Beholder items
  'Beholder Eye': {
    name: 'Beholder Eye',
    type: 'eye',
    icon: 'ra-eye-monster',
    stats: new Stats({ atk: 20, cRate: 5 }),
    rarity: 'Common'
  },
  'Beholder Tentacle': {
    name: 'Beholder Tentacle',
    type: 'whip',
    icon: 'ra-vine-whip',
    stats: new Stats({ atk: 50, atkSpd: 10 }),
    rarity: 'Uncommon'
  },
  'Beholder Crown': {
    name: 'Beholder Crown',
    type: 'crown',
    icon: 'ra-crown',
    stats: new Stats({ hp: 150, def: 50 }),
    rarity: 'Rare'
  },
  'Beholder Heart': {
    name: 'Beholder Heart',
    type: 'heart',
    icon: 'ra-heartburn',
    stats: new Stats({ hp: 200, def: 70, atk: 50 }),
    rarity: 'Epic'
  },
  'Beholder Orb': {
    name: 'Beholder Orb',
    type: 'orb',
    icon: 'ra-crystal-ball',
    stats: new Stats({ atk: 150, cRate: 10, cDmg: 20 }),
    rarity: 'Legendary'
  },

  // Bonewalker items
  'Bone Fragment': {
    name: 'Bone Fragment',
    type: 'bone',
    icon: 'ra-bone-knife',
    stats: new Stats({ def: 10 }),
    rarity: 'Common'
  },
  'Bonewalker Shield': {
    name: 'Bonewalker Shield',
    type: 'shield',
    icon: 'ra-shield',
    stats: new Stats({ hp: 50, def: 40 }),
    rarity: 'Uncommon'
  },
  'Bonewalker Sword': {
    name: 'Bonewalker Sword',
    type: 'sword',
    icon: 'ra-sword',
    stats: new Stats({ atk: 60 }),
    rarity: 'Rare'
  },
  'Bonewalker Helmet': {
    name: 'Bonewalker Helmet',
    type: 'helmet',
    icon: 'ra-knight-helmet',
    stats: new Stats({ hp: 80, def: 60 }),
    rarity: 'Epic'
  },
  'Bonewalker Amulet': {
    name: 'Bonewalker Amulet',
    type: 'amulet',
    icon: 'ra-gem-pendant',
    stats: new Stats({ hp: 100, def: 80, atk: 50 }),
    rarity: 'Legendary'
  },

  // Crimson Bonewalker items
  'Crimson Bone Fragment': {
    name: 'Crimson Bone Fragment',
    type: 'bone',
    icon: 'ra-bone-knife',
    stats: new Stats({ def: 15 }),
    rarity: 'Common'
  },
  'Crimson Bonewalker Shield': {
    name: 'Crimson Bonewalker Shield',
    type: 'shield',
    icon: 'ra-round-shield',
    stats: new Stats({ hp: 60, def: 50 }),
    rarity: 'Uncommon'
  },
  'Crimson Bonewalker Sword': {
    name: 'Crimson Bonewalker Sword',
    type: 'sword',
    icon: 'ra-sword',
    stats: new Stats({ atk: 70 }),
    rarity: 'Rare'
  },
  'Crimson Bonewalker Helmet': {
    name: 'Crimson Bonewalker Helmet',
    type: 'helmet',
    icon: 'ra-cracked-helm',
    stats: new Stats({ hp: 100, def: 70 }),
    rarity: 'Epic'
  },
  'Crimson Bonewalker Amulet': {
    name: 'Crimson Bonewalker Amulet',
    type: 'amulet',
    icon: 'ra-gem-pendant',
    stats: new Stats({ hp: 120, def: 90, atk: 60 }),
    rarity: 'Legendary'
  },

  // Dreadshade items
  'Dread Essence': {
    name: 'Dread Essence',
    type: 'essence',
    icon: 'ra-acid',
    stats: new Stats({ def: 15 }),
    rarity: 'Common'
  },
  'Shade Cloth': {
    name: 'Shade Cloth',
    type: 'cloth',
    icon: 'ra-cloth',
    stats: new Stats({ hp: 70, def: 60 }),
    rarity: 'Uncommon'
  },
  'Dreadshade Amulet': {
    name: 'Dreadshade Amulet',
    type: 'amulet',
    icon: 'ra-gem-pendant',
    stats: new Stats({ hp: 100, def: 70 }),
    rarity: 'Rare'
  },
  'Dreadshade Ring': {
    name: 'Dreadshade Ring',
    type: 'ring',
    icon: 'ra-ring',
    stats: new Stats({ hp: 120, def: 90, atk: 40 }),
    rarity: 'Epic'
  },
  'Dreadshade Crown': {
    name: 'Dreadshade Crown',
    type: 'crown',
    icon: 'ra-crown',
    stats: new Stats({ hp: 150, def: 120, atk: 70 }),
    rarity: 'Legendary'
  },

  // Goblin items
  'Dagger': {
    name: 'Dagger',
    type: 'dagger',
    icon: 'ra-plain-dagger',
    stats: new Stats({ atk: 10, atkSpd: 5 }),
    rarity: 'Common'
  },
  'Goblin Armor': {
    name: 'Goblin Armor',
    type: 'armor',
    icon: 'ra-vest',
    stats: new Stats({ hp: 50, def: 30 }),
    rarity: 'Uncommon'
  },
  'Goblin Mask': {
    name: 'Goblin Mask',
    type: 'mask',
    icon: 'ra-arcane-mask',
    stats: new Stats({ hp: 70, def: 40 }),
    rarity: 'Rare'
  },
  'Goblin King’s Ring': {
    name: 'Goblin King’s Ring',
    type: 'ring',
    icon: 'ra-ring',
    stats: new Stats({ hp: 100, def: 60, atk: 30 }),
    rarity: 'Epic'
  },
  'Goblin Crown': {
    name: 'Goblin Crown',
    type: 'crown',
    icon: 'ra-crown',
    stats: new Stats({ hp: 120, def: 80, atk: 50 }),
    rarity: 'Legendary'
  },

  // Grimwalker items
  'Grim Fragment': {
    name: 'Grim Fragment',
    type: 'fragment',
    icon: 'ra-bone-knife',
    stats: new Stats({ def: 10 }),
    rarity: 'Common'
  },
  'Grimwalker Shield': {
    name: 'Grimwalker Shield',
    type: 'shield',
    icon: 'ra-shield',
    stats: new Stats({ hp: 60, def: 50 }),
    rarity: 'Uncommon'
  },
  'Grimwalker Sword': {
    name: 'Grimwalker Sword',
    type: 'sword',
    icon: 'ra-sword',
    stats: new Stats({ atk: 70 }),
    rarity: 'Rare'
  },
  'Grimwalker Helmet': {
    name: 'Grimwalker Helmet',
    type: 'helmet',
    icon: 'ra-cracked-helm',
    stats: new Stats({ hp: 100, def: 70 }),
    rarity: 'Epic'
  },
  'Grimwalker Amulet': {
    name: 'Grimwalker Amulet',
    type: 'amulet',
    icon: 'ra-gem-pendant',
    stats: new Stats({ hp: 120, def: 90, atk: 60 }),
    rarity: 'Legendary'
  },

  // Kobold items
  'Rusty Sword': {
    name: 'Rusty Sword',
    type: 'sword',
    icon: 'ra-sword',
    stats: new Stats({ atk: 10, def: 5 }),
    rarity: 'Common'
  },
  'Kobold Miner’s Helmet': {
    name: 'Kobold Miner’s Helmet',
    type: 'helmet',
    icon: 'ra-cracked-helm',
    stats: new Stats({ hp: 50, def: 30 }),
    rarity: 'Uncommon'
  },
  'Kobold Amulet': {
    name: 'Kobold Amulet',
    type: 'amulet',
    icon: 'ra-gem-pendant',
    stats: new Stats({ hp: 70, def: 40 }),
    rarity: 'Rare'
  },
  'Kobold Gold Nugget': {
    name: 'Kobold Gold Nugget',
    type: 'nugget',
    icon: 'ra-gold-bar',
    stats: new Stats({ hp: 100, def: 60, atk: 30 }),
    rarity: 'Epic'
  },
  'Kobold King’s Scepter': {
    name: 'Kobold King’s Scepter',
    type: 'scepter',
    icon: 'ra-scepter',
    stats: new Stats({ hp: 120, def: 80, atk: 50 }),
    rarity: 'Legendary'
  },

  // Lich items
  'Lich Bone': {
    name: 'Lich Bone',
    type: 'bone',
    icon: 'ra-bone-knife',
    stats: new Stats({ def: 20 }),
    rarity: 'Common'
  },
  'Lich Robes': {
    name: 'Lich Robes',
    type: 'robes',
    icon: 'ra-vest',
    stats: new Stats({ hp: 90, def: 70 }),
    rarity: 'Uncommon'
  },
  'Lich Crown': {
    name: 'Lich Crown',
    type: 'crown',
    icon: 'ra-crown',
    stats: new Stats({ hp: 120, def: 90, atk: 40 }),
    rarity: 'Rare'
  },
  'Lich Staff': {
    name: 'Lich Staff',
    type: 'staff',
    icon: 'ra-laser-blast',
    stats: new Stats({ hp: 150, def: 110, atk: 60 }),
    rarity: 'Epic'
  },
  'Lich Soul Gem': {
    name: 'Lich Soul Gem',
    type: 'gem',
    icon: 'ra-gem',
    stats: new Stats({ hp: 200, def: 130, atk: 80, cRate: 5 }),
    rarity: 'Legendary'
  },

  // Mawlurker items
  'Mawlurker Fang': {
    name: 'Mawlurker Fang',
    type: 'fang',
    icon: 'ra-bone-knife',
    stats: new Stats({ atk: 25, def: 15 }),
    rarity: 'Common'
  },
  'Mawlurker Hide': {
    name: 'Mawlurker Hide',
    type: 'hide',
    icon: 'ra-hide',
    stats: new Stats({ hp: 80, def: 50 }),
    rarity: 'Uncommon'
  },
  'Mawlurker Claw': {
    name: 'Mawlurker Claw',
    type: 'claw',
    icon: 'ra-bear-trap',
    stats: new Stats({ hp: 110, def: 70 }),
    rarity: 'Rare'
  },
  'Mawlurker Heart': {
    name: 'Mawlurker Heart',
    type: 'heart',
    icon: 'ra-heart',
    stats: new Stats({ hp: 140, def: 90, atk: 60 }),
    rarity: 'Epic'
  },
  'Mawlurker Eye': {
    name: 'Mawlurker Eye',
    type: 'eye',
    icon: 'ra-eye-monster',
    stats: new Stats({ hp: 180, def: 110, atk: 80 }),
    rarity: 'Legendary'
  },

  // Midnight Shadowspinner items
  'Shadow Silk': {
    name: 'Shadow Silk',
    type: 'silk',
    icon: 'ra-tentacle',
    stats: new Stats({ def: 15 }),
    rarity: 'Common'
  },
  'Midnight Web': {
    name: 'Midnight Web',
    type: 'web',
    icon: 'ra-spider-face',
    stats: new Stats({ hp: 70, def: 60 }),
    rarity: 'Uncommon'
  },
  'Shadowspinner Fang': {
    name: 'Shadowspinner Fang',
    type: 'fang',
    icon: 'ra-bone-knife',
    stats: new Stats({ hp: 100, def: 70, atk: 40 }),
    rarity: 'Rare'
  },
  'Midnight Spinneret': {
    name: 'Midnight Spinneret',
    type: 'spinneret',
    icon: 'ra-spiral-shell',
    stats: new Stats({ hp: 130, def: 90, atk: 60 }),
    rarity: 'Epic'
  },
  'Midnight Silk Amulet': {
    name: 'Midnight Silk Amulet',
    type: 'amulet',
    icon: 'ra-gem-pendant',
    stats: new Stats({ hp: 170, def: 110, atk: 80 }),
    rarity: 'Legendary'
  },

  // Noxious Shadowspinner items
  'Noxious Silk': {
    name: 'Noxious Silk',
    type: 'silk',
    icon: 'ra-super-mushroom',
    stats: new Stats({ def: 20 }),
    rarity: 'Common'
  },
  'Noxious Web': {
    name: 'Noxious Web',
    type: 'web',
    icon: 'ra-spider-face',
    stats: new Stats({ hp: 80, def: 70 }),
    rarity: 'Uncommon'
  },
  'Noxious Fang': {
    name: 'Noxious Fang',
    type: 'fang',
    icon: 'ra-bone-knife',
    stats: new Stats({ hp: 110, def: 80, atk: 50 }),
    rarity: 'Rare'
  },
  'Noxious Spinneret': {
    name: 'Noxious Spinneret',
    type: 'spinneret',
    icon: 'ra-spiral-shell',
    stats: new Stats({ hp: 140, def: 100, atk: 70 }),
    rarity: 'Epic'
  },
  'Noxious Silk Amulet': {
    name: 'Noxious Silk Amulet',
    type: 'amulet',
    icon: 'ra-gem-pendant',
    stats: new Stats({ hp: 180, def: 120, atk: 90 }),
    rarity: 'Legendary'
  },

  // Mimic items
  'Fake Gold Coins': {
    name: 'Fake Gold Coins',
    type: 'coins',
    icon: 'ra-cog-wheel',
    stats: new Stats({ def: 10 }),
    rarity: 'Common'
  },
  'Mimic Tongue': {
    name: 'Mimic Tongue',
    type: 'tongue',
    icon: 'ra-tongue',
    stats: new Stats({ hp: 60, def: 40 }),
    rarity: 'Uncommon'
  },
  'Mimic Tooth': {
    name: 'Mimic Tooth',
    type: 'tooth',
    icon: 'ra-tooth',
    stats: new Stats({ hp: 90, def: 60, atk: 30 }),
    rarity: 'Rare'
  },
  'Mimic Heart': {
    name: 'Mimic Heart',
    type: 'heart',
    icon: 'ra-heart',
    stats: new Stats({ hp: 120, def: 80, atk: 50 }),
    rarity: 'Epic'
  },
  'Mimic Crown': {
    name: 'Mimic Crown',
    type: 'crown',
    icon: 'ra-crown',
    stats: new Stats({ hp: 150, def: 100, atk: 70 }),
    rarity: 'Legendary'
  },

  // Rotfang items
  'Rotting Tooth': {
    name: 'Rotting Tooth',
    type: 'tooth',
    icon: 'ra-tooth',
    stats: new Stats({ atk: 15, def: 10 }),
    rarity: 'Common'
  },
  'Rotfang Pelt': {
    name: 'Rotfang Pelt',
    type: 'pelt',
    icon: 'ra-hide',
    stats: new Stats({ hp: 60, def: 40 }),
    rarity: 'Uncommon'
  },
  'Rotting Claw': {
    name: 'Rotting Claw',
    type: 'claw',
    icon: 'ra-bone-knife',
    stats: new Stats({ hp: 90, def: 60, atk: 30 }),
    rarity: 'Rare'
  },
  'Rotfang Heart': {
    name: 'Rotfang Heart',
    type: 'heart',
    icon: 'ra-heart',
    stats: new Stats({ hp: 120, def: 80, atk: 50 }),
    rarity: 'Epic'
  },
  'Rotfang Amulet': {
    name: 'Rotfang Amulet',
    type: 'amulet',
    icon: 'ra-gem-pendant',
    stats: new Stats({ hp: 150, def: 100, atk: 70 }),
    rarity: 'Legendary'
  },

  // Veilreaper items
  'Veil Essence': {
    name: 'Veil Essence',
    type: 'essence',
    icon: 'ra-ghost',
    stats: new Stats({ def: 15 }),
    rarity: 'Common'
  },
  'Reaper Cloth': {
    name: 'Reaper Cloth',
    type: 'cloth',
    icon: 'ra-scroll-unfurled',
    stats: new Stats({ hp: 70, def: 60 }),
    rarity: 'Uncommon'
  },
  'Veilreaper Amulet': {
    name: 'Veilreaper Amulet',
    type: 'amulet',
    icon: 'ra-gem-pendant',
    stats: new Stats({ hp: 100, def: 70 }),
    rarity: 'Rare'
  },
  'Veilreaper Ring': {
    name: 'Veilreaper Ring',
    type: 'ring',
    icon: 'ra-ring',
    stats: new Stats({ hp: 130, def: 90, atk: 60 }),
    rarity: 'Epic'
  },
  'Veilreaper Crown': {
    name: 'Veilreaper Crown',
    type: 'crown',
    icon: 'ra-crown',
    stats: new Stats({ hp: 170, def: 110, atk: 80 }),
    rarity: 'Legendary'
  },

  // Vileburrower items
  'Burrowed Soil': {
    name: 'Burrowed Soil',
    type: 'soil',
    icon: 'ra-groundbreaker',
    stats: new Stats({ def: 20 }),
    rarity: 'Common'
  },
  'Vile Antenna': {
    name: 'Vile Antenna',
    type: 'antenna',
    icon: 'ra-spiked-tentacle',
    stats: new Stats({ hp: 80, def: 70 }),
    rarity: 'Uncommon'
  },
  'Vile Claw': {
    name: 'Vile Claw',
    type: 'claw',
    icon: 'ra-bone-knife',
    stats: new Stats({ hp: 110, def: 80, atk: 50 }),
    rarity: 'Rare'
  },
  'Vile Heart': {
    name: 'Vile Heart',
    type: 'heart',
    icon: 'ra-heart',
    stats: new Stats({ hp: 140, def: 100, atk: 70 }),
    rarity: 'Epic'
  },
  'Vile Crown': {
    name: 'Vile Crown',
    type: 'crown',
    icon: 'ra-crown',
    stats: new Stats({ hp: 180, def: 120, atk: 90 }),
    rarity: 'Legendary'
  },

  // Vilescale items
  'Vile Scale': {
    name: 'Vile Scale',
    type: 'scale',
    icon: 'ra-biohazard',
    stats: new Stats({ atk: 30, def: 20 }),
    rarity: 'Common'
  },
  'Vilescale Hide': {
    name: 'Vilescale Hide',
    type: 'hide',
    icon: 'ra-vest',
    stats: new Stats({ hp: 90, def: 70 }),
    rarity: 'Uncommon'
  },
  'Vilescale Claw': {
    name: 'Vilescale Claw',
    type: 'claw',
    icon: 'ra-bone-knife',
    stats: new Stats({ hp: 120, def: 90, atk: 40 }),
    rarity: 'Rare'
  },
  'Vilescale Heart': {
    name: 'Vilescale Heart',
    type: 'heart',
    icon: 'ra-heart',
    stats: new Stats({ hp: 150, def: 110, atk: 60 }),
    rarity: 'Epic'
  },
  'Vilescale Crown': {
    name: 'Vilescale Crown',
    type: 'crown',
    icon: 'ra-crown',
    stats: new Stats({ hp: 200, def: 130, atk: 80 }),
    rarity: 'Legendary'
  },

  // Boss items
  'Brutal Antler': {
    name: 'Brutal Antler',
    type: 'antler',
    icon: 'ra-horns',
    stats: new Stats({ hp: 250, atk: 120, def: 100 }),
    rarity: 'Epic'
  },
  'Brutal Hide': {
    name: 'Brutal Hide',
    type: 'hide',
    icon: 'ra-vest',
    stats: new Stats({ hp: 300, def: 150 }),
    rarity: 'Legendary'
  },
  'Brutal Meat': {
    name: 'Brutal Meat',
    type: 'meat',
    icon: 'ra-meat',
    stats: new Stats({ hp: 200, atk: 150, def: 80 }),
    rarity: 'Rare'
  },
  'Enforcer Antler': {
    name: 'Enforcer Antler',
    type: 'antler',
    icon: 'ra-horns',
    stats: new Stats({ hp: 260, atk: 125, def: 105 }),
    rarity: 'Epic'
  },
  'Enforcer Hide': {
    name: 'Enforcer Hide',
    type: 'hide',
    icon: 'ra-vest',
    stats: new Stats({ hp: 310, def: 155 }),
    rarity: 'Legendary'
  },
  'Enforcer Meat': {
    name: 'Enforcer Meat',
    type: 'meat',
    icon: 'ra-meat',
    stats: new Stats({ hp: 210, atk: 160, def: 85 }),
    rarity: 'Rare'
  },
  'Gorehoof Antler': {
    name: 'Gorehoof Antler',
    type: 'antler',
    icon: 'ra-horns',
    stats: new Stats({ hp: 270, atk: 130, def: 110 }),
    rarity: 'Epic'
  },
  'Ravager Hide': {
    name: 'Ravager Hide',
    type: 'hide',
    icon: 'ra-vest',
    stats: new Stats({ hp: 320, def: 160 }),
    rarity: 'Legendary'
  },
  'Moose Meat': {
    name: 'Moose Meat',
    type: 'meat',
    icon: 'ra-meat',
    stats: new Stats({ hp: 220, atk: 170, def: 90 }),
    rarity: 'Rare'
  },
  'Brightpeak Antler': {
    name: 'Brightpeak Antler',
    type: 'antler',
    icon: 'ra-horns',
    stats: new Stats({ hp: 280, atk: 135, def: 115 }),
    rarity: 'Epic'
  },
  'Brightpeak Hide': {
    name: 'Brightpeak Hide',
    type: 'hide',
    icon: 'ra-vest',
    stats: new Stats({ hp: 330, def: 165 }),
    rarity: 'Legendary'
  },
  'Brightpeak Meat': {
    name: 'Brightpeak Meat',
    type: 'meat',
    icon: 'ra-meat',
    stats: new Stats({ hp: 230, atk: 180, def: 95 }),
    rarity: 'Rare'
  },
  'Hammerhoof Antler': {
    name: 'Hammerhoof Antler',
    type: 'antler',
    icon: 'ra-horns',
    stats: new Stats({ hp: 290, atk: 140, def: 120 }),
    rarity: 'Epic'
  },
  'Hammerhoof Hide': {
    name: 'Hammerhoof Hide',
    type: 'hide',
    icon: 'ra-vest',
    stats: new Stats({ hp: 340, def: 170 }),
    rarity: 'Legendary'
  },
  'Hammerhoof Meat': {
    name: 'Hammerhoof Meat',
    type: 'meat',
    icon: 'ra-meat',
    stats: new Stats({ hp: 240, atk: 190, def: 100 }),
    rarity: 'Rare'
  },
  'Enchanted Antler': {
    name: 'Enchanted Antler',
    type: 'antler',
    icon: 'ra-horns',
    stats: new Stats({ hp: 300, atk: 145, def: 125 }),
    rarity: 'Epic'
  },
  'Enchanted Hide': {
    name: 'Enchanted Hide',
    type: 'hide',
    icon: 'ra-vest',
    stats: new Stats({ hp: 350, def: 175 }),
    rarity: 'Legendary'
  },
  'Enchanted Meat': {
    name: 'Enchanted Meat',
    type: 'meat',
    icon: 'ra-meat',
    stats: new Stats({ hp: 250, atk: 200, def: 105 }),
    rarity: 'Rare'
  },
  'Unyielding Antler': {
    name: 'Unyielding Antler',
    type: 'antler',
    icon: 'ra-horns',
    stats: new Stats({ hp: 310, atk: 150, def: 130 }),
    rarity: 'Epic'
  },
  'Unyielding Hide': {
    name: 'Unyielding Hide',
    type: 'hide',
    icon: 'ra-vest',
    stats: new Stats({ hp: 360, def: 180 }),
    rarity: 'Legendary'
  },
  'Unyielding Meat': {
    name: 'Unyielding Meat',
    type: 'meat',
    icon: 'ra-meat',
    stats: new Stats({ hp: 260, atk: 210, def: 110 }),
    rarity: 'Rare'
  },
  'Colossal Antler': {
    name: 'Colossal Antler',
    type: 'antler',
    icon: 'ra-horns',
    stats: new Stats({ hp: 320, atk: 155, def: 135 }),
    rarity: 'Epic'
  },
  'Colossal Hide': {
    name: 'Colossal Hide',
    type: 'hide',
    icon: 'ra-vest',
    stats: new Stats({ hp: 370, def: 185 }),
    rarity: 'Legendary'
  },
  'Colossal Meat': {
    name: 'Colossal Meat',
    type: 'meat',
    icon: 'ra-meat',
    stats: new Stats({ hp: 270, atk: 220, def: 115 }),
    rarity: 'Rare'
  }
};

export default items;
