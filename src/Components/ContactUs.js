import React from 'react';
import styled from 'styled-components';

const Container = styled.div`


`

const ContactForm = styled.form`
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px;
  border: 1px solid black;
  border-radius: 70px;
  font-family: 'Roboto', sans-serif;
`;

const FieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px; 
`;

const Input = styled.input`
  flex: 1; 
  padding: 15px;
  margin-right: 10px; 
  border: 1px solid black;
  border-radius: 20px;
  background-color: transparent;
  

  &:last-child {
    margin-right: 0; 
  }
`;

const TextArea = styled.textarea`
  width: 97%;
  padding: 15px;
  border: 1px solid black;
  border-radius: 20px;
  height: 150px;
  background-color: transparent;
  height: 250px;
  margin-bottom: 0px;
`;


const Button3D = styled.button`
  background-color: #E02424;
  border: none;
  padding: 18px 40px;
  font-size: 20px; 
  border-radius: 5px; 
  cursor: pointer;
  
  transition: all 0.3s ease;
  margin-top: 20px;
  

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
    transform: translateY(4px); 
  }
`;

const Title = styled.div`
  text-align: center; 
  
  font-size: 100px;
  font-family: 'Arapey', serif;
`;
const SmallText = styled.div`
   text-align: center;
   font-size: 20px;
   margin-bottom: 40px;


`;


const ContactUs = () => {
    return (
        <Container>
       <Title>Contact Us</Title>
       <SmallText>We're here to help with any inquiries or feedback you have</SmallText>
      <ContactForm>
      
        <FieldContainer>
          {//<Input type="text" placeholder="Name" /> 
          }
          <Input type="email" placeholder="Email" />
        </FieldContainer>
        <TextArea placeholder="Description"></TextArea>
        <Button3D type="submit">Submit</Button3D>
      </ContactForm>
      </Container>
    );
  };
  
  export default ContactUs;