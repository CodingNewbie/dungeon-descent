import monsters from '../config/Monsters';

export const selectMonster = () => {
  const random = Math.random();
  let cumulativeProbability = 0;

  for (const monster of monsters) {
    cumulativeProbability += monster.probability;
    if (random < cumulativeProbability) {
      return monster.type;
    }
  }

  return monsters[monsters.length - 1].type; // Default to the last monster if something goes wrong
};
