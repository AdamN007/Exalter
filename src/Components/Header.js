import React, { useState, useEffect, useRef, forwardRef  } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline';


const Container = styled.div`
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
  font-size: 75px;
  @media (max-width: 1000px) {
    font-size: 50px;
  }
`;

const Subtitle = styled.div`
  min-height: 80px;
  font-size: 70px;
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
`;

const UnderlinedText = styled.span`
  text-decoration: underline;
  text-decoration-thickness: 1px; 
  text-underline-offset: 3px; 
  
`;


const Button3D = styled.button`
  background-color: #E02424; 
  border: none;
  padding: 18px 45px; 
  font-size: 18px;
  border-radius: 5px; 
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 45px;


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
  );
});

export default Header;
