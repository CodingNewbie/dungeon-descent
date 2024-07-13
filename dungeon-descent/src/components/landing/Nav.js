import React from "react";
import { Link } from "react-router-dom";
import Game from "./game/Game";
import LandingPage from "./landing/LandingPage";

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/game">Game</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;