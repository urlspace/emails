import { Section, Text } from "react-email";

interface UrlsOtpProps {
  code: string;
}

const cssSection = {
  margin: "0px 0px 28px 0px",
};

const cssText = {
  backgroundColor: "#f5f5f5",
  display: "inline-block",
  borderRadius: "4px",
  fontSize: "18px",
  padding: "7px 14px",
  letterSpacing: "4px",
  fontFamily: "monospace",
  whiteSpace: "nowrap",
};

export default function UrlsOtp({ code }: UrlsOtpProps) {
  return (
    <Section style={cssSection}>
      <Text style={cssText}>{code}</Text>
    </Section>
  );
}
