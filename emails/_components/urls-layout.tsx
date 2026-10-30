import type { ReactNode } from "react";
import { Body, Container, Font, Head, Html, Link } from "react-email";

import buttonCss from "./urls-button.css?inline";
import layoutCss from "./urls-layout.css?inline";
import dlCss from "./urls-dl.css?inline";
import emailCss from "./urls-email.css?inline";
import linkCss from "./urls-link.css?inline";
import otpCss from "./urls-otp.css?inline";
import textCss from "./urls-text.css?inline";

const body = {
  fontFamily: '"Noto Sans", sans-serif',
  fontSize: "16px",
  lineHeight: "28px",
  padding: "0px",
  margin: "0px",
};

const container = { maxWidth: "600px", padding: "56px 28px 28px 28px" };
const logo = {
  fontSize: "24px",
  fontWeight: "900",
  color: "inherit",
  textDecoration: "underline",
  textDecorationThickness: "3px",
  textUnderlineOffset: "0",
  marginBottom: "28px",
  display: "inline-block",
};

export default function UrlsLayout({ children }: { children: ReactNode }) {
  return (
    <Html lang="en">
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <style>{[layoutCss, buttonCss, dlCss, emailCss, linkCss, otpCss, textCss].join("\n")}</style>
        <Font
          fontFamily="Noto Sans"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: "https://fonts.gstatic.com/s/notosans/v42/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyDPA99d.ttf",
            format: "truetype",
          }}
          fontWeight={500}
          fontStyle="normal"
        />
        <Font
          fontFamily="Noto Sans"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: "https://fonts.gstatic.com/s/notosans/v42/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A99d.ttf",
            format: "truetype",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Noto Sans"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: "https://fonts.gstatic.com/s/notosans/v42/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyAaBN9d.ttf",
            format: "truetype",
          }}
          fontWeight={700}
          fontStyle="normal"
        />
        <Font
          fontFamily="Noto Sans"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: "https://fonts.gstatic.com/s/notosans/v42/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyBUBN9d.ttf",
            format: "truetype",
          }}
          fontWeight={900}
          fontStyle="normal"
        />
      </Head>
      <Body className="urls-layout" style={body}>
        <Container style={container}>
          <Link style={logo} href="https://url.space">
            ~
          </Link>
          {children}
        </Container>
      </Body>
    </Html>
  );
}
