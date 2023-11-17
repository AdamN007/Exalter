import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
`;

const TitleDescription = styled.div`
  text-align: center;
  font-size: 70px;
`;

const Subtitle = styled.div`
  
  font-size: 70px;
  background: -webkit-linear-gradient(red, purple);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  transition: opacity 0.5s ease-in-out; // Smooth transition for opacity
  opacity: ${props => props.opacity}; // Controlled by state
`;

const Description = styled.div`
  font-family: 'Roboto', sans-serif;
  line-height: 1.5; // Decrease line height for more compact lines
  letter-spacing: 1px; // Slightly reduce space between characters
  margin-top: 20px; // Add some space between the subtitle and the description
  text-align: center; // Optionally center-align the text
  max-width: 600px; // Set a maximum width for better readability
  margin-left: auto; // These two lines center the block
  margin-right: auto;
  font-size: 21px;
  font-weight: 300;
  
`;

const UnderlinedText = styled.span`
  text-decoration: underline;
  text-decoration-thickness: 1px; // Adjust the thickness as needed
  text-underline-offset: 3px; // Moves the underline down by 3px
`;


const Button3D = styled.button`
  background-color: #E02424; // Slightly brighter red for button color
  border: none;
  padding: 18px 45px; // Padding for button size
  font-size: 18px; // Independent font size
  border-radius: 7px; // Rounded corners
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 30px;

  // Shadow for 3D effect and additional shadow for elevation
  box-shadow: 
    0 8px #B71C1C, // Inner shadow with a brighter red tone
    0 10px 10px rgba(0, 0, 0, 0.5); // Outer shadow for elevation effect

  &:hover {
    background-color: #C62828; // A brighter red for hover effect
  }

  &:active {
    box-shadow: 
      0 4px #B71C1C, // Reduced inner shadow when pressed
      0 5px 15px rgba(0, 0, 0, 0.5); // Slightly reduced outer shadow
    transform: translateY(4px); // Button moves down when pressed
  }
`;


const LineWithArrow = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px; // Width of the line
  height: 120px; // Height of the line
  background-color: black; // Color of the line

 
`;

const ArrowIcon = styled(ArrowIosUpwardOutline)`
  position: absolute;
  top: -6px; // Move the icon 10px upwards
  left: 50%;
  transform: translateX(-50%);
  width: 16px; // Set your desired width
  height: 16px; // Set your desired height
  color: black; // Set the color of the icon
`;




const Header = () => {
  const [currentWord, setCurrentWord] = useState('redefined');
  const [opacity, setOpacity] = useState(1);
  const words = ['Redefined', 'Reimagined', 'Revamped'];


  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity(0); // Fade out
      setTimeout(() => {
        setCurrentWord((prevWord) => {
          let nextIndex = words.indexOf(prevWord) + 1;
          return words[nextIndex % words.length];
        });
        setOpacity(1); // Fade in
      }, 500); // Half the interval of the opacity transition
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <TitleDescription>
        Design &<br />
        Development,
      </TitleDescription>
      <Subtitle opacity={opacity}>{currentWord}</Subtitle>
      <Description>
  An <UnderlinedText>acclaimed design and development agency</UnderlinedText> renowned for bringing highly innovative ideas to life <UnderlinedText>quickly enough to ward off any encroaching existential worries</UnderlinedText>.
</Description>
    <Button3D>Learn More</Button3D>
      <LineWithArrow>
  <ArrowIcon />
</LineWithArrow>
    </Container>
  );
};

export default Header;
