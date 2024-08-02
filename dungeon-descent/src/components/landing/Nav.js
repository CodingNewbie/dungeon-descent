import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import '../../styles/landing/Nav.css';

function Nav() {
    return (
        <nav className='nav'>
            <div className='container'>
                <div className='nav-header'>
                    <h1><RouterLink to='/' className='nav-title'>Dungeon Descent</RouterLink></h1>
                </div>

                <input type="checkbox" id="menu-toggle" />
                <label className="hamburger" htmlFor="menu-toggle">
                    <div></div>
                    <div></div>
                    <div></div>
                </label>

                <div className='nav-links'>
                    <a href='#about' className='nav-link'>About</a>
                    <a href='#info' className='nav-link'>Game Info</a>
                    <a href='#community' className='nav-link'>Community</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
