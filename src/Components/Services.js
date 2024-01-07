import React, { forwardRef } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  margin-left: 80px;
  margin-right: 80px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 300px;
  @media (max-width: 3000px) {
  } 
  @media (max-width: 2000px) {
  } 
  @media (max-width: 1000px) {
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px; 
  } 
`;

const Description = styled.div`
  padding: 35px;
  font-size: 4vw;
  font-weight: 300;
  letter-spacing: 1px;
  max-width: 1500px; 
  text-align: justify;
  margin: auto;
  margin-top: 100px;
  @media (max-width: 1000px) {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 0px;
    font-size: 5vw;
    text-align: justify;
    padding: 35px;
  } 
  ::selection {
  background: #bf0000; /* Light red background */
  color: #000000; /* Black text */
}
`;


const SemiBoldText = styled.span`
  font-weight: 400;
`;

const BoldText = styled.span`
  font-weight: 600;
`;



const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 170px; 
  margin-bottom: 20px; 
  max-width: 1500px;
  @media (max-width: 1400px) {
    padding: 0 40px; 
  } 
  @media (max-width: 1000px) {
    display: none;
  } 
`;

const StyledImage = styled.img`
  height: 120px;
  width: auto;
  @media (max-width: 1000px) {
    display: none;
  } 
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px; 
  padding: 40px;
  max-width: 1150px;
  margin: 40px auto;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const GridItem = styled.div`
  text-align: left;
  position: relative;
  padding-left: 0px; 
  font-size: 24px; 
  font-weight: 300;
  @media (max-width: 1000px) {
    display: none;
  } 
`; 

const Underline = styled.div`
  height: 1px;
  background-color: black;
  width: calc(100% + 40px);
  position: absolute;
  bottom: -20px;
  left: -25px; 
`;

const TitleArea = styled.div`
  padding: 35px;
  font-size: 5vw;
  font-weight: 300;
  letter-spacing: 1px;
  text-align: center;
  max-width: 1500px; 
  margin: auto;
  margin-bottom: 100px;
  @media (max-width: 1000px) {
    margin-bottom: 10px;
  }
`;
const StrikethroughText = styled(BoldText)`
  text-decoration: line-through;
`;



const Services = forwardRef((props, ref) => {
  const words = [
    "Website Creation", "Reliable Hosting", "Boost Your Visibility",
    "Fast Load Times", "Data Management", "Interactive Designs",
    "Efficient Systems", "Custom Coding", "Web Apps",
    "Smart Solutions", "Secure Payments", "Complete Service"
  ];
  return (
    <Container ref={ref}>
    <TitleArea>
        <BoldText>Website Design & Development</BoldText><br />
        Brand Identity, <BoldText>Custom Design &<br />
        Development,</BoldText> Advertising, <BoldText>UI/UX</BoldText><br />
        Efficient, <StrikethroughText>Existential Worries</StrikethroughText>
      </TitleArea>
      <ImageContainer>
        <StyledImage src="/images/aws-svgrepo-com.png" alt="AWS" />
        <StyledImage src="/images/nodejs-svgrepo-com.png" alt="Node.js" />
        <StyledImage src="/images/php02-svgrepo-com.png" alt="PHP" />
        <StyledImage src="/images/python-svgrepo-com.png" alt="Python" />
        <StyledImage src="/images/stripe-svgrepo-com.png" alt="Stripe" />
      </ImageContainer>
      <Description>
        We specialize in creating custom websites, tailored to your specific needs, 
        with robust web hosting on platforms like <SemiBoldText>AWS</SemiBoldText>. Our focus is 
        on <SemiBoldText>SEO</SemiBoldText> and page speed optimization. With expertise in <SemiBoldText>MySQL</SemiBoldText>,{' '}
        <SemiBoldText>React</SemiBoldText>, <SemiBoldText>Node.js</SemiBoldText>, <SemiBoldText>PHP</SemiBoldText>,{' '}
        <SemiBoldText>JavaScript</SemiBoldText>, <SemiBoldText>Python</SemiBoldText>, and <SemiBoldText>Stripe</SemiBoldText> integration, 
        we offer a comprehensive web development solution.
      </Description>
      <GridContainer>
        {words.map(word => (
          <GridItem key={word}>
            {word}
            <Underline />
          </GridItem>
        ))}
      </GridContainer>
    </Container>
  );
});

export default Services;
