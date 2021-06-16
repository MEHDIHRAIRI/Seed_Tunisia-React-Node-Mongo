
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import SectionTitle from '../../components/SectionTitles/SectionTitle';

import ModalVideo from "react-modal-video";

const AboutFour = () => {
    return (
        <div className="section section-padding-top about-section-padding-bottom-200">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-content-area mt-0 mb-md-10 mb-10">
                            
                    <SectionTitleTwo subTitle="We help you grow faster" />
                            <br /><br />
                            <SectionTitle title="Seed was founded in January 2020 as the first open space for digital content creators in Tunisia." />
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-image-area about-shape-animation right-0 mr-0">  
                            <ModalVideo channel='youtube' isOpen={true}   videoId="bou36jLQ0uo" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutFour;
