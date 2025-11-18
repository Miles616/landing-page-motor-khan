import * as React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Hr, Link, Img, Section, Button } from '@react-email/components';

interface ThankYouEmailTemplateProps {
  name: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://delhi.motorkhan.com';

export const ThankYouEmailTemplate: React.FC<Readonly<ThankYouEmailTemplateProps>> = ({
  name,
}) => (
  <Html>
    <Head />
    <Preview>Thank You for Contacting Motor Khan!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
            <Img
                src={`https://delhi.motorkhan.com/images/logo/motor-khan-rithala-rohini-delhi-darktheme.png`}
                width="80"
                height="80"
                alt="Motor Khan Logo"
            />
        </Section>
        <Heading style={heading}>Thank You for Your Inquiry, {name}!</Heading>
        <Text style={paragraph}>
            We have successfully received your message. Our team at Motor Khan appreciates you reaching out. We are reviewing your request and will get back to you as soon as possible, typically within 24 hours.
        </Text>
        <Text style={paragraph}>
            For immediate questions, you can always call us at <Link href="tel:+919871358670" style={callLink}>+91 9871358670</Link>.
        </Text>
        <Section style={buttonContainer}>
          <Button style={button} href="https://motorkhan.com">
            Visit Our Main Website
          </Button>
        </Section>
        <Text style={paragraph}>
            In the meantime, feel free to explore our main website to learn more about our comprehensive range of car care services.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Motor Khan | Shop No 12, Vijay Vihar Phase I, Rithala, Rohini, Delhi, 110085
        </Text>
        <Text style={footer}>
          You received this email because you submitted a contact form on our website.
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#0a0a0a',
  color: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#1a1a1a',
  margin: '0 auto',
  padding: '40px',
  borderRadius: '8px',
  width: '100%',
  maxWidth: '600px',
};

const logoContainer = {
    textAlign: 'center' as const,
    marginBottom: '30px',
};

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginTop: '0',
  textAlign: 'center' as const,
  color: '#ffffff',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
  color: '#cccccc',
};

const callLink = {
    color: '#3498db',
    textDecoration: 'none',
}

const buttonContainer = {
    textAlign: 'center' as const,
    margin: '30px 0',
}

const button = {
    backgroundColor: '#ffffff',
    color: '#0a0a0a',
    padding: '14px 20px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
}

const hr = {
  borderColor: '#333333',
  margin: '30px 0',
};

const footer = {
  color: '#888888',
  fontSize: '12px',
  lineHeight: '16px',
  textAlign: 'center' as const,
};
