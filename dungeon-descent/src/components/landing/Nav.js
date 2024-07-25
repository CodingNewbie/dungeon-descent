import React from 'react';
import '../../styles/landing/Nav.css';



const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav-content">
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#tokens">Tokens</a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;