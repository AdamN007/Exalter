import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
margin-bottom: 300px;
padding-top: 200px;
`;
const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 140px;
  gap: 40px;
  font-family: 'Roboto', sans-serif;

  // Media query for screen sizes less than 1000px
  @media (max-width: 1000px) {
    flex-direction: column; // Stack boxes vertically
    padding: 0 20px; // Adjust padding for smaller screens
  }
`;

const Box = styled.div`
  
  max-width: 700px; 
  height: 640px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 1px dashed black;
  border-right: 1px dashed black;
`;



const BoxTitle = styled.div`
  padding: 30px; 
  font-size: 38px;
  font-weight: 600;
  
`;

const HorizontalLine = styled.div`
  height: 1px; 
  background-color: black; 
  width: 80%; 
  margin: 10px auto;
`;

const BoxDescription = styled.div`
  padding: 35px; 
  font-size: 20px; 
   font-weight: 300;
   letter-spacing: 1px;
`;

const Pricing = styled.div`
  font-size: 45px;
  font-family: 'Arapey', serif;
  margin-top: 10px;
  padding: 35px;
  
  
`;

const Button3D = styled.button`
  background-color: #E02424; 
  border: none;
  padding: 18px 110px; 
  font-size: 20px; 
  border-radius: 5px; 
  cursor: pointer;
  
  transition: all 0.3s ease;
  margin-top: 20px;
  

 
  box-shadow: 
    0 8px #B71C1C, 
    0 10px 10px rgba(0, 0, 0, 0.5); 

  &:hover {
    background-color: #C62828;
  }

  &:active {
    box-shadow: 
      0 4px #B71C1C,
      0 5px 15px rgba(0, 0, 0, 0.5); 
    transform: translateY(4px); 
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
  
`;

const Title = styled.div`
  font-size: 100px; 
 letter-spacing: 1px;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 40px; 
  } 

`;

const SmallText = styled.div`
   text-align: center;
   font-size: 20px;
   margin-bottom: 50px;
   @media (max-width: 1000px) {
    font-size: 18px; 
    max-width: 350px;
    margin: auto;
    margin-bottom: 50px;
  } 

`;


const Prices = () => {
  return (
   <Wrapper>
   <Title>The Plans</Title>
   <SmallText> Transparent, flexible payment options to suit your needs.

</SmallText>
    <BoxContainer>
   
      <Box>
        <BoxTitle>Core <br />Design</BoxTitle>
        <HorizontalLine />
        <BoxDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </BoxDescription>
        <Pricing>$1,000 </Pricing>
        
        <HorizontalLine />
        <ButtonContainer>
          <Button3D>Sign Up</Button3D>
        </ButtonContainer>
      </Box>
      <Box>
        <BoxTitle>Design & <br />Development</BoxTitle>
        <HorizontalLine />
        <BoxDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </BoxDescription>
        <Pricing>$2,750</Pricing>
        
        <HorizontalLine />
        <ButtonContainer>
          <Button3D>Sign Up</Button3D>
        </ButtonContainer>
      </Box>
      <Box>
        <BoxTitle>The <br />Weekly</BoxTitle>
        <HorizontalLine />
        <BoxDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </BoxDescription>
        <Pricing>$4,000</Pricing>
        
        <HorizontalLine />
        <ButtonContainer>
          <Button3D>Sign Up</Button3D>
        </ButtonContainer>
      </Box>
    </BoxContainer>
    </Wrapper>
  );
}

  
  
  

export default Prices;
