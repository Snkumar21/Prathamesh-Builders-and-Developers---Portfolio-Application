import "./About.css";
import { Link } from "react-router-dom";
import {
    FaBuilding,
    FaBullseye,
    FaEye,
    FaAward,
    FaUsers,
    FaHome,
} from "react-icons/fa";
import AboutImg from "../../assets/images/about.jpeg";

const About = () => {
    return (
        <>
            {/* ========================= */}
            {/* HERO */}
            {/* ========================= */}

            <section className="about-hero">
                <div className="container">
                    <h1>About Us</h1>
                    <p>
                        Building trust, creating landmarks and delivering quality homes for
                        generations.
                    </p>
                </div>
            </section>

            {/* ========================= */}
            {/* ABOUT */}
            {/* ========================= */}

            <section className="about-company">
                <div className="container about-grid">
                    <div className="about-image">
                        <img src={AboutImg} alt="About" />
                    </div>

                    <div className="about-content">
                        <span className="section-tag">
                            About Prathamesh Builders
                        </span>
                        <h2>
                            Building Excellence Since Day One
                        </h2>
                        <p>
                            Prathamesh Builders & Developers is committed to delivering
                            premium residential and commercial projects with modern
                            architecture, superior construction quality and complete customer
                            satisfaction.
                        </p>
                        <p>
                            Our focus is to create spaces where families can live happily,
                            businesses can grow and investments become valuable assets.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========================= */}
            {/* MISSION & VISION */}
            {/* ========================= */}

            <section className="mission">
                <div className="container mission-grid">
                    <div className="mission-card">
                        <FaBullseye />
                        <h3>Our Mission</h3>
                        <p>
                            To provide innovative, sustainable and premium quality projects
                            while maintaining trust and transparency.
                        </p>
                    </div>
                    <div className="mission-card">
                        <FaEye />
                        <h3>Our Vision</h3>
                        <p>
                            To become one of India's most trusted real estate companies
                            through quality and customer satisfaction.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========================= */}
            {/* WHY CHOOSE US */}
            {/* ========================= */}

            <section className="why-us">
                <div className="container">
                    <div className="section-heading">
                        <span>Why Choose Us</span>
                        <h2>Why People Trust Prathamesh Builders</h2>
                    </div>
                    <div className="why-grid">
                        <div className="why-card">
                            <FaAward />
                            <h3>Premium Quality</h3>
                            <p>High-quality construction with premium materials.</p>
                        </div>
                        <div className="why-card">
                            <FaUsers />
                            <h3>Customer First</h3>
                            <p>Customer satisfaction is our highest priority.</p>
                        </div>
                        <div className="why-card">
                            <FaBuilding />
                            <h3>Modern Design</h3>
                            <p>Contemporary architecture with elegant spaces.</p>
                        </div>
                        <div className="why-card">
                            <FaHome />
                            <h3>Trusted Homes</h3>
                            <p>Creating homes filled with comfort and happiness.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================= */}
            {/* STATS */}
            {/* ========================= */}

            <section className="about-stats">
                <div className="container stats-grid">
                    <div>
                        <h2>15+</h2>
                        <p>Years Experience</p>
                    </div>
                    <div>
                        <h2>500+</h2>
                        <p>Happy Families</p>
                    </div>
                    <div>
                        <h2>25+</h2>
                        <p>Completed Projects</p>
                    </div>
                    <div>
                        <h2>100%</h2>
                        <p>Customer Satisfaction</p>
                    </div>
                </div>
            </section>

            {/* ========================= */}
            {/* CTA */}
            {/* ========================= */}

            <section className="about-cta">
                <div className="container">
                    <h2>Let's Build Your Dream Together</h2>
                    <p>
                        Contact our experts today and discover your perfect property.
                    </p>
                    <Link to="/contact" className="gold-btn">
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    );
};

export default About;