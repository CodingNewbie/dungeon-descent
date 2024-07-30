import React from "react";
import { Link } from "react-router-dom";
import '../../styles/landing/LandingPage.css';
import SocialIcons from "./SocialIcons";

function Hero() {
    return (
        <div className="hero-body">
            <div className="hero-background">
                <h1>Your Descent awaits...</h1>
                <Link to="/game">
                    <button>Start Game</button>
                </Link>
            </div>
        </div>
    );
}

export default Hero;
