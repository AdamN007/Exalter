import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 300px;
`;

const Description = styled.div`
  padding: 35px;
  font-size: 40px;
  font-weight: 300;
  letter-spacing: 1px;
  text-align: center;
  max-width: 1200px; 
  margin: auto;
  
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
`;

const StyledImage = styled.img`
  height: 80px;
  width: auto;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px; 
  padding: 40px;
  max-width: 1150px;
  margin: 40px auto;
`;

const GridItem = styled.div`
  text-align: left;
  position: relative;
  padding-left: 0px; 
  font-size: 24px; 
  font-weight: 300;
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
  font-size: 80px; 
  font-weight: 400;
  text-align: center;
  margin-bottom: 40px; 
  font-weight: 300;
`;
const StrikethroughText = styled(BoldText)`
  text-decoration: line-through;
`;



const Services = () => {
  const words = [
    "Website Creation", "Reliable Hosting", "Boost Your Visibility",
    "Fast Load Times", "Data Management", "Interactive Designs",
    "Efficient Systems", "Custom Coding", "Web Apps",
    "Smart Solutions", "Secure Payments", "Complete Service"
  ];
  return (
    <Container>
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
  )
}

export default Services;
