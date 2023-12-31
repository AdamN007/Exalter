import React, { forwardRef } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  margin-bottom: 40px;

`

const ContactForm = styled.form`
  max-width: 700px;
  margin: auto;
  padding: 40px;
  border: 0px solid black;
  border-radius: 70px;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 1000px) {
    border: 0px solid black;
    padding: 40px;
  }
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stacks children vertically by default */
  width: 100%;
  margin: auto;
  border-radius: 20px;
  background-color: transparent;
  margin-bottom: 20px;
  justify-content: space-between;

  @media (min-width: 1001px) {
    flex-direction: row; /* Aligns children horizontally for wider screens */
    justify-content: flex-start; /* Aligns children to the start of the container */
    & > * {
      margin-right: 20px; /* Adds space between the children */
      &:last-child {
        margin-right: 0; /* Removes margin from the last child */
      }
    }
  }
`;

const Input = styled.input`
  flex: 1; 
  padding: 15px;
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
  background-color: transparent;
  height: 250px;
  margin-bottom: 0px;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;


const Button3D = styled.button`
  background-color: #E02424;
  border: none;
  padding: 18px 150px;
  font-size: 20px; 
  border-radius: 5px; 
  cursor: pointer;
  display: block;
    margin-left: auto;
    margin-right: auto; 
  
  
  transition: all 0.3s ease;
  margin-top: 20px;

  @media (max-width: 1000px) {
    display: block;
    margin-left: auto;
    padding: 18px 100px;
    margin-right: auto; /* center the button for widths below 1000px */
  }

  color: white; /* or any color you want for the text */
  text-decoration: none; /* Removes the underline from links */
  
  &:link, &:visited, &:hover, &:active {
    color: white; /* Ensures that the link color remains consistent */
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
    transform: translateY(4px); 
  }
`;

const Title = styled.div`
  text-align: center; 
  
  font-size: 100px;
  font-family: 'Arapey', serif;
  @media (max-width: 1000px) {
    font-size: 40px; 
  }
`;
const SmallText = styled.div`
   text-align: center;
   font-size: 20px;
   margin-bottom: 40px;
   @media (max-width: 1000px) {
    font-size: 18px; 
    max-width: 300px;
    margin: auto;
    margin-bottom: 0px;
  }

`;


const ContactUs = forwardRef((props, ref) => {
    return (
        <Container ref={ref}>
       <Title>Contact Us</Title>
       <SmallText>We're here to help with any inquiries or feedback you have</SmallText>
      <ContactForm>
      
        <FieldContainer>
          <Input type="text" placeholder="Name" /> 
        </FieldContainer>
        <FieldContainer>
        <Input type="email" placeholder="Email" />
        </FieldContainer>
        <TextArea placeholder="Description"></TextArea>
        <Button3D type="submit">Submit</Button3D>
      </ContactForm>
      </Container>
    );
  });

  
  export default ContactUs;