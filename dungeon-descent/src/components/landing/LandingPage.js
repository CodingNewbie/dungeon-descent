import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/landing/LandingPage.css';
import Nav from './Nav';

function LandingPage() {
    return (
        <div className="LandingPage">
            <Nav />
            <header className="LandingPage-header">
                <h1>Descent</h1>
                <p>Your adventure awaits...</p>
                <Link to="/game">
                    <button>Start Game</button>
                </Link>
            </header>


            <div className='LandingPage-about'>
                <h2>About</h2>
                <p>Embark on an epic journey in Descent, a thrilling 2D roguelite dungeon crawler. Begin your adventure at the summit, making your way down through treacherous depths filled with unknown challenges and fearsome foes. Each descent brings new surprises and rewards, pushing your skills and strategy to the limit. Can you survive the descent and uncover the secrets that lie beneath? Prepare yourself for a relentless adventure where every decision matters and every victory brings you closer to mastering the depths.</p>
            </div>
            <div className='LandingPage-community'>
                <h2>Join our community!</h2>
                <p>Dive into discussions of strategy, skill, and lively banter within our vibrant Descent community! Connect with fellow adventurers, share tactics, and explore the depths together. Click the links below to join the conversation and become part of our growing community!</p>
                {/* Import font-awesome and use icons here */}
                <div className='community-links'>
                    {/* links will go here */}
                </div>
            </div>


        </div>
    );
}

export default LandingPage;