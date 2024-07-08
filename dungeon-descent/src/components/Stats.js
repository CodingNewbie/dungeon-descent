// src/components/Stats.js
import React from 'react';

class Stats {
  constructor() {
    this.hp = 250;
    this.atk = 50;
    this.def = 50;
    this.atkSpd = 0.5;
    this.vamp = 0;
    this.cRate = 0;
    this.cDmg = 0;

    // Bonus stats
    this.bonusHp = 0;
    this.bonusAtk = 0;
    this.bonusDef = 0;
    this.bonusAtkSpd = 0;
    this.bonusVamp = 0;
    this.bonusCRate = 0;
    this.bonusCDmg = 0;
  }

  // Getter methods
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

  // Setter methods
  setHp(value) {
    this.hp = value;
  }

  setAtk(value) {
    this.atk = value;
  }

  setDef(value) {
    this.def = value;
  }

  setAtkSpd(value) {
    this.atkSpd = value;
  }

  setVamp(value) {
    this.vamp = value;
  }

  setCRate(value) {
    this.cRate = value;
  }

  setCDmg(value) {
    this.cDmg = value;
  }

  setBonusHp(value) {
    this.bonusHp = value;
  }

  setBonusAtk(value) {
    this.bonusAtk = value;
  }

  setBonusDef(value) {
    this.bonusDef = value;
  }

  setBonusAtkSpd(value) {
    this.bonusAtkSpd = value;
  }

  setBonusVamp(value) {
    this.bonusVamp = value;
  }

  setBonusCRate(value) {
    this.bonusCRate = value;
  }

  setBonusCDmg(value) {
    this.bonusCDmg = value;
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
