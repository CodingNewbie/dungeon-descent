import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../../styles/landing/LandingPage.css';
import Header from './Header';
import About from './About';
import Community from './Community';


function LandingPage() {
    return (
        <div className="LandingPage">
            <Header />
            <About />
            <Community />


        </div>
    );
}

export default LandingPage;