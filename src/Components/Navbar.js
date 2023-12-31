import React, { useState, useRef } from 'react';

import styled from 'styled-components';

// Styled container for the Navbar

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  padding: 0 60px;

  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: transparent; 
  backdrop-filter: blur(1px);
  @media (max-width: 1000px) {
    width: 95%;
  } 
`;

const NavbarLinks = styled.div`
@media (max-width: 1000px) {
    display: none;
  }
  display: flex;
  gap: 40px;
  font-size: 28px;
  font-family: 'Arapey', serif;
  

  a {
    color: black; 
    text-decoration: none; 
    transition: color 0.3s ease;

    &:hover {
      color: #555;
    }
  }
`;

const RightNavbarLinks = styled.div`
  display: flex;
  gap: 40px;
  font-size: 32px;
  font-family: 'Arapey', serif;
  @media (max-width: 1000px) {
    display: flex;
  gap: 40px;
  font-size: 32px;
  font-family: 'Arapey', serif;
    font-size: 25px;
    margin-right: -55px;
  margin-top: 10px;
  }


  a {
    color: black; 
    text-decoration: none; 
    transition: color 0.3s ease;

    &:hover {
      color: #555;
    }
  }
`;




const Logo = styled.div`
  font-size: 55px;
  @media (max-width: 1000px) {
    font-size: 40px;
  }
  font-family: 'Berkshire Swash', cursive;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 26px;
  // Hamburger icon styling here
  margin-left: -20px;

  @media (max-width: 1000px) {
    display: block;
    
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  font-size: 32px;
  font-weight: bold;
`;

const MenuLinks = styled.div`
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  justify-content: center; // Add this to center vertically
  gap: 40px;
  font-size: 34px; // Smaller font size for better mobile readability
  font-family: 'Arapey', serif; // Consistent font with the rest of the navbar

  a {
    color: black;
    text-decoration: none;
    transition: color 0.3s ease, transform 0.3s ease;
    position: relative; // Add this to position the pseudo-element
    padding-bottom: 5px; // Give some space for the line

    &:hover, &:focus {
      color: #555;
      transform: scale(1.05);
    }

    &::after { // Pseudo-element for the underline
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 80%;
      height: 2px; // Line thickness
      background: black; // Line color
      transition: transform 0.3s ease;
    }

    &:hover::after, &:focus::after {
      transform: scaleX(1.1); // Extend line a bit on hover
    }
  }
`;

const Menu = styled.div`
  position: fixed;
  left: 0; // Start from left to enter from left to right
  top: 0;
  width: 100%;
  height: 100vh;
  background: white;
  transform: translateX(-100%); // Use transform for better performance
  transition: transform 0.3s ease; // Animate the transform property
  z-index: 999;

  &.active {
    transform: translateX(0); // Slide in
  }
`;
const MenuLogo = styled.div`
  font-size: 55px;
  @media (max-width: 1000px) {
    font-size: 40px;
  }
  font-family: 'Berkshire Swash', cursive;
`;


const Navbar = ({ homeRef, servicesRef, pricingRef, contactRef }) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleMenuLinkClick = (sectionRef) => {
    toggleMenu();
    scrollToSection(sectionRef);
  };

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      const offset = 100; // Adjust this value as needed
      const sectionPosition = sectionRef.current.getBoundingClientRect().top;
      const offsetPosition = sectionPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <NavbarContainer>
      <HamburgerMenu onClick={toggleMenu}>
        {/* Hamburger Icon (can be SVG or Unicode) */}
        &#9776;
      </HamburgerMenu>

      <Menu className={menuActive ? 'active' : ''}>
      <CloseButton onClick={toggleMenu}>&times;</CloseButton> {/* This is the X button */}

      <MenuLinks>
      <MenuLogo>Exalter</MenuLogo>
        <a href="#about" onClick={() => handleMenuLinkClick(homeRef)}>Home</a>
        <a href="#services" onClick={() => handleMenuLinkClick(servicesRef)}>Services</a>
        <a href="#projects" onClick={() => handleMenuLinkClick(pricingRef)}>Pricing</a>
        <a href="#contact" onClick={() => handleMenuLinkClick(contactRef)}>Contact Us</a>
      </MenuLinks>
      </Menu>

      <NavbarLinks>
        <a href="#plans" onClick={() => scrollToSection(homeRef)}>Home</a>
        <a href="#services" onClick={() => scrollToSection(servicesRef)}>Services</a>
        <a href="#work" onClick={() => scrollToSection(pricingRef)}>Pricing</a>
      </NavbarLinks>

      <Logo>Exalter</Logo>

      <RightNavbarLinks>
        <a href="#contact" onClick={() => scrollToSection(contactRef)}>Contact</a>
      </RightNavbarLinks>
    </NavbarContainer>
  );
}

export default Navbar;
