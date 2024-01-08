import React, { forwardRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: 80px;
  margin-right: 80px;
  font-family: 'Roboto', sans-serif;
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

const Description = styled(motion.div)`
  padding: 35px;
  font-size: 3vw;
  font-weight: 300;
  letter-spacing: 1px;
  
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
  margin-bottom: 20px; 
  max-width: 1800px;
  margin: auto;
  @media (max-width: 1400px) {
    display: none;
  } 
  @media (max-width: 1000px) {
    display: none;
  } 
`;

const StyledImage = styled(motion.img)`
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
  font-size: 2vw; 
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



  const containerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hiddenLeft: { x: -100, opacity: 0 },
    hiddenRight: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: 0.1,
      }
    }
  };
  
  
  const controls = useAnimation();
  const [descriptionRef, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };
  
  return (

    <motion.div 
    ref={ref}
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <Container ref={ref}>
    <TitleArea>
        <BoldText>Website Design & Development</BoldText><br />
        Brand Identity, <BoldText>Custom Design &<br />
        Development,</BoldText> Advertising, <BoldText>UI/UX</BoldText><br />
        Efficient, <StrikethroughText>Existential Worries</StrikethroughText>
      </TitleArea>
      <ImageContainer>
  <StyledImage 
    src="/images/aws-svgrepo-com.png" 
    alt="AWS" 
    variants={imageVariants}
    initial="hiddenLeft"
    whileInView="visible"
    viewport={{ once: true }}
  />
  <StyledImage 
    src="/images/nodejs-svgrepo-com.png" 
    alt="Node.js" 
    variants={imageVariants}
    initial="hiddenRight"
    whileInView="visible"
    viewport={{ once: true }}
  />
  <StyledImage 
    src="/images/php02-svgrepo-com.png" 
    alt="PHP" 
    variants={imageVariants}
    initial="hiddenLeft"
    whileInView="visible"
    viewport={{ once: true }}
  />
  <StyledImage 
    src="/images/python-svgrepo-com.png" 
    alt="Python" 
    variants={imageVariants}
    initial="hiddenRight"
    whileInView="visible"
    viewport={{ once: true }}
  />
  <StyledImage 
    src="/images/stripe-svgrepo-com.png" 
    alt="Stripe" 
    variants={imageVariants}
    initial="hiddenLeft"
    whileInView="visible"
    viewport={{ once: true }}
  />
</ImageContainer>
       <Description
          ref={descriptionRef}
          initial="hidden"
          animate={controls}
          variants={descriptionVariants}
        >
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
    </motion.div>
  );
});

export default Services;
