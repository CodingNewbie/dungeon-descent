import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-image: url('path_to_your_image.jpg'); /* Replace with your image path */
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`;

const NavContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 1rem;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    transition: color 0.3s ease;

    &:hover {
        color: #fff;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
        border-radius: 25px;
        transition: transform 0.3s ease;
        z-index: -1;
        transform: scaleX(0); /* Initially hidden */
        transform-origin: right;
    }

    &:hover::before {
        transform: scaleX(1); /* Display on hover */
    }
`;

function Nav() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const nav = document.querySelector('.nav');
            nav.style.backgroundPositionY = `${scrollTop * 0.5}px`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <NavContainer className="nav">
            <NavContent>
                <NavLinks>
                    <NavLink to="/game-info">Game info ▼</NavLink>
                    <NavLink to="/token">Token</NavLink>
                </NavLinks>
                <div className="nav-buttons">
                    {/* Additional buttons or links can be added here */}
                </div>
            </NavContent>
        </NavContainer>
    );
}

export default Nav;
