class Stats {
  constructor({
    hp = 0,
    atk = 0,
    def = 0,
    atkSpd = 0,
    vamp = 0,
    cRate = 0,
    cDmg = 0,
    bonusHp = 0,
    bonusAtk = 0,
    bonusDef = 0,
    bonusAtkSpd = 0,
    bonusVamp = 0,
    bonusCRate = 0,
    bonusCDmg = 0
  } = {}) {
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.atkSpd = atkSpd;
    this.vamp = vamp;
    this.cRate = cRate;
    this.cDmg = cDmg;

    this.bonusHp = bonusHp;
    this.bonusAtk = bonusAtk;
    this.bonusDef = bonusDef;
    this.bonusAtkSpd = bonusAtkSpd;
    this.bonusVamp = bonusVamp;
    this.bonusCRate = bonusCRate;
    this.bonusCDmg = bonusCDmg;
  }

  getStats() {
    return {
      hp: this.hp,
      atk: this.atk,
      def: this.def,
      atkSpd: this.atkSpd,
      vamp: this.vamp,
      cRate: this.cRate,
      cDmg: this.cDmg,
      bonusHp: this.bonusHp,
      bonusAtk: this.bonusAtk,
      bonusDef: this.bonusDef,
      bonusAtkSpd: this.bonusAtkSpd,
      bonusVamp: this.bonusVamp,
      bonusCRate: this.bonusCRate,
      bonusCDmg: this.bonusCDmg
    };
  }

  getHp() {
    return this.hp;
  }

  getAtk() {
    return this.atk;
  }

  getDef() {
    return this.def;
  }

  getAtkSpd() {
    return this.atkSpd;
  }

  getVamp() {
    return this.vamp;
  }

  getCRate() {
    return this.cRate;
  }

  getCDmg() {
    return this.cDmg;
  }

  getBonusHp() {
    return this.bonusHp;
  }

  getBonusAtk() {
    return this.bonusAtk;
  }

  getBonusDef() {
    return this.bonusDef;
  }

  getBonusAtkSpd() {
    return this.bonusAtkSpd;
  }

  getBonusVamp() {
    return this.bonusVamp;
  }

  getBonusCRate() {
    return this.bonusCRate;
  }

  getBonusCDmg() {
    return this.bonusCDmg;
  }

  getTotalHp() {
    return this.hp + this.bonusHp;
  }

  getTotalAtk() {
    return this.atk + this.bonusAtk;
  }

  getTotalDef() {
    return this.def + this.bonusDef;
  }

  getTotalAtkSpd() {
    return this.atkSpd + this.bonusAtkSpd;
  }

  getTotalVamp() {
    return this.vamp + this.bonusVamp;
  }

  getTotalCRate() {
    return this.cRate + this.bonusCRate;
  }

  getTotalCDmg() {
    return this.cDmg + this.bonusCDmg;
  }
}

const StatsDisplay = ({ stats }) => {
  const { hp, atk, def, atkSpd, vamp, cRate, cDmg } = stats.getStats();
  return (
    <div className="Stats-container">
      <p><strong>Stats</strong></p>
      <p>HP: {hp}</p>
      <p>ATK: {atk}</p>
      <p>DEF: {def}</p>
      <p>ATK.SPD: {atkSpd}</p>
      <p>VAMP: {vamp}%</p>
      <p>C.RATE: {cRate}%</p>
      <p>C.DMG: {cDmg}%</p>
    </div>
  );
};

const BonusStatsDisplay = ({ stats }) => {
  const { bonusHp, bonusAtk, bonusDef, bonusAtkSpd, bonusVamp, bonusCRate, bonusCDmg } = stats.getStats();
  return (
    <div className="BonusStats-container">
      <p><strong>Bonus Stats</strong></p>
      <p>Bonus HP: {bonusHp}</p>
      <p>Bonus ATK: {bonusAtk}</p>
      <p>Bonus DEF: {bonusDef}</p>
      <p>Bonus ATK.SPD: {bonusAtkSpd}%</p>
      <p>Bonus VAMP: {bonusVamp}%</p>
      <p>Bonus C.RATE: {bonusCRate}%</p>
      <p>Bonus C.DMG: {bonusCDmg}%</p>
    </div>
  );
};

export { Stats, StatsDisplay, BonusStatsDisplay };
