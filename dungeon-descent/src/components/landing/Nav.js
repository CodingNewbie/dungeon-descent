import React, { useState } from 'react';
import '../../styles/landing/Nav.css';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

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
    font-family: 'Tiny5';
    border: 4px dashed #9a7063;
    padding: 20px;
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
        color: #9a7063;
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
`};

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