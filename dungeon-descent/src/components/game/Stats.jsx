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
}

const StatsDisplay = ({ stats }) => (
  <div className="Stats-container">
    <p><strong>Stats</strong></p>
    <p>HP: {stats.getHp()}</p>
    <p>ATK: {stats.getAtk()}</p>
    <p>DEF: {stats.getDef()}</p>
    <p>ATK.SPD: {stats.getAtkSpd()}</p>
    <p>VAMP: {stats.getVamp()}%</p>
    <p>C.RATE: {stats.getCRate()}%</p>
    <p>C.DMG: {stats.getCDmg()}%</p>
  </div>
);

const BonusStatsDisplay = ({ stats }) => (
  <div className="BonusStats-container">
    <p><strong>Bonus Stats</strong></p>
    <p>Bonus HP: {stats.getBonusHp()}</p>
    <p>Bonus ATK: {stats.getBonusAtk()}</p>
    <p>Bonus DEF: {stats.getBonusDef()}</p>
    <p>Bonus ATK.SPD: {stats.getBonusAtkSpd()}%</p>
    <p>Bonus VAMP: {stats.getBonusVamp()}%</p>
    <p>Bonus C.RATE: {stats.getBonusCRate()}%</p>
    <p>Bonus C.DMG: {stats.getBonusCDmg()}%</p>
  </div>
);

export { Stats, StatsDisplay, BonusStatsDisplay };
