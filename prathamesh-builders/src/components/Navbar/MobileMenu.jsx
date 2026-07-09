import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const MobileMenu = ({ isOpen, setIsOpen }) => {

    return (

        <div className={`mobile-menu ${isOpen ? "active" : ""}`}>

            <div className="mobile-header">

                <h2>Menu</h2>

                <FaTimes
                    className="close-icon"
                    onClick={() => setIsOpen(false)}
                />

            </div>

            <nav>

                <NavLink to="/" onClick={() => setIsOpen(false)}>
                    Home
                </NavLink>

                <NavLink to="/about" onClick={() => setIsOpen(false)}>
                    About
                </NavLink>

                <NavLink to="/legacy" onClick={() => setIsOpen(false)}>
                    Legacy
                </NavLink>

                <NavLink to="/projects" onClick={() => setIsOpen(false)}>
                    Projects
                </NavLink>

                <NavLink to="/gallery" onClick={() => setIsOpen(false)}>
                    Gallery
                </NavLink>

                <NavLink to="/services" onClick={() => setIsOpen(false)}>
                    Services
                </NavLink>

                <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                    Contact
                </NavLink>

            </nav>

            <button className="consult-btn">
                Book Site Visit
            </button>

        </div>

    );
};

export default MobileMenu;