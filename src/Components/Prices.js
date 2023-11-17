import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center; // Center items horizontally // Align items to the start
  align-items: center;
  height: 100vh;
  padding: 0 40px; // Increased padding for more space at the edges
  gap: 40px; // Space between boxes
  font-family: 'Roboto', sans-serif;
`;

const Box = styled.div`
  width: 400px;
  height: 700px;
  border-top: 2px solid black;    // Solid top border
  border-bottom: 2px solid black; // Solid bottom border
  border-left: 1px dashed black;  // Dashed left border
  border-right: 1px dashed black; // Dashed right border
  // Add other styles as needed
`;


const BoxTitle = styled.div`
  padding: 30px; // Adjust as needed
  font-size: 38px;
  font-weight: 600;
  // Additional styling
`;

const HorizontalLine = styled.div`
  height: 1px; // Thickness of the line
  background-color: black; // Color of the line
  width: 85%; // Adjust as needed to prevent it from touching the edges
  margin: 10px auto; // Centers the line and adds space above and below
`;

const BoxDescription = styled.div`
  padding: 35px; // Add padding for spacing inside the box
  font-size: 22px; // Adjust the font size as needed
   font-weight: 300;
   letter-spacing: 1px;
`;

const Pricing = styled.div`
  font-size: 30px;
  
  margin-top: 10px;
  padding: 35px;
  
`;


const Prices = () => {
    return (
      <Container>
        <Box>
          <BoxTitle>Core <br />Design</BoxTitle>
          <HorizontalLine />
          <BoxDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </BoxDescription>
          <Pricing>$1000</Pricing>
        </Box>
        <Box>
          <BoxTitle>Design & <br />Development</BoxTitle>
          <HorizontalLine />
          <BoxDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </BoxDescription>
          <Pricing>$2750</Pricing>
        </Box>
        <Box>
          <BoxTitle>The <br />Weekly</BoxTitle>
          <HorizontalLine />
          <BoxDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </BoxDescription>
          <Pricing>$4000</Pricing>
        </Box>
      </Container>
    )
  }
  
  
  

export default Prices;
