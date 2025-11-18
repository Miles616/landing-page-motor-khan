import * as React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Hr, Link } from '@react-email/components';

interface ThankYouEmailTemplateProps {
  name: string;
}

export const ThankYouEmailTemplate: React.FC<Readonly<ThankYouEmailTemplateProps>> = ({
  name,
}) => (
  <Html>
    <Head />
    <Preview>Thank You for Contacting Motor Khan!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Thank You, {name}!</Heading>
        <Text style={paragraph}>We have received your message and appreciate you reaching out to Motor Khan. One of our team members will get back to you shortly.</Text>
        <Text style={paragraph}>In the meantime, feel free to visit our main website to learn more about our services.</Text>
        <Link href="https://motorkhan.com" style={link}>Visit motorkhan.com</Link>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you submitted a contact form on <Link href="https://delhi.motorkhan.com" style={footerLink}>delhi.motorkhan.com</Link>.
        </Text>
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

const link = {
    ...paragraph,
    color: '#1a73e8',
    textDecoration: 'underline',
    textAlign: 'center' as const,
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

const footerLink = {
    color: '#8898aa',
    textDecoration: 'underline',
}
