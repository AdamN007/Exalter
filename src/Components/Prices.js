import React, { forwardRef, useEffect } from 'react';
import styled from 'styled-components';
;

const Wrapper = styled.div`
margin-bottom: 100px;
margin-top: 100px;
@media (max-width: 1000px) {
  margin-top: 70px;

  }

  @media (max-width: 700px) {
  margin-top: 50px;
margin-bottom: 70px;
  }
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
  
  max-width: 800px; 
  height: 640px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 1px dashed black;
  border-right: 1px dashed black;
  @media (max-width: 1400px) {
    min-width: 300px;
   }
`;



const BoxTitle = styled.div`
  padding: 30px; 
  font-size: 38px;
  font-weight: 600;
  
`;

const HorizontalLine = styled.div`
  height: 1px; 
  background-color: black; 
  width: 95%; 
  margin: 10px auto;
`;

const BoxDescription = styled.div`
  padding: 35px; 
  font-size: 20px; 
   font-weight: 300;
   letter-spacing: 1px;
   min-height: 150px;
    max-height: 150px;
   @media (max-width: 1450px) {
    min-height: 150px;
    max-height: 150px;
   }
`;

const Pricing = styled.div`
  font-size: 45px;
  font-family: 'Arapey', serif;
  margin-top: 40px;
  padding-left: 35px;
   @media (max-width: 1000px) {
    padding-left: 35px;
   }
  
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

  color: white; /* or any color you want for the text */
  text-decoration: none; /* Removes the underline from links */

  @media (max-width: 1400px) {
    padding: 18px 0px;
    width: 80%;
    text-align: center;
   }
   @media (max-width: 1000px) {
    padding: 18px 0px;
    width: 90%;
    text-align: center;
   }
  
  &:link, &:visited, &:hover, &:active {
    color: white; /* Ensures that the link color remains consistent */
  }
  

 
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
  font-size: 5vw; 
 letter-spacing: 1px;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 9vw; 
    margin-bottom: 20px;
  } 

`;

const SmallText = styled.div`
   text-align: center;
   font-size: 2vw;
   margin-bottom: 50px;
   @media (max-width: 1000px) {
    font-size: 4vw; 
    max-width: 350px;
    margin: auto;
    margin-bottom: 50px;
  } 

`;

const boxVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' }
  }
};


const Prices = forwardRef(({ contactRef }, ref) => {

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  
  return (
   <Wrapper ref={ref}>
   <Title>The Plans</Title>
   <SmallText> Transparent, flexible payment options to suit your needs.

</SmallText>
     <BoxContainer>
       
          <Box>
            <BoxTitle>Basic <br />Website</BoxTitle>
            <HorizontalLine />
            <BoxDescription>
              A basic informational website with a Home page, 3 other pages, and a contact page including a contact form. Ideal for small businesses or self-employed.
            </BoxDescription>
            <Pricing>€1000</Pricing>
            <HorizontalLine />
            <ButtonContainer>
              <Button3D onClick={scrollToContact}>Contact Us</Button3D>
            </ButtonContainer>
          </Box>
        
       
          <Box>
            <BoxTitle>Ecommerce <br />Store</BoxTitle>
            <HorizontalLine />
            <BoxDescription>
              An Ecommerce store with payment functionality, Home page, 5 other pages, and a contact page including a contact form. Ideal for businesses looking to sell online.
            </BoxDescription>
            <Pricing>€2000</Pricing>
            <HorizontalLine />
            <ButtonContainer>
              <Button3D onClick={scrollToContact}>Contact Us</Button3D>
            </ButtonContainer>
          </Box>
       
       
          <Box>
            <BoxTitle>Custom <br />Solution</BoxTitle>
            <HorizontalLine />
            <BoxDescription>
              A custom order, our other options don't meet your needs? Describe your website's needs and get a free quote within 24 hours. Ideal for everyone :)
            </BoxDescription>
            <Pricing>€???</Pricing>
            <HorizontalLine />
            <ButtonContainer>
              <Button3D onClick={scrollToContact}>Contact Us</Button3D>
            </ButtonContainer>
          </Box>
        
      </BoxContainer>
    </Wrapper>
  );
});


  
  
  

export default Prices;
