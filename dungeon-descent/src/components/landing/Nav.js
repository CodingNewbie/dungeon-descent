import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../../styles/landing/Nav.css';

function Nav() {
    return (
        <nav className='nav'>
            <div className='nav-header'>
                <h1><RouterLink to='/' className='nav-title'>Dungeon Descent</RouterLink></h1>
            </div>

            <div className='nav-links'>
                <ScrollLink to='about' smooth={true} duration={500} className='nav-link'>About</ScrollLink>
                <ScrollLink to='info' smooth={true} duration={500} className='nav-link'>Game Info</ScrollLink>
                <ScrollLink to='community' smooth={true} duration={500} className='nav-link'>Community</ScrollLink>
            </div>
        </nav>
    );
}

export default Nav;
