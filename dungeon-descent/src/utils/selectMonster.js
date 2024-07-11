import monsters from '../config/Monsters';

const selectMonster = () => {
  const random = Math.random();
  let cumulativeProbability = 0;

  for (const monster of monsters) {
    cumulativeProbability += monster.probability;
    if (random < cumulativeProbability) {
      return monster;
    }
  }

  return monsters[0]; 
};

export default selectMonster;
