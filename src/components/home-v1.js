import React from 'react';
import Banner from './section-components/banner';
import Aboutv1 from './section-components/about-v1';
import Counter from './section-components/counter-v1'; 
import Testimonial from './section-components/testimonial-v1';
import WhyChooseUs from './section-components/why-choose-us';
import ServiceV5 from './service-v1';

const Home_V1 = () => {

    return <>
        <Banner />
        <Aboutv1 />
        <ServiceV5/>
        <Counter />
        <WhyChooseUs />
        <Testimonial /> 
    </>
}

export default Home_V1

