import * as React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Hr } from '@react-email/components';

interface ContactEmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  name,
  phone,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New contact form submission from your website</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New Inquiry from {name}</Heading>
        <Text style={paragraph}>You've received a new message through the contact form on your website.</Text>
        <Hr style={hr} />
        <Text style={label}>Name:</Text>
        <Text style={value}>{name}</Text>
        <Text style={label}>Phone Number:</Text>
        <Text style={value}>{phone}</Text>
        <Text style={label}>Email Address:</Text>
        <Text style={value}>{email}</Text>
        <Hr style={hr} />
        <Text style={label}>Message:</Text>
        <Text style={paragraph}>{message}</Text>
        <Hr style={hr} />
        <Text style={footer}>This email was sent from the contact form on delhi.motorkhan.com</Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginTop: '48px',
  textAlign: 'center' as const,
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
  padding: '0 20px',
};

const label = {
    ...paragraph,
    color: '#525f7f',
    fontWeight: 'bold',
    padding: '0 20px',
    marginBottom: '-10px',
}

const value = {
    ...paragraph,
    padding: '0 20px',
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0 20px',
};
