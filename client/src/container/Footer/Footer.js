import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../../components/logo/Logo';

const Footer = () => {
    return (
        <div className="footer-section section footer-bg-color">
            <div className="container">
                <div className="row mb-lg-14 mb-md-10 mb-6">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 col-12 mb-6">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Logo 
                                    image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                                />
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mb-6">
                        <div className="content">
                            <p><Link to={process.env.PUBLIC_URL + "/"}>(+216) 71 335 124</Link></p>
                            <p><Link to={process.env.PUBLIC_URL + "/"}>contact@seed.tn</Link> </p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mb-6">
                        <div className="footer-social-inline">
                            <a href="https://www.youtube.com/channel/UC_L4y1kWjcywjJ6C6cfdf-w?view_as=subscriber" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube-square"></i></a>
                            <a href="https://www.facebook.com/seed.tn" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                            <a href="https://www.instagram.com/seed.tn/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
