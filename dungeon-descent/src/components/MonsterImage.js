import React, { useEffect, useState } from 'react';
import '../styles/MonsterImage.css';

function MonsterImage({ type, status, animation, isHit }) {
  const imageSrc = status === 'dead'
    ? `./images/monsters/${type}-death.gif`
    : animation === 'attack'
    ? `./images/monsters/${type}-attack.gif`
    : `./images/monsters/${type}-idle.gif`;

  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (isHit) {
      setShake(true);
      const timer = setTimeout(() => setShake(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isHit]);

  return (
    <div className={`MonsterImage ${shake ? 'shake' : ''}`}>
      <img src={imageSrc} alt={type} />
    </div>
  );
}

export default MonsterImage;
