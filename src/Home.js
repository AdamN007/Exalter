import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import Services from './Components/Services';
import Prices from './Components/Prices';

// Styled component for the background
const BlueprintBackground = styled.div`
background-color: #f0faff; // Very light blue, almost white
background-image: 
  linear-gradient(#f2f2f2  1px, transparent 1px),  // Small box horizontal lines
  linear-gradient(90deg, #f2f2f2  1px, transparent 1px), // Small box vertical lines
  linear-gradient(#e6e6e6 1px, transparent 2px), // Lighter major horizontal lines
  linear-gradient(90deg, #e6e6e6 1px, transparent 2px); // Major vertical lines
background-size: 
    10px 10px, // Size of the small boxes
    10px 10px, 
    100px 100px, // Size of the large squares (10 small boxes)
    100px 100px;
  
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;



const Home = () => {
  return (
    <BlueprintBackground>
     <Header />
     <Services />
     <Prices />
      
    </BlueprintBackground>
  )
}

export default Home;
