import React from "react";
import { Link } from "react-router-dom";
import '../../styles/landing/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Navigation</h3>
                    <Link to="/game-info" className="footer-link">Game Info</Link>
                    <Link to="/token" className="footer-link">Token</Link>
                </div>
                <div className="footer-section">
                    <h3>Connect</h3>
                    <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">Discord</a>
                    <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className="footer-section">
                    <h3>Resources</h3>
                    <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">FAQ</a>
                    <Link to="/contact" className="footer-link">Contact Us</Link>
                </div>
            </div>
            <div className="copyright">
                © {new Date().getFullYear()} DD. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;