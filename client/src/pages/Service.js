import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import ServiceIconBoxTwo from '../container/service/ServiceIconBoxTwo';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';


const Service = () => {
    return (
        <React.Fragment>
            <SEO title="Exomac || Service" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-three.jpg"
                title="We make ideas become reality"
                content="Home"
                contentTwo="Services"
            />
            <ServiceIconBoxTwo />
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Service;



