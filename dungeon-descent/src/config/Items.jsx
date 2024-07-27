import { Stats } from '../components/game/Stats';

const items = {
  // Beholder items
  'Beholder Eye': {
    name: 'Beholder Eye',
    type: 'eye',
    icon: 'ra-eye-monster',
    stats: new Stats({ atk: 20, cRate: 5 }),
    rarity: 'Common',
    price: 50
  },
  'Beholder Tentacle': {
    name: 'Beholder Tentacle',
    type: 'whip',
    icon: 'ra-vine-whip',
    stats: new Stats({ atk: 50, atkSpd: 10 }),
    rarity: 'Uncommon',
    price: 100
  },
  'Beholder Crown': {
    name: 'Beholder Crown',
    type: 'crown',
    icon: 'ra-crown',
    stats: new Stats({ hp: 150, def: 50 }),
    rarity: 'Rare',
    price: 200
  },
  'Beholder Heart': {
    name: 'Beholder Heart',
    type: 'heart',
    icon: 'ra-heartburn',
    stats: new Stats({ hp: 200, def: 70, atk: 50 }),
    rarity: 'Epic',
    price: 400
  },
  'Beholder Orb': {
    name: 'Beholder Orb',
    type: 'orb',
    icon: 'ra-crystal-ball',
    stats: new Stats({ atk: 150, cRate: 10, cDmg: 20 }),
    rarity: 'Legendary',
    price: 800
  },

  // Bonewalker items
  'Bone Fragment': {
    name: 'Bone Fragment',
    type: 'bone',
    icon: 'ra-bone-knife',
    stats: new Stats({ def: 10 }),
    rarity: 'Common',
    price: 30
  },
  'Bonewalker Shield': {
    name: 'Bonewalker Shield',
    type: 'shield',
    icon: 'ra-shield',
    stats: new Stats({ hp: 50, def: 40 }),
    rarity: 'Uncommon',
    price: 100
  },
  'Bonewalker Sword': {
    name: 'Bonewalker Sword',
    type: 'sword',
    icon: 'ra-sword',
    stats: new Stats({ atk: 60 }),
    rarity: 'Rare',
    price: 200
  },
  'Bonewalker Helmet': {
    name: 'Bonewalker Helmet',
    type: 'helmet',
    icon: 'ra-knight-helmet',
    stats: new Stats({ hp: 80, def: 60 }),
    rarity: 'Epic',
    price: 400
  },
  'Bonewalker Amulet': {
    name: 'Bonewalker Amulet',
    type: 'amulet',
    icon: 'ra-gem-pendant',
    stats: new Stats({ hp: 100, def: 80, atk: 50 }),
    rarity: 'Legendary',
    price: 800
  },

  // Crimson Bonewalker items
  'Crimson Bone Fragment': {
    name: 'Crimson Bone Fragment',
    type: 'bone',
    icon: 'ra-bone-knife',
    stats: new Stats({ def: 15 }),
    rarity: 'Common',
    price: 40
  },
  'Crimson Bonewalker Shield': {
    name: 'Crimson Bonewalker Shield',
    type: 'shield',
    icon: 'ra-round-shield',
    stats: new Stats({ hp: 60, def: 50 }),
    rarity: 'Uncommon',
    price: 120
  },
  'Crimson Bonewalker Sword': {
    name: 'Crimson Bonewalker Sword',
    type: 'sword',
    icon: 'ra-sword',
    stats: new Stats({ atk: 70 }),
    rarity: 'Rare',
    price: 220
  },
  'Crimson Bonewalker Helmet': {
    name: 'Crimson Bonewalker Helmet',
    type: 'helmet',
    icon: 'ra-cracked-helm',
    stats: new Stats({ hp: 100, def: 70 }),
    rarity: 'Epic',
    price: 420
  },
  'Crimson Bonewalker Amulet': {
    name: 'Crimson Bonewalker Amulet',
    type: 'amulet',
    icon: 'ra-gem-pendant',
    stats: new Stats({ hp: 120, def: 90, atk: 60 }),
    rarity: 'Legendary',
    price: 820
  },

  // Dreadshade items
  'Dread Essence': {
    name: 'Dread Essence',
    type: 'essence',
    icon: 'ra-acid',
    stats: new Stats({ def: 15 }),
    rarity: 'Common',
    price: 40
  },
  'Shade Cloth': {
    name: 'Shade Cloth',
    type: 'cloth',
    icon: 'ra-cloth',
    stats: new Stats({ hp: 70, def: 60 }),
    rarity: 'Uncommon',
    price: 140
  },
  'Dreadshade Amulet': {
    name: 'Dreadshade Amulet',
    type: 'amulet',
    icon: 'ra-gem-pendant',
    stats: new Stats({ hp: 100, def: 70 }),
    rarity: 'Rare',
    price: 250
  },
  'Dreadshade Ring': {
    name: 'Dreadshade Ring',
    type: 'ring',
    icon: 'ra-ring',
    stats: new Stats({ hp: 120, def: 90, atk: 40 }),
    rarity: 'Epic',
    price: 480
  },
  'Dreadshade Crown': {
    name: 'Dreadshade Crown',
    type: 'crown',
    icon: 'ra-crown',
    stats: new Stats({ hp: 150, def: 120, atk: 70 }),
    rarity: 'Legendary',
    price: 900
  },

  // Goblin items
  'Dagger': {
    name: 'Dagger',
    type: 'dagger',
    icon: 'ra-plain-dagger',
    stats: new Stats({ atk: 10, atkSpd: 5 }),
    rarity: 'Common',
    price: 20
  },
  'Goblin Armor': {
    name: 'Goblin Armor',
    type: 'armor',
    icon: 'ra-vest',
    stats: new Stats({ hp: 50, def: 30 }),
    rarity: 'Uncommon',
    price: 100
  },
  'Goblin Mask': {
    name: 'Goblin Mask',
    type: 'mask',
    icon: 'ra-arcane-mask',
    stats: new Stats({ hp: 70, def: 40 }),
    rarity: 'Rare',
    price: 200
  },
  'Goblin King’s Ring': {
    name: 'Goblin King’s Ring',
    type: 'ring',
    icon: 'ra-ring',
    stats: new Stats({ hp: 100, def: 60, atk: 30 }),
    rarity: 'Epic',
    price: 400
  },
  'Goblin Crown': {
    name: 'Goblin Crown',
    type: 'crown',
    icon: 'ra-crown',
    stats: new Stats({ hp: 120, def: 80, atk: 50 }),
    rarity: 'Legendary',
    price: 800
  },

  // Grimwalker items
  'Grim Fragment': {
    name: 'Grim Fragment',
    type: 'fragment',
    icon: 'ra-bone-knife',
    stats: new Stats({ def: 10 }),
    rarity: 'Common',
    price: 30
  },
  'Grimwalker Shield': {
    name: 'Grimwalker Shield',
    type: 'shield',
    icon: 'ra-shield',
    stats: new Stats({ hp: 60, def: 50 }),
    rarity: 'Uncommon',
    price: 120
  },
  'Grimwalker Sword': {
    name: 'Grimwalker Sword',
    type: 'sword',
    icon: 'ra-sword',
    stats: new Stats({ atk: 70 }),
    rarity: 'Rare',
    price: 220
  },
  'Grimwalker Helmet': {
    name: 'Grimwalker Helmet',
    type: 'helmet',
    icon: 'ra-cracked-helm',
    stats: new Stats({ hp: 100, def: 70 }),
    rarity: 'Epic',
    price: 420
  },
  'Grimwalker Amulet': {
    name: 'Grimwalker Amulet',
    type: 'amulet',
    icon: 'ra-gem-pendant',
    stats: new Stats({ hp: 120, def: 90, atk: 60 }),
    rarity: 'Legendary',
    price: 820
  },

  // Kobold items
  'Rusty Sword': {
    name: 'Rusty Sword',
    type: 'sword',
    icon: 'ra-sword',
    stats: new Stats({ atk: 10, def: 5 }),
    rarity: 'Common',
    price: 20
  },
  'Kobold Miner’s Helmet': {
    name: 'Kobold Miner’s Helmet',
    type: 'helmet',
    icon: 'ra-cracked-helm',
    stats: new Stats({ hp: 50, def: 30 }),
    rarity: 'Uncommon',
    price: 100
  },
  'Kobold Amulet': {
    name: 'Kobold Amulet',
    type: 'amulet',
    icon: 'ra-gem-pendant',
    stats: new Stats({ hp: 70, def: 40 }),
    rarity: 'Rare',
    price: 200
  },
  'Kobold Gold Nugget': {
    name: 'Kobold Gold Nugget',
    type: 'nugget',
    icon: 'ra-gold-bar',
    stats: new Stats({ hp: 100, def: 60, atk: 30 }),
    rarity: 'Epic',
    price: 400
  },
  'Kobold King’s Scepter': {
    name: 'Kobold King’s Scepter',
    type: 'scepter',
    icon: 'ra-scepter',
    stats: new Stats({ hp: 120, def: 80, atk: 50 }),
    rarity: 'Legendary',
    price: 800
  },

  // Lich items
  'Lich Bone': {
    name: 'Lich Bone',
    type: 'bone',
    icon: 'ra-bone-knife',
    stats: new Stats({ def: 20 }),
    rarity: 'Common',
    price: 50
  },
  'Lich Robes': {
    name: 'Lich Robes',
    type: 'robes',
    icon: 'ra-vest',
    stats: new Stats({ hp: 90, def: 70 }),
    rarity: 'Uncommon',
    price: 150
  },
  'Lich Crown': {
    name: 'Lich Crown',
    type: 'crown',
    icon: 'ra-crown',
    stats: new Stats({ hp: 120, def: 90, atk: 40 }),
    rarity: 'Rare',
    price: 250
  },
  'Lich Staff': {
    name: 'Lich Staff',
    type: 'staff',
    icon: 'ra-laser-blast',
    stats: new Stats({ hp: 150, def: 110, atk: 60 }),
    rarity: 'Epic',
    price: 480
  },
  'Lich Soul Gem': {
    name: 'Lich Soul Gem',
    type: 'gem',
    icon: 'ra-gem',
    stats: new Stats({ hp: 200, def: 130, atk: 80, cRate: 5 }),
    rarity: 'Legendary',
    price: 900
  },

  // Mawlurker items
  'Mawlurker Fang': {
    name: 'Mawlurker Fang',
    type: 'fang',
    icon: 'ra-bone-knife',
    stats: new Stats({ atk: 25, def: 15 }),
    rarity: 'Common',
    price: 50
  },
  'Mawlurker Hide': {
    name: 'Mawlurker Hide',
    type: 'hide',
    icon: 'ra-hide',
    stats: new Stats({ hp: 80, def: 50 }),
    rarity: 'Uncommon',
    price: 150
  },
  'Mawlurker Claw': {
    name: 'Mawlurker Claw',
    type: 'claw',
    icon: 'ra-bear-trap',
    stats: new Stats({ hp: 110, def: 70 }),
    rarity: 'Rare',
    price: 250
  },
  'Mawlurker Heart': {
    name: 'Mawlurker Heart',
    type: 'heart',
    icon: 'ra-heart',
    stats: new Stats({ hp: 140, def: 90, atk: 60 }),
    rarity: 'Epic',
    price: 480
  },
  'Mawlurker Eye': {
    name: 'Mawlurker Eye',
    type: 'eye',
    icon: 'ra-eye-monster',
    stats: new Stats({ hp: 180, def: 110, atk: 80 }),
    rarity: 'Legendary',
    price: 900
  },

  // Midnight Shadowspinner items
  'Shadow Silk': {
    name: 'Shadow Silk',
    type: 'silk',
    icon: 'ra-tentacle',
    stats: new Stats({ def: 15 }),
    rarity: 'Common',
    price: 40
  },
  'Midnight Web': {
    name: 'Midnight Web',
    type: 'web',
    icon: 'ra-spider-face',
    stats: new Stats({ hp: 70, def: 60 }),
    rarity: 'Uncommon',
    price: 140
  },
  'Shadowspinner Fang': {
    name: 'Shadowspinner Fang',
    type: 'fang',
    icon: 'ra-bone-knife',
    stats: new Stats({ hp: 100, def: 70, atk: 40 }),
    rarity: 'Rare',
    price: 250
  },
  'Midnight Spinneret': {
    name: 'Midnight Spinneret',
    type: 'spinneret',
    icon: 'ra-spiral-shell',
    stats: new Stats({ hp: 130, def: 90, atk: 60 }),
    rarity: 'Epic',
    price: 480
  },
  'Midnight Silk Amulet': {
    name: 'Midnight Silk Amulet',
    type: 'amulet',
    icon: 'ra-gem-pendant',
    stats: new Stats({ hp: 170, def: 110, atk: 80 }),
    rarity: 'Legendary',
    price: 900
  },

  // Noxious Shadowspinner items
  'Noxious Silk': {
    name: 'Noxious Silk',
    type: 'silk',
    icon: 'ra-super-mushroom',
    stats: new Stats({ def: 20 }),
    rarity: 'Common',
    price: 40
  },
  'Noxious Web': {
    name: 'Noxious Web',
    type: 'web',
    icon: 'ra-spider-face',
    stats: new Stats({ hp: 80, def: 70 }),
    rarity: 'Uncommon',
    price: 160
  },
  'Noxious Fang': {
    name: 'Noxious Fang',
    type: 'fang',
    icon: 'ra-bone-knife',
    stats: new Stats({ hp: 110, def: 80, atk: 50 }),
    rarity: 'Rare',
    price: 270
  },
  'Noxious Spinneret': {
    name: 'Noxious Spinneret',
    type: 'spinneret',
    icon: 'ra-spiral-shell',
    stats: new Stats({ hp: 140, def: 100, atk: 70 }),
    rarity: 'Epic',
    price: 500
  },
  'Noxious Silk Amulet': {
    name: 'Noxious Silk Amulet',
    type: 'amulet',
    icon: 'ra-gem-pendant',
    stats: new Stats({ hp: 180, def: 120, atk: 90 }),
    rarity: 'Legendary',
    price: 920
  },

  // Mimic items
  'Fake Gold Coins': {
    name: 'Fake Gold Coins',
    type: 'coins',
    icon: 'ra-cog-wheel',
    stats: new Stats({ def: 10 }),
    rarity: 'Common',
    price: 20
  },
  'Mimic Tongue': {
    name: 'Mimic Tongue',
    type: 'tongue',
    icon: 'ra-tentacle',
    stats: new Stats({ hp: 60, def: 40 }),
    rarity: 'Uncommon',
    price: 100
  },
  'Mimic Tooth': {
    name: 'Mimic Tooth',
    type: 'tooth',
    icon: 'ra-tooth',
    stats: new Stats({ hp: 90, def: 60, atk: 30 }),
    rarity: 'Rare',
    price: 220
  },
  'Mimic Heart': {
    name: 'Mimic Heart',
    type: 'heart',
    icon: 'ra-heart',
    stats: new Stats({ hp: 120, def: 80, atk: 50 }),
    rarity: 'Epic',
    price: 450
  },
  'Mimic Crown': {
    name: 'Mimic Crown',
    type: 'crown',
    icon: 'ra-crown',
    stats: new Stats({ hp: 150, def: 100, atk: 70 }),
    rarity: 'Legendary',
    price: 900
  },

  // Rotfang items
  'Rotting Tooth': {
    name: 'Rotting Tooth',
    type: 'tooth',
    icon: 'ra-tooth',
    stats: new Stats({ atk: 15, def: 10 }),
    rarity: 'Common',
    price: 30
  },
  'Rotfang Pelt': {
    name: 'Rotfang Pelt',
    type: 'pelt',
    icon: 'ra-hide',
    stats: new Stats({ hp: 60, def: 40 }),
    rarity: 'Uncommon',
    price: 100
  },
  'Rotting Claw': {
    name: 'Rotting Claw',
    type: 'claw',
    icon: 'ra-bone-knife',
    stats: new Stats({ hp: 90, def: 60, atk: 30 }),
    rarity: 'Rare',
    price: 200
  },
  'Rotfang Heart': {
    name: 'Rotfang Heart',
    type: 'heart',
    icon: 'ra-heart',
    stats: new Stats({ hp: 120, def: 80, atk: 50 }),
    rarity: 'Epic',
    price: 420
  },
  'Rotfang Amulet': {
    name: 'Rotfang Amulet',
    type: 'amulet',
    icon: 'ra-gem-pendant',
    stats: new Stats({ hp: 150, def: 100, atk: 70 }),
    rarity: 'Legendary',
    price: 800
  },

  // Veilreaper items
  'Veil Essence': {
    name: 'Veil Essence',
    type: 'essence',
    icon: 'ra-ghost',
    stats: new Stats({ def: 15 }),
    rarity: 'Common',
    price: 40
  },
  'Reaper Cloth': {
    name: 'Reaper Cloth',
    type: 'cloth',
    icon: 'ra-vest',
    stats: new Stats({ hp: 70, def: 60 }),
    rarity: 'Uncommon',
    price: 140
  },
  'Veilreaper Amulet': {
    name: 'Veilreaper Amulet',
    type: 'amulet',
    icon: 'ra-gem-pendant',
    stats: new Stats({ hp: 100, def: 70 }),
    rarity: 'Rare',
    price: 250
  },
  'Veilreaper Ring': {
    name: 'Veilreaper Ring',
    type: 'ring',
    icon: 'ra-ring',
    stats: new Stats({ hp: 130, def: 90, atk: 60 }),
    rarity: 'Epic',
    price: 480
  },
  'Veilreaper Crown': {
    name: 'Veilreaper Crown',
    type: 'crown',
    icon: 'ra-crown',
    stats: new Stats({ hp: 170, def: 110, atk: 80 }),
    rarity: 'Legendary',
    price: 900
  },

  // Vileburrower items
  'Burrowed Soil': {
    name: 'Burrowed Soil',
    type: 'soil',
    icon: 'ra-groundbreaker',
    stats: new Stats({ def: 20 }),
    rarity: 'Common',
    price: 40
  },
  'Vile Antenna': {
    name: 'Vile Antenna',
    type: 'antenna',
    icon: 'ra-spiked-tentacle',
    stats: new Stats({ hp: 80, def: 70 }),
    rarity: 'Uncommon',
    price: 140
  },
  'Vile Claw': {
    name: 'Vile Claw',
    type: 'claw',
    icon: 'ra-bone-knife',
    stats: new Stats({ hp: 110, def: 80, atk: 50 }),
    rarity: 'Rare',
    price: 250
  },
  'Vile Heart': {
    name: 'Vile Heart',
    type: 'heart',
    icon: 'ra-heart',
    stats: new Stats({ hp: 140, def: 100, atk: 70 }),
    rarity: 'Epic',
    price: 480
  },
  'Vile Crown': {
    name: 'Vile Crown',
    type: 'crown',
    icon: 'ra-crown',
    stats: new Stats({ hp: 180, def: 120, atk: 90 }),
    rarity: 'Legendary',
    price: 900
  },

  // Vilescale items
  'Vile Scale': {
    name: 'Vile Scale',
    type: 'scale',
    icon: 'ra-biohazard',
    stats: new Stats({ atk: 30, def: 20 }),
    rarity: 'Common',
    price: 50
  },
  'Vilescale Hide': {
    name: 'Vilescale Hide',
    type: 'hide',
    icon: 'ra-vest',
    stats: new Stats({ hp: 90, def: 70 }),
    rarity: 'Uncommon',
    price: 150
  },
  'Vilescale Claw': {
    name: 'Vilescale Claw',
    type: 'claw',
    icon: 'ra-bone-knife',
    stats: new Stats({ hp: 120, def: 90, atk: 40 }),
    rarity: 'Rare',
    price: 250
  },
  'Vilescale Heart': {
    name: 'Vilescale Heart',
    type: 'heart',
    icon: 'ra-heart',
    stats: new Stats({ hp: 150, def: 110, atk: 60 }),
    rarity: 'Epic',
    price: 480
  },
  'Vilescale Crown': {
    name: 'Vilescale Crown',
    type: 'crown',
    icon: 'ra-crown',
    stats: new Stats({ hp: 200, def: 130, atk: 80 }),
    rarity: 'Legendary',
    price: 900
  },

  // Boss items
  'Brutal Antler': {
    name: 'Brutal Antler',
    type: 'antler',
    icon: 'ra-horns',
    stats: new Stats({ hp: 250, atk: 120, def: 100 }),
    rarity: 'Epic',
    price: 480
  },
  'Brutal Hide': {
    name: 'Brutal Hide',
    type: 'hide',
    icon: 'ra-vest',
    stats: new Stats({ hp: 300, def: 150 }),
    rarity: 'Legendary',
    price: 900
  },
  'Brutal Meat': {
    name: 'Brutal Meat',
    type: 'meat',
    icon: 'ra-meat',
    stats: new Stats({ hp: 200, atk: 150, def: 80 }),
    rarity: 'Rare',
    price: 200
  },
  'Enforcer Antler': {
    name: 'Enforcer Antler',
    type: 'antler',
    icon: 'ra-horns',
    stats: new Stats({ hp: 260, atk: 125, def: 105 }),
    rarity: 'Epic',
    price: 500
  },
  'Enforcer Hide': {
    name: 'Enforcer Hide',
    type: 'hide',
    icon: 'ra-vest',
    stats: new Stats({ hp: 310, def: 155 }),
    rarity: 'Legendary',
    price: 920
  },
  'Enforcer Meat': {
    name: 'Enforcer Meat',
    type: 'meat',
    icon: 'ra-meat',
    stats: new Stats({ hp: 210, atk: 160, def: 85 }),
    rarity: 'Rare',
    price: 200
  },
  'Gorehoof Antler': {
    name: 'Gorehoof Antler',
    type: 'antler',
    icon: 'ra-horns',
    stats: new Stats({ hp: 270, atk: 130, def: 110 }),
    rarity: 'Epic',
    price: 520
  },
  'Ravager Hide': {
    name: 'Ravager Hide',
    type: 'hide',
    icon: 'ra-vest',
    stats: new Stats({ hp: 320, def: 160 }),
    rarity: 'Legendary',
    price: 940
  },
  'Moose Meat': {
    name: 'Moose Meat',
    type: 'meat',
    icon: 'ra-meat',
    stats: new Stats({ hp: 220, atk: 170, def: 90 }),
    rarity: 'Rare',
    price: 200
  },
  'Brightpeak Antler': {
    name: 'Brightpeak Antler',
    type: 'antler',
    icon: 'ra-horns',
    stats: new Stats({ hp: 280, atk: 135, def: 115 }),
    rarity: 'Epic',
    price: 540
  },
  'Brightpeak Hide': {
    name: 'Brightpeak Hide',
    type: 'hide',
    icon: 'ra-vest',
    stats: new Stats({ hp: 330, def: 165 }),
    rarity: 'Legendary',
    price: 960
  },
  'Brightpeak Meat': {
    name: 'Brightpeak Meat',
    type: 'meat',
    icon: 'ra-meat',
    stats: new Stats({ hp: 230, atk: 180, def: 95 }),
    rarity: 'Rare',
    price: 200
  },
  'Hammerhoof Antler': {
    name: 'Hammerhoof Antler',
    type: 'antler',
    icon: 'ra-horns',
    stats: new Stats({ hp: 290, atk: 140, def: 120 }),
    rarity: 'Epic',
    price: 560
  },
  'Hammerhoof Hide': {
    name: 'Hammerhoof Hide',
    type: 'hide',
    icon: 'ra-vest',
    stats: new Stats({ hp: 340, def: 170 }),
    rarity: 'Legendary',
    price: 980
  },
  'Hammerhoof Meat': {
    name: 'Hammerhoof Meat',
    type: 'meat',
    icon: 'ra-meat',
    stats: new Stats({ hp: 240, atk: 190, def: 100 }),
    rarity: 'Rare',
    price: 200
  },
  'Enchanted Antler': {
    name: 'Enchanted Antler',
    type: 'antler',
    icon: 'ra-horns',
    stats: new Stats({ hp: 300, atk: 145, def: 125 }),
    rarity: 'Epic',
    price: 580
  },
  'Enchanted Hide': {
    name: 'Enchanted Hide',
    type: 'hide',
    icon: 'ra-vest',
    stats: new Stats({ hp: 350, def: 175 }),
    rarity: 'Legendary',
    price: 1000
  },
  'Enchanted Meat': {
    name: 'Enchanted Meat',
    type: 'meat',
    icon: 'ra-meat',
    stats: new Stats({ hp: 250, atk: 200, def: 105 }),
    rarity: 'Rare',
    price: 200
  },
  'Unyielding Antler': {
    name: 'Unyielding Antler',
    type: 'antler',
    icon: 'ra-horns',
    stats: new Stats({ hp: 310, atk: 150, def: 130 }),
    rarity: 'Epic',
    price: 600
  },
  'Unyielding Hide': {
    name: 'Unyielding Hide',
    type: 'hide',
    icon: 'ra-vest',
    stats: new Stats({ hp: 360, def: 180 }),
    rarity: 'Legendary',
    price: 1020
  },
  'Unyielding Meat': {
    name: 'Unyielding Meat',
    type: 'meat',
    icon: 'ra-meat',
    stats: new Stats({ hp: 260, atk: 210, def: 110 }),
    rarity: 'Rare',
    price: 200
  },
  'Colossal Antler': {
    name: 'Colossal Antler',
    type: 'antler',
    icon: 'ra-horns',
    stats: new Stats({ hp: 320, atk: 155, def: 135 }),
    rarity: 'Epic',
    price: 620
  },
  'Colossal Hide': {
    name: 'Colossal Hide',
    type: 'hide',
    icon: 'ra-vest',
    stats: new Stats({ hp: 370, def: 185 }),
    rarity: 'Legendary',
    price: 1040
  },
  'Colossal Meat': {
    name: 'Colossal Meat',
    type: 'meat',
    icon: 'ra-meat',
    stats: new Stats({ hp: 270, atk: 220, def: 115 }),
    rarity: 'Rare',
    price: 200
  }
};

export default items;
