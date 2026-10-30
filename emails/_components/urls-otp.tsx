import { Section, Text } from "react-email";

interface UrlsOtpProps {
  code: string;
}

export default function UrlsOtp({ code }: UrlsOtpProps) {
  return (
    <Section className="urls-otp-section">
      <Text className="urls-otp-text">{code}</Text>
    </Section>
  );
}
