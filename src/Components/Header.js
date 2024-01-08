import React, { useState, useEffect, useRef, forwardRef  } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typed from 'typed.js';
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline';


const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Arapey', serif;
  font-style: italic;
  position: relative;
  padding: 20px;
`;

const TitleDescription = styled.div`
  text-align: center;
  font-size: 5vw;
  @media (max-width: 1000px) {
    font-size: 50px;
  }

  
`;

const Subtitle = styled.div`
  min-height: 80px;
  font-size: 5vw;
  @media (max-width: 1000px) {
    font-size: 50px;
  }
  background: -webkit-linear-gradient(red, purple);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  transition: opacity 0.5s ease-in-out; 
  opacity: ${props => props.opacity}; 
`;

const Description = styled.div`
  font-family: 'Roboto', sans-serif;
  line-height: 1.5; 
  letter-spacing: 1px;
  margin-top: 20px; 
  text-align: center; 
  max-width: 600px;
  margin-left: auto; 
  margin-right: auto;
  font-size: 21px;
  font-weight: 300;
  @media (max-width: 1000px) {
    font-size: 18px;
    max-width: 400px;
  }

  @media (min-width: 2000px) {
    font-size: 27px;
    max-width: 900px;
  }
`;

const UnderlinedText = styled.span`
  text-decoration: underline;
  text-decoration-thickness: 1px; 
  text-underline-offset: 3px; 
  
`;


const Button3D = styled.button`
  background-color: #E02424; 
  border: none;
  width: 15%;
  height: 60px;
  font-size: 18px;
  border-radius: 5px; 
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 45px;
  @media (max-width: 1500px) {
    width: 200px;
  }


  box-shadow: 
    0 8px #B71C1C, 
    0 10px 10px rgba(0, 0, 0, 0.5); 

    color: white; /* or any color you want for the text */
  text-decoration: none; /* Removes the underline from links */
  
  &:link, &:visited, &:hover, &:active {
    color: white; /* Ensures that the link color remains consistent */
  }

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


const LineWithArrow = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 120px; 
  background-color: black; 

 
`;

const ArrowIcon = styled(ArrowIosUpwardOutline)`
  position: absolute;
  top: -6px; 
  left: 50%;
  transform: translateX(-50%);
  width: 16px; 
  height: 16px; 
  color: black; 
`;




const Header = forwardRef((props, ref) => {
  const el = useRef(null);

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

  const descriptionControls = useAnimation();
  const [descriptionRef, descriptionInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (descriptionInView) {
      descriptionControls.start('visible');
    }
  }, [descriptionControls, descriptionInView]);
  

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Redefined', 'Reimagined', 'Revamped'], // Add your words here
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      smartBackspace: false,
      showCursor: false,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <motion.div 
    ref={ref}
    variants={slideInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <Container ref={ref}>
      <TitleDescription>
        Design &<br />
        Development,
      </TitleDescription>
      <Subtitle ref={el}></Subtitle>
      <Description>
  An <UnderlinedText>acclaimed design and development agency</UnderlinedText> renowned for bringing highly innovative ideas to life <UnderlinedText>quickly enough to ward off any encroaching existential worries</UnderlinedText>.
</Description>
    <Button3D>Learn More</Button3D>
    
    </Container>
    </motion.div>
  );
});

export default Header;
