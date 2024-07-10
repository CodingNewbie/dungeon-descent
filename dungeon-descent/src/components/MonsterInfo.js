import React from 'react';

function MonsterInfo({ name, level }) {
  return (
    <div className="MonsterInfo">
      <h2>{name} Lv. {level}</h2>
    </div>
  );
}

export default MonsterInfo;
