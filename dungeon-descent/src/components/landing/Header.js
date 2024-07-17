import React from "react";
import { Link } from "react-router-dom";
import '../../styles/landing/LandingPage.css';



function Header() {
    return (
        <div>
            <header className="LandingPage-header">
                <h1>Your Descent awaits...</h1>
                <Link to="/game">
                    <button>Start Game</button>
                </Link>
            </header>
        </div>
    )
}

export default Header;