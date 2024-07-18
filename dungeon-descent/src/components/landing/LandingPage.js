import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../../styles/landing/LandingPage.css';
import Hero from './Hero';
import About from './About';
import Community from './Community';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import background from '../../assets/background.png';
import mainbackground from '../../assets/mainbackground.png';
import foreground from '../../assets/foreground.png';
import midlayer from '../../assets/midlayer.png';



function LandingPage() {
    return (
        <div className="LandingPage">
            <Parallax pages={3}>
                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    style={{
                        backgroundImage: `url(${foreground})`,
                        backgroundSize: 'cover'
                    }}
                />


                <ParallaxLayer offset={0.3} speed={6} className='hero-about'>
                    <Hero />
                </ParallaxLayer>


                <ParallaxLayer offset={1} speed={1}>
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