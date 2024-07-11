const selectLoot = (lootTable) => {
    const random = Math.random();
    let cumulativeProbability = 0;
  
    for (const loot of lootTable) {
      cumulativeProbability += loot.probability;
      if (random < cumulativeProbability) {
        return [loot]; 
      }
    }
  
    return []; 
  };
  
  export default selectLoot;
  