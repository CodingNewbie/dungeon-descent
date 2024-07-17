import React from "react";
import { Link } from "react-router-dom";
import '../../styles/landing/LandingPage.css';

import { Parallax, ParallaxLayer } from "@react-spring/parallax";


function Hero() {
    return (
        <div>
            <h1>Your Descent awaits...</h1>
            <Link to="/game">
                <button>Start Game</button>
            </Link>

        </div>
    )
}

export default Hero;