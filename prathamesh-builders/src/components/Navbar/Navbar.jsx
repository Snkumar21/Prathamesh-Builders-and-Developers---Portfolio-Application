import "./Navbar.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logos/logos.png";
import MobileMenu from "./MobileMenu";
import TopHeader from "./TopHeader";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
    <>
        <TopHeader />

        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="container navbar-container">

                <div className="logo">
                    <NavLink to="/">
                        <img
                            src={logo}
                            alt="Prathamesh Builders & Developers"
                        />
                    </NavLink>
                </div>

                <nav className="desktop-menu">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/legacy">Legacy</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/gallery">Gallery</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>

                <div className="nav-right">
                    <button className="consult-btn">
                        Book Site Visit
                    </button>

                    <FaBars
                        className="hamburger"
                        onClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
        </header>

        <MobileMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
    </>
    );
};

export default Navbar;