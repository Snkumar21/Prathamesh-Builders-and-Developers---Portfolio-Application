import "./Services.css";
import { Link } from "react-router-dom";
import {
    FaBuilding,
    FaHome,
    FaDraftingCompass,
    FaTools,
    FaCity,
    FaHammer
} from "react-icons/fa";

const Services = () => {
    return (
        <>

            {/* ========================= */}
            {/* HERO */}
            {/* ========================= */}

            <section className="services-hero">

                <div className="container">

                    <h1>Our Services</h1>

                    <p>
                        We provide premium construction and real estate
                        solutions with quality, trust and innovation.
                    </p>

                </div>

            </section>

            {/* ========================= */}
            {/* SERVICES */}
            {/* ========================= */}

            <section className="services-section">

                <div className="container">

                    <div className="section-heading">

                        <span>What We Offer</span>

                        <h2>Complete Real Estate Solutions</h2>

                    </div>

                    <div className="services-grid">

                        <div className="service-card">

                            <FaHome />

                            <h3>Residential Projects</h3>

                            <p>
                                Premium apartments and villas designed for
                                modern families with world-class amenities.
                            </p>

                            <Link
                                to="/contact"
                                className="gold-btn"
                            >
                                Enquire Now
                            </Link>

                        </div>

                        <div className="service-card">

                            <FaBuilding />

                            <h3>Commercial Projects</h3>

                            <p>
                                Modern office spaces and commercial properties
                                for growing businesses.
                            </p>

                            <Link
                                to="/contact"
                                className="gold-btn"
                            >
                                Enquire Now
                            </Link>

                        </div>

                        <div className="service-card">

                            <FaDraftingCompass />

                            <h3>Architecture</h3>

                            <p>
                                Elegant architectural planning with innovative
                                and sustainable designs.
                            </p>

                            <Link
                                to="/contact"
                                className="gold-btn"
                            >
                                Enquire Now
                            </Link>

                        </div>

                        <div className="service-card">

                            <FaHammer />

                            <h3>Construction</h3>

                            <p>
                                High-quality construction with premium
                                materials and expert workmanship.
                            </p>

                            <Link
                                to="/contact"
                                className="gold-btn"
                            >
                                Enquire Now
                            </Link>

                        </div>

                        <div className="service-card">

                            <FaTools />

                            <h3>Renovation</h3>

                            <p>
                                Renovation and redevelopment services that
                                transform existing spaces beautifully.
                            </p>

                            <Link
                                to="/contact"
                                className="gold-btn"
                            >
                                Enquire Now
                            </Link>

                        </div>

                        <div className="service-card">

                            <FaCity />

                            <h3>Township Development</h3>

                            <p>
                                Integrated townships with residential,
                                commercial and lifestyle amenities.
                            </p>

                            <Link
                                to="/contact"
                                className="gold-btn"
                            >
                                Enquire Now
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </>
    );
};

export default Services;