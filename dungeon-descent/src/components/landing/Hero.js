import React from "react";
import { Link } from "react-router-dom";
import '../../styles/landing/LandingPage.css';
import '../../styles/landing/Hero.css';

import { Parallax, ParallaxLayer } from "@react-spring/parallax";


function Hero() {
    return (
        <div className="hero-body">
            <h1>Your Descent awaits...</h1>
            <Link to="/game">
                <button>Start Game</button>
            </Link>

        </div>
    )
}

export default Hero;