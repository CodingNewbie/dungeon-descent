import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/landing/LandingPage.css';
import Nav from './Nav';
import Footer from './Footer';
import Hero from './Hero';
import About from './About';
import Community from './Community';
import GameInfo from './GameInfo';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import background from '../../assets/background.png';
import mainbackground from '../../assets/mainbackground.png';
import foreground from '../../assets/foreground.png';
import midlayer from '../../assets/midlayer.png';

function LandingPage() {
    return (
        <div className="LandingPage">
            <Nav />
            <Parallax pages={4}>
                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    style={{
                        backgroundImage: `url(${foreground})`,
                        backgroundSize: 'cover',
                    }}
                />

                <ParallaxLayer offset={0.3} speed={0.6} className='hero-about'>
                    <Hero />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1}>
                    <About />
                </ParallaxLayer>

                <ParallaxLayer offset={1.9} speed={1}>
                    <GameInfo />
                </ParallaxLayer>

                <ParallaxLayer offset={2.2} speed={1.2}>
                    <Community />
                </ParallaxLayer>


            </Parallax>
            <Footer />
        </div>
    );
}

export default LandingPage;
