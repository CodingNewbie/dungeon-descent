import monsters from '../config/Monsters';

const selectMonster = () => {
  const nonBossMonsters = monsters.filter(monster => !monster.isBoss);
  const totalProbability = nonBossMonsters.reduce((acc, monster) => acc + monster.probability, 0);
  const random = Math.random() * totalProbability;
  let cumulativeProbability = 0;

  for (const monster of nonBossMonsters) {
    cumulativeProbability += monster.probability;
    if (random < cumulativeProbability) {
      return monster;
    }
  }

  return nonBossMonsters[0]; 
};

export default selectMonster;
