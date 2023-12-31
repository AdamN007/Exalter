import React, { useRef } from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import Services from './Components/Services';
import Prices from './Components/Prices';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';



const BlueprintBackground = styled.div`
background-color: #f0faff; 
background-image: 
  linear-gradient(#f2f2f2  1px, transparent 1px),  
  linear-gradient(90deg, #f2f2f2  1px, transparent 1px), 
  linear-gradient(#e6e6e6 1px, transparent 2px), 
  linear-gradient(90deg, #e6e6e6 1px, transparent 2px); 
background-size: 
    10px 10px,
    10px 10px, 
    100px 100px,
    100px 100px;
  
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;



// Home Component
const Home = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <BlueprintBackground>
      <Navbar 
        homeRef={homeRef}
        servicesRef={servicesRef}
        pricingRef={pricingRef}
        contactRef={contactRef}
      />
      <Header ref={homeRef} id="home"></Header>
      <Services ref={servicesRef} id="services"/>
      <Prices ref={pricingRef} id="pricing"/>
      <ContactUs ref={contactRef} id="contact"/>
      <Footer />
    </BlueprintBackground>
  )
}

export default Home;

