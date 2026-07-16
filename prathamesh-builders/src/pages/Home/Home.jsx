import "./Home.css";
import Logo from "../../assets/logos/logo.png";
import HeroImg from "../../assets/images/hero.jpeg";
import AboutImg from "../../assets/images/about.jpeg";
import {
    FaArrowRight,
    FaPhoneAlt,
    FaBuilding,
    FaAward,
    FaHome,
} from "react-icons/fa";

const Home = () => {
    return (
        <>
            {/* ========================= */}
            {/* HERO SECTION */}
            {/* ========================= */}

            <section
                className="hero"
                style={{
                backgroundImage: `url(${HeroImg})`,
                }}
            >
                <div className="hero-overlay"></div>

                <div className="container hero-content">

                    <span className="hero-tag">
                        PRATHAMESH BUILDERS & DEVELOPERS
                    </span>

                    <h1>
                        Building Dreams.
                        <br />
                        Creating <span> Modern Living.</span>
                    </h1>

                    <p>
                        Experience premium residential and commercial spaces
                        designed with innovation, quality craftsmanship and
                        timeless architecture.
                    </p>

                    <div className="hero-buttons">

                        <button className="gold-btn">
                            Explore Projects
                            <FaArrowRight />
                        </button>

                        <button className="white-btn">
                            <FaPhoneAlt />
                            Contact Us
                        </button>

                    </div>

                </div>
            </section>

            {/* ========================= */}
            {/* ABOUT SECTION */}
            {/* ========================= */}

            <section className="about">

                <div className="container about-container">

                    <div className="about-image">

                        <img src={AboutImg} alt="About" />

                        <div className="experience-card">
                            <h2>15+</h2>
                            <p>Years Of Excellence</p>
                        </div>

                    </div>

                    <div className="about-content">

                        <span className="section-tag">
                            ABOUT US
                        </span>

                        <h2>
                            Building Trust,
                            <br />
                            Creating Legacy.
                        </h2>

                        <p>
                            Prathamesh Builders & Developers is committed to
                            delivering thoughtfully designed residential and
                            commercial projects with unmatched quality,
                            transparency and customer satisfaction.
                        </p>

                        <p>
                            Every project reflects our dedication to modern
                            architecture, premium construction and sustainable
                            living. We don't just build structures—we build
                            lifestyles that families cherish for generations.
                        </p>

                        <div className="about-features">

                            <div className="feature-card">
                                <FaBuilding />
                                <div>
                                    <h4>Premium Construction</h4>
                                    <p>Quality materials and modern engineering.</p>
                                </div>
                            </div>

                            <div className="feature-card">
                                <FaAward />
                                <div>
                                    <h4>Trusted Brand</h4>
                                    <p>Years of excellence and customer trust.</p>
                                </div>
                            </div>

                            <div className="feature-card">
                                <FaHome />
                                <div>
                                    <h4>Luxury Living</h4>
                                    <p>Comfortable homes with modern amenities.</p>
                                </div>
                            </div>

                        </div>

                        <button className="gold-btn">
                            Learn More
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </section>

            {/* ========================================= */}
            {/* LEGACY SECTION */}
            {/* ========================================= */}

            <section className="legacy">
                <div className="container">
                    <div className="section-heading">
                        <span>OUR LEGACY</span>
                        <h2>
                            A Legacy Built On Trust,
                            <br />
                            Quality & Excellence
                        </h2>

                        <p>
                            For years, Prathamesh Builders & Developers has been shaping
                            skylines and creating communities where families thrive. Every
                            milestone reflects our passion for innovation and customer
                            satisfaction.
                        </p>
                    </div>

                    <div className="legacy-grid">
                        <div className="legacy-card">

                            <div className="legacy-year">
                                2010
                            </div>

                            <h3>Company Established</h3>

                            <p>
                                Started our journey with a vision to deliver quality homes
                                and transparent real estate services.
                            </p>
                        </div>

                        <div className="legacy-card">
                            <div className="legacy-year">
                                2015
                            </div>

                            <h3>100+ Happy Families</h3>

                            <p>
                                Successfully completed multiple residential developments
                                earning trust across the city.
                            </p>
                        </div>

                        <div className="legacy-card">
                            <div className="legacy-year">
                                2020
                            </div>

                            <h3>Commercial Expansion</h3>

                            <p>
                                Expanded into premium commercial projects with world-class
                                infrastructure and modern amenities.
                            </p>
                        </div>

                        <div className="legacy-card">
                            <div className="legacy-year">
                                Today
                            </div>

                            <h3>Building The Future</h3>

                            <p>
                                Continuing our mission to create sustainable landmarks that
                                redefine luxury living.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================= */}
            {/* FEATURED PROJECTS */}
            {/* ========================================= */}

            <section className="projects">
                <div className="container">
                    <div className="section-heading">
                        <span>OUR PROJECTS</span>

                        <h2>
                            Featured Developments
                        </h2>

                        <p>
                            Discover our premium residential and commercial developments
                            crafted with innovation, elegance and exceptional quality.
                        </p>
                    </div>

                    <div className="project-grid">
                        {/* Project 1 */}
                        <div className="project-card">
                            <div className="project-image">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                                    alt="Project"
                                />
                                <div className="project-status">
                                    Ongoing
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>Prathamesh Heights</h3>
                                <p>
                                    Premium 2 & 3 BHK residences designed for modern family
                                    living with world-class amenities.
                                </p>
                                <div className="project-info">
                                    <span>📍 Pune</span>
                                    <span>2 & 3 BHK</span>
                                </div>
                                <button className="gold-btn">
                                    View Project
                                </button>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="project-card">
                            <div className="project-image">
                                <img
                                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
                                    alt="Project"
                                />
                                <div className="project-status completed">
                                    Completed
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>Prathamesh Residency</h3>
                                <p>
                                    Elegant apartments offering luxury lifestyle with spacious
                                    interiors and green surroundings.
                                </p>
                                <div className="project-info">
                                    <span>📍 Pune</span>
                                    <span>Luxury Homes</span>
                                </div>
                                <button className="gold-btn">
                                    View Project
                                </button>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="project-card">
                            <div className="project-image">
                                <img
                                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
                                    alt="Project"
                                />
                                <div className="project-status">
                                    Coming Soon
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>Prathamesh Elite</h3>
                                <p>
                                    Upcoming luxury residential project with smart homes,
                                    clubhouse, landscape gardens and premium lifestyle.
                                </p>
                                <div className="project-info">
                                    <span>📍 Pune</span>
                                    <span>Luxury Living</span>
                                </div>
                                <button className="gold-btn">
                                    View Project
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="project-btn">
                        <button className="outline-btn">
                            Explore All Projects
                        </button>
                    </div>
                </div>
            </section>

            {/* ========================================= */}
            {/* SERVICES SECTION */}
            {/* ========================================= */}
            
            <section className="services">
                <div className="container">
                    <div className="section-heading">
                        <span>OUR SERVICES</span>
                        <h2>Complete Real Estate Solutions</h2>
                        <p>
                            We provide end-to-end real estate services with
                            exceptional quality and customer satisfaction.
                        </p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                🏠
                            </div>
                            <h3>Residential Projects</h3>
                            <p>
                                Premium apartments and luxury homes designed
                                for modern families with world-class amenities.
                            </p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                🏢
                            </div>
                            <h3>Commercial Spaces</h3>
                            <p>
                                Office spaces and commercial complexes built
                                with modern architecture and functionality.
                            </p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                📐
                            </div>
                            <h3>Architecture</h3>
                            <p>
                                Creative planning and innovative architectural
                                solutions for every development.
                            </p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                🛠️
                            </div>
                            <h3>Construction</h3>
                            <p>
                                High-quality construction using premium
                                materials and advanced engineering.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================= */}
            {/* GALLERY */}
            {/* ========================================= */}

            <section className="gallery">
                <div className="container">
                    <div className="section-heading">
                        <span>OUR GALLERY</span>
                        <h2>Explore Our Developments</h2>
                        <p>
                            A glimpse of our completed and ongoing premium
                            residential & commercial projects.
                        </p>
                    </div>
                    <div className="gallery-grid">
                        <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d" alt="" />
                        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" alt="" />
                        <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6" alt="" />
                        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750" alt="" />
                        <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea" alt="" />
                        <img src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c" alt="" />
                    </div>
                </div>
            </section>

            {/* ========================================= */}
            {/* TESTIMONIALS */}
            {/* ========================================= */}

            <section className="testimonials">
                <div className="container">
                    <div className="section-heading">
                        <span>TESTIMONIALS</span>
                        <h2>What Our Clients Say</h2>
                    </div>
                    <div className="testimonial-grid">
                        <div className="testimonial-card">
                            <p>
                                "Excellent construction quality and timely
                                possession. Highly recommended for anyone
                                looking for their dream home."
                            </p>
                            <h4>Rahul Patil</h4>
                            <span>Home Buyer</span>
                        </div>
                        <div className="testimonial-card">
                            <p>
                                "Very professional team with transparent
                                process. We are extremely satisfied with our
                                investment."
                            </p>
                            <h4>Neha Kulkarni</h4>
                            <span>Investor</span>
                        </div>
                        <div className="testimonial-card">
                            <p>
                                "Beautiful design, premium quality and great
                                customer support from booking till possession."
                            </p>
                            <h4>Akash Sharma</h4>
                            <span>Customer</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================= */}
            {/* CALL TO ACTION */}
            {/* ========================================= */}

            <section className="cta">
                <div className="container cta-content">
                    <h2>
                        Let's Build Your Dream Home Together
                    </h2>
                    <p>
                        Get in touch with our experts to know more about our
                        upcoming and ongoing projects.
                    </p>
                    <button className="gold-btn">
                        Contact Us
                    </button>
                </div>
            </section>

            {/* ========================================= */}
            {/* FOOTER */}
            {/* ========================================= */}

            <footer className="footer">
                <div className="container footer-grid">
                    <div className="footer-about">
                        <img src={Logo} alt="Logo" className="footer-logo" />
                        <p>
                            Prathamesh Builders & Developers is committed
                            to creating exceptional residential and commercial
                            spaces with quality, trust and innovation.
                        </p>
                    </div>
                    <div>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Projects</a></li>
                            <li><a href="/">Gallery</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Services</h3>
                        <ul>
                            <li>Residential</li>
                            <li>Commercial</li>
                            <li>Construction</li>
                            <li>Architecture</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <p>📍 Pune, Maharashtra</p>
                        <p>📞 +91 98765 43210</p>
                        <p>✉ info@prathameshbuilders.com</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    © 2026 Prathamesh Builders & Developers.
                    All Rights Reserved.
                </div>
            </footer>
        </>
    );
};

export default Home;