import "./Navbar.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const TopHeader = () => {
    return (
        <div className="top-header">
            <div className="container top-header-container">

                <div className="top-left">

                    <a href="tel:+919999999999">
                        <FaPhoneAlt />
                        <span>+91 99999 99999</span>
                    </a>

                    <a href="mailto:info@prathameshbuilders.com">
                        <FaEnvelope />
                        <span>info@prathameshbuilders.com</span>
                    </a>

                </div>

                <div className="top-right">

                    <FaMapMarkerAlt />

                    <span>Pune, Maharashtra</span>

                </div>

            </div>
        </div>
    );
};

export default TopHeader;