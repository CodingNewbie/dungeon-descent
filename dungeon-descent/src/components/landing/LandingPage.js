import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/landing/LandingPage.css';
import Nav from './Nav';
import Footer from './Footer';
import Hero from './Hero';
import About from './About';
import Community from './Community';
import GameInfo from './GameInfo';

function LandingPage() {
    return (
        <div className="LandingPage">
            <Nav />
            <Hero />
            <About />

            <GameInfo />

            <Community />
            <Footer />
        </div>
    );
}

export default LandingPage;
