import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../../styles/landing/LandingPage.css';
import Hero from './Hero';
import About from './About';
import Community from './Community';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


function LandingPage() {
    return (
        <div className="LandingPage">
            <Parallax pages={4}>

                <ParallaxLayer>
                    <Hero />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.5}>
                    <About />

                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={1}>
                    <Community />

                </ParallaxLayer>
            </Parallax>



        </div>
    );
}

export default LandingPage;