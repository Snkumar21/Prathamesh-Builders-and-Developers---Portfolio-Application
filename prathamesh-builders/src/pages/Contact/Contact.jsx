import "./Contact.css";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
} from "react-icons/fa";

const Contact = () => {
    return (
        <>
            {/* ========================= */}
            {/* PAGE HERO */}
            {/* ========================= */}
            <section className="contact-hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>
                        We'd love to hear from you. Contact our team for project details,
                        site visits or any other enquiries.
                    </p>
                </div>
            </section>

            {/* ========================= */}
            {/* CONTACT */}
            {/* ========================= */}
            <section className="contact-page">
                <div className="container contact-wrapper">
                    {/* LEFT */}
                    <div className="contact-info">
                        <span className="section-tag">
                            Get In Touch
                        </span>
                        <h2>
                            Let's Build Your Dream Together
                        </h2>
                        <p>
                            Our team is always ready to assist you with property details,
                            pricing, bookings and project information.
                        </p>

                        <div className="info-box">
                            <FaMapMarkerAlt />
                            <div>
                                <h4>Office Address</h4>
                                <p>Pune, Maharashtra, India</p>
                            </div>
                        </div>

                        <div className="info-box">
                            <FaPhoneAlt />
                            <div>
                                <h4>Phone</h4>
                                <p>+91 84216 75782</p>
                            </div>
                        </div>

                        <div className="info-box">
                            <FaEnvelope />
                            <div>
                                <h4>Email</h4>
                                <p>info@prathameshbuilders.com</p>
                            </div>
                        </div>

                        <div className="info-box">
                            <FaClock />
                            <div>
                                <h4>Working Hours</h4>
                                <p>Mon - Sat : 10:00 AM - 7:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="contact-form-card">
                        <h2>Send Us a Message</h2>
                        <form>
                            <div className="form-row">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="form-row">
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                />
                            </div>
                            <textarea
                                rows="6"
                                placeholder="Write your message..."
                            ></textarea>
                            <button
                                type="submit"
                                className="gold-btn"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* ========================= */}
            {/* GOOGLE MAP */}
            {/* ========================= */}
            <section className="map-section">
                <div className="container">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps?q=Pune&output=embed"
                        width="100%"
                        height="450"
                        loading="lazy"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </>
    );
};

export default Contact;