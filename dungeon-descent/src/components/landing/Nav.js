import React, { useState } from 'react';
import '../../styles/landing/Nav.css';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav">
            <div className="nav-content">
                <div className="dropdown">
                    <button className="dropbtn" onClick={toggleDropdown}>
                        Menu
                    </button>
                    {isOpen && (
                        <div className="dropdown-content">
                            <a href="#home">Home</a>
                            <a href="#tokens">Tokens</a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Nav;