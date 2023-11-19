import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 65px 20px; 

  max-width: 1300px;
  margin: auto;
`;

const WebsiteName = styled.div`
    font-family: 'Berkshire Swash', cursive;
    font-size: 40px;
`;

const FooterText = styled.div`
   font-family: 'Roboto', sans-serif;
   font-weight: 300;
   
   font-size: 18px;
`;



const HorizontalLine = styled.hr`
  border: 0;
  height: 1px;
  background-color: black;
  margin: 20px auto; 
  max-width: 1300px; 
`;

const SmallImage = styled.img`
  height: 35px;
  vertical-align: bottom;
`;

const LogosContainer = styled.div`
  display: flex;
  align-items: center; 
  gap: 10px; 
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
            Made with <SmallImage src="/images/big-ben-svgrepo-com.png" alt="Big Ben" /> in London, UK
          </FooterText>
          <LogosContainer>
          <InstagramLogo src="/images/instagram-svgrepo-com.png" alt="Instagram" />
          <XLogo src="/images/twitter-x-logo-42562.png" alt="X" />
            <LogoImage src="/images/linkedin-svgrepo-com.png" alt="LinkedIn" />
            
          </LogosContainer>
        </FooterContainer>
      </div>
    );
  };
  
  
export default Footer;
