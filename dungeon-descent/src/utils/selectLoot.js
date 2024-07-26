import items from '../config/Items';

const selectLoot = (lootTable) => {
  const roll = Math.random();
  let accumulatedProbability = 0;
  console.log("Roll:", roll);

  for (const loot of lootTable) {
    accumulatedProbability += loot.probability;
    console.log("Checking loot:", loot.item, "Accumulated Probability:", accumulatedProbability);

    if (roll < accumulatedProbability) {
      const item = items[loot.item];
      console.log("Selected item from items config:", item);
      console.log("Items object keys:", Object.keys(items));
      
      if (item) {
        const filteredStats = Object.entries(item.stats).reduce((acc, [key, value]) => {
          if (value > 0) acc[key] = value;
          return acc;
        }, {});
        
        return [{ name: item.name, rarity: item.rarity, stats: filteredStats, icon: item.icon, type: item.type }];
      } else {
        return [];
      }
    }
  }
  return [];
};

export default selectLoot;
