import React, { forwardRef, useEffect, useState } from 'react';
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
  max-width: 2500px;
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
  flex-wrap: wrap; // Allows the images to wrap to the next line on smaller screens

  @media (max-width: 1000px) {
    justify-content: center; // Centers the images on smaller screens
  }
`;

const StyledImage = styled(motion.img)`
  height: 120px;
  width: auto;
  margin: 5px; // Adds a small margin around each image for spacing

  @media (max-width: 1400px) {
    height: 100px; // Adjusts the image height for medium screens
  } 
  @media (max-width: 1000px) {
    height: 80px; // Adjusts the image height for smaller screens
  } 
  @media (max-width: 700px) {
    height: 60px;
    margin: 15px; 
  }
  @media (max-width: 500px) {
    height: 40px; // Adjusts the image height for extra small screens
  }
  @media (max-width: 300px) {
    height: 30px; // Adjusts the image height for the smallest screens
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 80px; 
  padding: 40px;
  max-width: 2500px;
  margin: 40px auto;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const GridItem = styled.div`
  text-align: left;
  position: relative;
  padding-left: 0px; 
  font-size: 1.5vw; 
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
  border-radius: 68px;
  border-radius: 50px;

  @media (max-width: 1000px) {
    margin-bottom: 10px;
    font-size: 6vw;
  }
  @media (max-width: 750px) {
    margin-bottom: 10px;
    font-size: 5vw;
  }
  @media (max-width: 350px) {
    margin-bottom: 10px;
    font-size: 7vw;
  }
`;

const PreviousArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px;
  font-size: 5vw;
  font-weight: 300;
  height: 33vw;
  letter-spacing: 1px;
  text-align: left;
  margin: auto;
  margin-bottom: 100px;
  border-radius: 40px;  
box-shadow: inset 2vw 2vw 3vw #505050,
            inset -2vw -2vw 3vw #818181;

  @media (max-width: 1000px) {
    width: 80%;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    height: 170vw;
    padding: 20px; /* Adjust padding as needed */
    font-size: 6vw; /* Adjust font size as needed */
    justify-content: center; /* Center content vertically */
    margin-bottom: 50px; /* Adjust bottom margin as needed */
  }
`;

const TextContainer = styled.div`
  width: 50%;
  margin-right: 5vw;
  margin-left: 5vw;
  margin-bottom: 2.5vw;
  @media (max-width: 750px) {
    width: 80%; /* Adjust width as needed for smaller screens */
    margin-right: 10%; /* Center the text container */
    margin-left: 10%;
    margin-bottom: 1vw;
  }
  /* Additional styling for text if needed */
`;

const TopText = styled.div`
  font-size: 3vw;
  font-weight: 900;
  letter-spacing: 1px;
  text-align: left;
  margin-bottom: 1vw;
  @media (max-width: 750px) {
    font-size: 6vw; /* Adjust font size as needed */
    text-align: center; /* Center the text container */
    margin-top: 3vw; /* Adjust bottom margin as needed */
  }
`;

const UnderText = styled.div`
  font-size: 1.5vw;
  font-weight: 300;
  text-align: left;
  @media (max-width: 750px) {
    font-size:4vw; /* Adjust font size as needed */
    text-align: left; /* Center the text container */
    margin-top: 3vw; /* Adjust bottom margin as needed */
  }
`;

const ViewText = styled.div`
  margin-top: 1vh;
  font-size: 1vw;
  font-weight: 300;
  text-align: left;
  margin-bottom: 1vw;
  @media (max-width: 750px) {
    font-size:4vw; /* Adjust font size as needed */
    text-align: center; /* Center the text container */
    margin-top: 3vw; /* Adjust bottom margin as needed */
  }
`;

const Button3D = styled.a`
  position: absolute;
  display: inline-block;
  background-color: #E02424; 
  border: none;
  padding: 1vw 5vw; 
  font-size: 1vw; 
  border-radius: 5px; 
  cursor: pointer;
  transition: all 0.3s ease;
  color: white; /* or any color you want for the text */
  text-decoration: none; /* Removes the underline from links */
  

  
  &:link, &:visited, &:hover, &:active {
    color: white; /* Ensures that the link color remains consistent */
  }
  @media (max-width: 750px) {
    font-size: 4vw; /* Adjust font size as needed */
    text-align: center; /* Center the text container */
    padding: 3vw 15vw; 
    margin: auto;
    justify-content: center;
    align-items: center;
    right: 50%;
    transform: translateX(50%);
    margin-top: 2vw; /* Adjust bottom margin as needed */
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
  }
`;

const ButtonContainer = styled.div`
`;


const BImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px; 
  max-width: 1800px;
  margin: auto;
  flex-wrap: wrap; // Allows the images to wrap to the next line on smaller screens
  margin-right: 10vw;
  @media (max-width: 1000px) {
    justify-content: center; // Centers the images on smaller screens
  }
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-bottom: 10vw;
  }
`;

const BStyledImage = styled(motion.img)`
  height: 25vw;
  width: auto;
  margin: 5px; // Adds a small margin around each image for spacing
  @media (max-width: 750px) {
    height: 60vw;
  }
`;


const StrikethroughText = styled(BoldText)`
  text-decoration: line-through;
`;

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

const containerVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: { duration: 1 }
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


const gridItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 1, ease: 'easeOut' }
  }
};

// Define animation variants for the grid container
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the animation of children
      duration: 1
    }
  }
};

const slideInVariants = {
  hidden: { x: -100, opacity: 0 },  // Starting from left
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' }
  }
};

const Services = forwardRef((props, ref) => {
  const size = useWindowSize();
  const isMobile = size.width <= 400;
  
  const words = [
    "Website Creation", "Reliable Hosting", "Boost Your Visibility",
    "Fast Load Times", "Data Management", "Interactive Designs",
    "Efficient Systems", "Custom Coding", "Web Apps",
    "Smart Solutions", "Secure Payments", "Complete Service"
  ];



  
  
  
  const descriptionControls = useAnimation();
  const [descriptionRef, descriptionInView] = useInView({ triggerOnce: true, threshold: 1 });

  useEffect(() => {
    if (descriptionInView) {
      descriptionControls.start('visible');
    }
  }, [descriptionControls, descriptionInView]);


 

  const gridControls = useAnimation();
  const [gridRef, gridInView] = useInView({ triggerOnce: true, threshold: 1 });

  useEffect(() => {
    if (gridInView) {
      gridControls.start('visible');
    }
  }, [gridControls, gridInView]);


  return (

    <motion.div 
    ref={ref}
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <Container ref={ref}>
    {isMobile ? (
        <TitleArea>
        <BoldText>Website Design & Development </BoldText>
          Brand Identity, <BoldText>Custom Design &
          Development,</BoldText> Advertising, <BoldText>UI/UX </BoldText>
          Efficient, <StrikethroughText>Existential Worries</StrikethroughText>
        </TitleArea>
      ) : (
        <TitleArea>
          {/* Your default text area */}
          <BoldText>Website Design & Development</BoldText><br />
          Brand Identity, <BoldText>Custom Design &<br />
          Development,</BoldText> Advertising, <BoldText>UI/UX</BoldText><br />
          Efficient, <StrikethroughText>Existential Worries</StrikethroughText>
        </TitleArea>
      )}
      <PreviousArea>
    <TextContainer>
      <TopText>Web Development <br/>Simplified.</TopText>
      <UnderText>Our web development approach focuses on <BoldText>coding custom solutions</BoldText> to deliver <BoldText>unique, fast,</BoldText> and <BoldText>user-friendly</BoldText> websites <BoldText>tailored</BoldText> specifically to your business needs. This ensures a standout online presence that <BoldText>engages</BoldText> and <BoldText>impresses your audience.</BoldText> </UnderText>

        <ViewText>View our most recent work </ViewText>
          <Button3D href="https://bleue-belle.com/" target="_blank" rel="noopener noreferrer">View</Button3D>


    </TextContainer>
    <BImageContainer>
      <BStyledImage src="/images/shutterstock_1454813456 [Converted].png" alt="Descriptive Alt Text" />
    </BImageContainer>
  </PreviousArea>
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
          animate={descriptionControls}
          variants={containerVariants} // Reusing containerVariants for Description
        >
        We specialize in creating custom websites, tailored to your specific needs, 
        with robust web hosting on platforms like <SemiBoldText>AWS</SemiBoldText>. Our focus is 
        on <SemiBoldText>SEO</SemiBoldText> and page speed optimization. With expertise in <SemiBoldText>MySQL</SemiBoldText>,{' '}
        <SemiBoldText>React</SemiBoldText>, <SemiBoldText>Node.js</SemiBoldText>, <SemiBoldText>PHP</SemiBoldText>,{' '}
        <SemiBoldText>JavaScript</SemiBoldText>, <SemiBoldText>Python</SemiBoldText>, and <SemiBoldText>Stripe</SemiBoldText> integration, 
        we offer a comprehensive web development solution.
      </Description>
      <motion.div
        ref={gridRef}
        variants={gridContainerVariants}
        initial="hidden"
        animate={gridControls}
      >
        <GridContainer>
          {words.map(word => (
            <motion.div key={word} variants={gridItemVariants}>
              <GridItem>
                {word}
                <Underline />
              </GridItem>
            </motion.div>
          ))}
        </GridContainer>
      </motion.div>
    </Container>
    </motion.div>
  );
});

export default Services;

