import React, { useState } from 'react';

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
  font-size: 28px;
  font-family: 'Arapey', serif;
  @media (max-width: 1000px) {
    font-size: 22px;
  }
  margin-right: -40px;
  margin-top: 10px;
  

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

  @media (max-width: 1000px) {
    display: block;
  }
`;

const Menu = styled.div`
  position: fixed;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100vh;
  background: white;
  transition: left 0.3s ease;
  z-index: 999;
  
  &.active {
    left: 0;
  }
`;

const MenuLinks = styled.div`
  padding-top: 90px; // Adjust as needed
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <NavbarContainer>
      <HamburgerMenu onClick={toggleMenu}>
        {/* Hamburger Icon (can be SVG or Unicode) */}
        &#9776;
      </HamburgerMenu>

      <Menu className={menuActive ? 'active' : ''}>
        <MenuLinks>
          <a href="#plans" onClick={toggleMenu}>About</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#work" onClick={toggleMenu}>Projects</a>
          <a href="#contact" onClick={toggleMenu}>Contact Us</a>
        </MenuLinks>
      </Menu>

      <NavbarLinks>
        <a href="#plans">About</a>
        <a href="#services">Services</a>
        <a href="#work">Projects</a>
      </NavbarLinks>

      <Logo>Exalter</Logo>

      <RightNavbarLinks>
        <a href="#contact">Contact Us</a>
      </RightNavbarLinks>
    </NavbarContainer>
  );
}

export default Navbar;
