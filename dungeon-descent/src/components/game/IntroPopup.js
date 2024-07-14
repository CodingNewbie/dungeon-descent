import React, { useEffect } from 'react';
import '../../styles/game/IntroPopup.css';

const IntroPopup = ({ onConfirm }) => {
  useEffect(() => {
    const handleUserInteraction = () => {
      onConfirm();
    };

    document.addEventListener('click', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, [onConfirm]);

  return (
    <div className="IntroPopup">
      <div className="IntroPopup-content">
        <span className="fade-text">Tap to explore the dungeon</span>
      </div>
    </div>
  );
};

export default IntroPopup;
