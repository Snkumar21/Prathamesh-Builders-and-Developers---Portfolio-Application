import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../../assets/logos/circle logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                {/* Company */}
                <div className="footer-about">
                    <img
                        src={Logo}
                        alt="Prathamesh Builders & Developers"
                        className="footer-logo"
                    />
                    <p>
                        Prathamesh Builders & Developers is committed to creating
                        exceptional residential and commercial spaces with
                        quality, trust and innovation.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Services */}
                <div className="footer-services">
                    <h3>Services</h3>
                    <ul>
                        <li>Residential Projects</li>
                        <li>Commercial Projects</li>
                        <li>Construction</li>
                        <li>Architecture</li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-contact">
                    <h3>Contact</h3>
                    <p>📍 Pune, Maharashtra</p>
                    <p>📞 +91 84216 75782</p>
                    <p>✉ info@prathameshbuilders.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Prathamesh Builders & Developers.
                    All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;