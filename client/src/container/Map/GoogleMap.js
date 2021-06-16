import React from 'react'

const GoogleMap = () => {
    return (
        <div className="google-map-area section text-center section-padding-bottom">
            <div className="container">
                <div className="contact-map-area" data-aos="fade-up">
                    <iframe className="contact-map" src="https://www.google.com/maps/embed/v1/place?q=seed%20tunisie"  aria-hidden="false"></iframe>
                </div>
            </div>
        </div>
    )
}

export default GoogleMap;
