import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 65px 100px; 
  
  margin: auto;

  @media (max-width: 1000px) {
    flex-direction: column; /* Stack elements vertically */
    padding: 40px 20px; /* Adjust padding for smaller screens */
    text-align: center; /* Center content */
  }
`;

const WebsiteName = styled.div`
  font-family: 'Berkshire Swash', cursive;
  font-size: 40px;

  @media (max-width: 1000px) {
    font-size: 30px; /* Decrease font size */
    margin-bottom: 20px; /* Add space below the website name */
  }
`;

const FooterText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 20px;
  margin-right: 2.2vw;
  @media (max-width: 1000px) {
    font-size: 16px; /* Decrease font size */
    order: 0; /* Move text to the bottom */
    margin-right: 0vw;
    margin-top: 10px; /* Add space above the footer text */
    margin-bottom: 40px;
  }
`;



const HorizontalLine = styled.hr`
  border: 0;
  height: 1px;
  background-color: black;
  margin: 20px; 
  margin-left: 100px;
  margin-right: 100px;
  
  @media (max-width: 1000px) {
    margin-left: 20px;
    margin-right: 20px;
  }
   
`;

const SmallImage = styled.img`
  height: 40px;
  vertical-align: bottom;
`;

const LogosContainer = styled.div`
  display: flex;
  align-items: center; 
  gap: 10px;

  @media (max-width: 1000px) {
    justify-content: center; /* Center logos */
    margin-bottom: 20px; /* Add space below the logos */
  }
`;


const LogoImage = styled.img`
  height: 35px; 
  width: auto; 
  vertical-align: middle; 
`;


const InstagramLogo = styled(LogoImage)`
  height: 25px;
`;
const XLogo = styled(LogoImage)`
  height: 23px;
  margin-left: 5px;
`;

const Footer = () => {
    return (
      <div>
        <HorizontalLine />
        <FooterContainer>
          <WebsiteName>Exalter</WebsiteName>
          <FooterText>
            Designed with <SmallImage src="/images/harp.png" alt="Big Ben" /> in Dublin, Ireland
          </FooterText>
          <LogosContainer>
          <InstagramLogo src="" />
          <XLogo src="" />
            <LogoImage src=""  />
            
          </LogosContainer>
        </FooterContainer>
      </div>
    );
  };
  
  
export default Footer;
