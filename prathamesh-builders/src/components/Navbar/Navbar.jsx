import "./Navbar.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logos/logos.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="container navbar-container">
                {/* Logo */}
                <NavLink to="/" className="logo" onClick={closeMenu}>
                    <img src={logo} alt="Prathamesh Builders & Developers" />
                </NavLink>

                {/* Desktop Menu */}
                <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <NavLink to="/" onClick={closeMenu}>
                        Home
                    </NavLink>
                    <NavLink to="/about" onClick={closeMenu}>
                        About
                    </NavLink>
                    <NavLink to="/projects" onClick={closeMenu}>
                        Projects
                    </NavLink>
                    <NavLink to="/services" onClick={closeMenu}>
                        Services
                    </NavLink>
                    <NavLink to="/gallery" onClick={closeMenu}>
                        Gallery
                    </NavLink>
                    <NavLink to="/contact" onClick={closeMenu}>
                        Contact
                    </NavLink>
                </nav>

                {/* Right Side */}
                <div className="nav-right">
                    <button className="consult-btn">
                        Book Site Visit
                    </button>
                    <div
                        className="menu-icon"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;