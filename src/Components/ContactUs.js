import React, { forwardRef, useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styled from 'styled-components';


const Container = styled.div`
  margin-bottom: 100px;

`

const ContactForm = styled.form`
  max-width: 900px;
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
    
  }

  @media (max-width: 700px) {
    width: 105%;
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
    width: 95%;
  }
`;


const Button3D = styled.button`
  background-color: #E02424;
  border: none;
  width: 100%;
  height: 60px;
  font-size: 20px; 
  border-radius: 5px; 
  cursor: pointer;
  display: block;
    margin-left: auto;
    margin-right: auto; 
  
  
  transition: all 0.3s ease;
  margin-top: 35px;

  @media (max-width: 1000px) {
    display: block;
    margin-left: auto;
    padding: 18px ;
    margin-right: auto; 
    width: 100%;
  }

  @media (max-width: 700px) {
    
    width: 105%;
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

const SubmittedFormContainer = styled.div`
  max-width: 700px;
  margin: 0 auto; // Center the container
  padding: 40px;
  
  border-radius: 70px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    width: calc(100% - 70px); // Adjust the width based on the padding
    padding: 40px 20px;
    
   
  }
`;


const SubmittedFormField = styled.div`
   display: flex;
  flex-direction: column; // Stack items vertically
  align-items: flex-start; // Align items to the start of the container
  width: 100%;
  margin-bottom: 30px;

  @media (max-width: 1001px) {
    flex-direction: column; // On smaller screens, stack them vertically
    & > * {
      width: 100%; // Ensure full width on smaller screens
      margin-right: 0; // Remove margin-right on smaller screens
    }
  }
`;

const SubmittedFormLabel = styled.div`
   /* This is a dark gray, cooler and lighter than black */
color: #333333;
  font-size: 19px;
  font-family: 'Roboto', sans-serif;
  
  min-width: 100px; // Optional: Set a minimum width for the label
  margin-bottom: 15px;
 
`;

const SubmittedFormData = styled.div`
  color: #555;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  padding: 15px;
  border-radius: 20px;
  border: 1px solid black;
  flex-grow: 1;
  
  overflow-wrap: break-word;
  word-wrap: break-word;
  max-height: 500px;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  white-space: pre-wrap; 
  width: 100%; // Set width to fill the parent container
`;


const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const ContactUs = forwardRef((props, ref) => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = new FormData(form.current);
    setFormData({
      name: data.get('user_name'),
      email: data.get('user_email'),
      message: data.get('user_message')
    });

    emailjs.sendForm('service_k66zxis', 'template_6qyhkpb', form.current, 'wXoasOPVtxw7WJgHe')
      .then((result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setIsLoading(false);
      }, (error) => {
          console.log(error.text);
          setIsLoading(false);
      });
  };

  const formControls = useAnimation();
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (formInView) {
      formControls.start('visible');
    }
  }, [formControls, formInView]);

  
    return (
      <Container ref={ref}>
        <Title>Contact Us</Title>
        <SmallText>We're here to help with any inquiries or feedback you have</SmallText>
        {!isSubmitted ? (
          <motion.div
            ref={formRef}
            initial="hidden"
            animate={formControls}
            variants={fadeInUpVariants}
          >
            <ContactForm onSubmit={sendEmail} ref={form}>
              <FieldContainer>
                <Input type="text" name="user_name" placeholder="Name" disabled={isLoading} />
              </FieldContainer>
              <FieldContainer>
                <Input type="email" name="user_email" placeholder="Email" disabled={isLoading} />
              </FieldContainer>
              <TextArea name="user_message" placeholder="Message" disabled={isLoading}></TextArea>
              <Button3D type="submit" disabled={isLoading}>Submit</Button3D>
            </ContactForm>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
          >
            <SubmittedFormContainer>
              <SubmittedFormField>
                <SubmittedFormLabel>Name:</SubmittedFormLabel>
                <SubmittedFormData>{formData.name}</SubmittedFormData>
              </SubmittedFormField>
              <SubmittedFormField>
                <SubmittedFormLabel>Email:</SubmittedFormLabel>
                <SubmittedFormData>{formData.email}</SubmittedFormData>
              </SubmittedFormField>
              <SubmittedFormField>
                <SubmittedFormLabel>Message:</SubmittedFormLabel>
                <SubmittedFormData>{formData.message}</SubmittedFormData>
              </SubmittedFormField>
            </SubmittedFormContainer>
          </motion.div>
        )}
      </Container>
    );
  });
  

export default ContactUs;