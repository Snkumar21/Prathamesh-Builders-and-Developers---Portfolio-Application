import "./Gallery.css";
import { Link } from "react-router-dom";
import {
    FaPlay,
    FaCamera
} from "react-icons/fa";

import Gallery1 from "../../assets/images/gallery1.jpeg";
import Gallery2 from "../../assets/images/gallery2.jpeg";
import Gallery3 from "../../assets/images/gallery3.jpeg";
import Gallery4 from "../../assets/images/gallery4.jpeg";
import Gallery5 from "../../assets/images/gallery5.jpeg";
import Gallery6 from "../../assets/images/gallery6.jpeg";

const Gallery = () => {
    return (
        <>
            {/* ========================= */}
            {/* HERO */}
            {/* ========================= */}
            <section className="gallery-hero">
                <div className="container">
                    <h1>Our Gallery</h1>
                    <p>
                        Explore our beautifully designed residential,
                        commercial and luxury projects.
                    </p>
                </div>
            </section>

            {/* ========================= */}
            {/* GALLERY */}
            {/* ========================= */}
            <section className="gallery-section">
                <div className="container">
                    <div className="section-heading">
                        <span>Gallery</span>
                        <h2>Moments That Define Excellence</h2>
                    </div>
                    <div className="gallery-grid">
                        <div className="gallery-card">
                            <img src={Gallery1} alt="" />
                            <div className="gallery-overlay">
                                <FaCamera />
                                <h3>Luxury Apartment</h3>
                            </div>
                        </div>
                        <div className="gallery-card">
                            <img src={Gallery2} alt="" />
                            <div className="gallery-overlay">
                                <FaCamera />
                                <h3>Modern Interior</h3>
                            </div>
                        </div>
                        <div className="gallery-card">
                            <img src={Gallery3} alt="" />
                            <div className="gallery-overlay">
                                <FaCamera />
                                <h3>Commercial Space</h3>
                            </div>
                        </div>
                        <div className="gallery-card">
                            <img src={Gallery4} alt="" />
                            <div className="gallery-overlay">
                                <FaCamera />
                                <h3>Premium Living</h3>
                            </div>
                        </div>
                        <div className="gallery-card">
                            <img src={Gallery5} alt="" />
                            <div className="gallery-overlay">
                                <FaCamera />
                                <h3>Landscape View</h3>
                            </div>
                        </div>
                        <div className="gallery-card">
                            <img src={Gallery6} alt="" />
                            <div className="gallery-overlay">
                                <FaCamera />
                                <h3>Club House</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================= */}
            {/* VIDEO TOUR */}
            {/* ========================= */}
            <section className="video-tour">
                <div className="container">
                    <div className="section-heading">
                        <span>Virtual Tour</span>
                        <h2>Experience Before You Visit</h2>
                    </div>
                    <div className="video-box">
                        <FaPlay className="play-icon" />
                        <h3>Project Walkthrough</h3>
                        <p>
                            Discover every detail of our premium
                            developments through an immersive virtual tour.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========================= */}
            {/* CTA */}
            {/* ========================= */}
            <section className="gallery-cta">
                <div className="container">
                    <h2>Want To Visit Our Projects?</h2>
                    <p>
                        Schedule your site visit today and experience
                        luxury living with Prathamesh Builders.
                    </p>
                    <Link
                        to="/contact"
                        className="gold-btn"
                    >
                        Book Site Visit
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Gallery;