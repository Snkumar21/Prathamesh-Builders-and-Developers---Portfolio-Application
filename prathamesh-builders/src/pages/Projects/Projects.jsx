import "./Projects.css";
import { Link } from "react-router-dom";
import {
    FaMapMarkerAlt,
    FaBed,
    FaBath,
    FaRulerCombined,
    FaArrowRight
} from "react-icons/fa";

import Project1 from "../../assets/images/project1.jpeg";
import Project2 from "../../assets/images/project2.jpeg";
import Project3 from "../../assets/images/project3.jpeg";

const Projects = () => {
    return (
        <>
            {/* ========================= */}
            {/* HERO */}
            {/* ========================= */}
            <section className="projects-hero">
                <div className="container">
                    <h1>Our Projects</h1>
                    <p>
                        Discover premium residential and commercial developments
                        designed with modern architecture, world-class amenities
                        and superior construction quality.
                    </p>
                </div>
            </section>

            {/* ========================= */}
            {/* FEATURED PROJECTS */}
            {/* ========================= */}
            <section className="featured-projects">
                <div className="container">
                    <div className="section-heading">
                        <span>Featured Projects</span>
                        <h2>Our Signature Developments</h2>
                    </div>
                    <div className="project-grid">
                        {/* Card 1 */}
                        <div className="project-card">
                            <div className="project-image">
                                <img src={Project1} alt="Project" />
                                <span className="project-status">
                                    Ongoing
                                </span>
                            </div>
                            <div className="project-content">
                                <h3>Prathamesh Heights</h3>
                                <p>
                                    Premium 2 & 3 BHK apartments with luxury
                                    lifestyle amenities.
                                </p>
                                <div className="project-info">
                                    <span>
                                        <FaMapMarkerAlt />
                                        Pune
                                    </span>
                                    <span>
                                        <FaBed />
                                        2 & 3 BHK
                                    </span>
                                </div>
                                <div className="project-info">
                                    <span>
                                        <FaBath />
                                        2 Bathrooms
                                    </span>
                                    <span>
                                        <FaRulerCombined />
                                        850 - 1250 Sq.ft
                                    </span>
                                </div>
                                <Link
                                    to="/contact"
                                    className="gold-btn"
                                >
                                    Enquire Now
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="project-card">
                            <div className="project-image">
                                <img src={Project2} alt="Project" />
                                <span className="project-status completed">
                                    Completed
                                </span>
                            </div>
                            <div className="project-content">
                                <h3>Prathamesh Residency</h3>
                                <p>
                                    Elegant homes crafted for comfort,
                                    convenience and premium living.
                                </p>
                                <div className="project-info">
                                    <span>
                                        <FaMapMarkerAlt />
                                        Pimpri
                                    </span>
                                    <span>
                                        <FaBed />
                                        2 BHK
                                    </span>
                                </div>
                                <div className="project-info">
                                    <span>
                                        <FaBath />
                                        2 Bathrooms
                                    </span>
                                    <span>
                                        <FaRulerCombined />
                                        760 Sq.ft
                                    </span>
                                </div>
                                <Link
                                    to="/contact"
                                    className="gold-btn"
                                >
                                    View Details
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="project-card">
                            <div className="project-image">
                                <img src={Project3} alt="Project" />
                                <span className="project-status">
                                    Upcoming
                                </span>
                            </div>
                            <div className="project-content">
                                <h3>Prathamesh Avenue</h3>
                                <p>
                                    Upcoming luxury residences designed
                                    for the next generation.
                                </p>
                                <div className="project-info">
                                    <span>
                                        <FaMapMarkerAlt />
                                        Hinjawadi
                                    </span>
                                    <span>
                                        <FaBed />
                                        3 BHK
                                    </span>
                                </div>
                                <div className="project-info">
                                    <span>
                                        <FaBath />
                                        3 Bathrooms
                                    </span>
                                    <span>
                                        <FaRulerCombined />
                                        1450 Sq.ft
                                    </span>
                                </div>
                                <Link
                                    to="/contact"
                                    className="gold-btn"
                                >
                                    Book Site Visit
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================= */}
            {/* PROJECT AMENITIES */}
            {/* ========================= */}
            <section className="project-amenities">
                <div className="container">
                    <div className="section-heading">
                        <span>Premium Amenities</span>
                        <h2>Designed For Comfortable Living</h2>
                    </div>
                    <div className="amenities-grid">
                        <div className="amenity-card">
                            🏊
                            <h3>Swimming Pool</h3>
                            <p>Luxury swimming pool with modern facilities.</p>
                        </div>
                        <div className="amenity-card">
                            🌳
                            <h3>Landscaped Garden</h3>
                            <p>Beautiful green spaces for relaxation.</p>
                        </div>
                        <div className="amenity-card">
                            🏋️
                            <h3>Gymnasium</h3>
                            <p>Fully equipped fitness centre.</p>
                        </div>
                        <div className="amenity-card">
                            🚗
                            <h3>Parking</h3>
                            <p>Ample covered parking for residents.</p>
                        </div>
                        <div className="amenity-card">
                            🛡️
                            <h3>24×7 Security</h3>
                            <p>Round-the-clock security surveillance.</p>
                        </div>
                        <div className="amenity-card">
                            👧
                            <h3>Kids Play Area</h3>
                            <p>Dedicated play zone for children.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================= */}
            {/* WHY INVEST */}
            {/* ========================= */}
            <section className="invest-section">
                <div className="container">
                    <div className="section-heading">
                        <span>Why Invest</span>
                        <h2>Why Choose Our Projects?</h2>
                    </div>
                    <div className="invest-grid">
                        <div className="invest-card">
                            <h3>Prime Location</h3>
                            <p>
                                Strategically located near schools,
                                hospitals, IT parks and shopping centres.
                            </p>
                        </div>
                        <div className="invest-card">
                            <h3>Modern Architecture</h3>
                            <p>
                                Contemporary designs with premium quality
                                construction and elegant interiors.
                            </p>
                        </div>
                        <div className="invest-card">
                            <h3>High ROI</h3>
                            <p>
                                Excellent investment opportunity with
                                increasing property appreciation.
                            </p>
                        </div>
                        <div className="invest-card">
                            <h3>Trusted Builder</h3>
                            <p>
                                Years of experience delivering quality
                                residential and commercial projects.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================= */}
            {/* PROJECT TIMELINE */}
            {/* ========================= */}
            <section className="project-timeline">
                <div className="container">
                    <div className="section-heading">
                        <span>Development Journey</span>
                        <h2>Project Timeline</h2>
                    </div>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-circle">1</div>
                            <div className="timeline-content">
                                <h3>Planning & Design</h3>
                                <p>Careful planning with innovative architectural designs.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-circle">2</div>
                            <div className="timeline-content">
                                <h3>Construction</h3>
                                <p>High-quality construction using premium materials.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-circle">3</div>
                            <div className="timeline-content">
                                <h3>Quality Inspection</h3>
                                <p>Every project undergoes strict quality checks before delivery.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-circle">4</div>
                            <div className="timeline-content">
                                <h3>Project Handover</h3>
                                <p>Timely possession with complete customer satisfaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================= */}
            {/* CTA */}
            {/* ========================= */}
            <section className="projects-cta">
                <div className="container">
                    <h2>Ready To Find Your Dream Property?</h2>
                    <p>
                        Schedule a site visit today and explore our premium residential
                        and commercial projects.
                    </p>
                    <Link to="/contact" className="gold-btn">
                        Book Site Visit
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Projects;