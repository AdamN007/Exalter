import React from 'react';
import styled from 'styled-components';

// Styled container for the Navbar
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 0 60px; // Padding on both sides
  
  width: 100%;
  box-sizing: border-box; // Include padding and border in the width calculation
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

// Styled component for the Navbar links
const NavbarLinks = styled.div`
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

// Styled component for the Logo
const Logo = styled.div`
  font-size: 55px;
  
  font-family: 'Berkshire Swash', cursive;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLinks>
        <a href="#plans">About</a>
        <a href="#services">Services</a>
        <a href="#work">Projects</a>
      </NavbarLinks>

      <Logo>Exalter</Logo>

      <NavbarLinks>
        <a href="#contact">Contact Us</a>
      </NavbarLinks>
    </NavbarContainer>
  );
}

export default Navbar;
