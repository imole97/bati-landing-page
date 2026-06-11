import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const logoUrl = process.env.NEXT_PUBLIC_LOGO_URL

export const ContactEmail = ({
  name,
  email,
  company,
  message,
}: ContactEmailProps) => {
  const previewText = `New Inquiry from ${name} at ${company || "No Company"}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                background: "#f8f7f4",
                foreground: "#1a1a1a",
                accentOrange: "#d4772c",
                accentGreen: "#2d6a4f",
                accentBlue: "#1b4965",
                muted: "#6b7280",
                border: "#e5e5e5",
              },
            },
          },
        }}
      >
        <Body className="bg-background my-auto mx-auto font-sans text-foreground">
          <Container className="border border-border rounded my-[40px] mx-auto p-[30px] max-w-[500px] bg-white text-center">
            <Section className="mt-[20px] mb-[20px] w-full text-center">
              <Img
                src={logoUrl}
                width="160"
                height="auto"
                alt="Batty Capital"
                className="my-0 mx-auto block"
              />
            </Section>
            
            <Heading className="text-foreground text-[24px] font-normal text-center p-0 my-[30px] mx-0" style={{ fontFamily: "Georgia, serif" }}>
              <strong>New Contact Inquiry</strong>
            </Heading>
            
            <Text className="text-foreground text-[15px] leading-[26px] text-left">
              Hello Team,
            </Text>
            
            <Text className="text-foreground text-[15px] leading-[26px] text-left">
              You have a new contact form submission from the BATIVILLE Trading Co website. Here are the details:
            </Text>

            <Section className="bg-background rounded-lg p-6 my-6 border border-border text-left">
              <Text className="text-foreground text-[15px] leading-[26px] m-0">
                <strong>Name:</strong> {name}
              </Text>
              <Text className="text-foreground text-[15px] leading-[26px] mt-[12px] mb-0">
                <strong>Email:</strong> {email}
              </Text>
              {company && (
                <Text className="text-foreground text-[15px] leading-[26px] mt-[12px] mb-0">
                  <strong>Company:</strong> {company}
                </Text>
              )}
            </Section>

            <Hr className="border border-border my-[24px] mx-0 w-full" />
            
            <Heading className="text-accentBlue text-[18px] font-semibold m-0 text-left" style={{ fontFamily: "Georgia, serif" }}>
              Message:
            </Heading>

            <Text className="text-foreground text-[15px] leading-[26px] whitespace-pre-wrap rounded-md bg-white p-0 italic text-left">
              &quot;{message}&quot;
            </Text>

            <Hr className="border border-border my-[24px] mx-0 w-full" />
            
            <Text className="text-muted text-[13px] leading-[24px] text-center">
              This email was generated automatically by the BATIVILLE Trading Co contact form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
