import UrlsButton from "./_components/urls-button";
import UrlsText from "./_components/urls-text";
import Layout from "./_components/layout";
import UrlsDl from "./_components/urls-dl";

interface AuthSignupProps {
  Username?: string;
  Email?: string;
  Url?: string;
}

export default function AuthSignup({
  Username = "{{.Username}}",
  Email = "{{.Email}}",
  Url = "{{.Url}}",
}: AuthSignupProps) {
  return (
    <Layout>
      <UrlsText>Welcome to <strong style={{ fontWeight: 700 }}>url.space</strong>! Verify your email address to get started.</UrlsText>
      <UrlsDl
        items={[
          { term: "Username", value: Username },
          { term: "Email", value: Email },
        ]}
      />
      <UrlsButton href={Url}>Verify your email address</UrlsButton>
      <UrlsText>This link will expire in 24 hours.</UrlsText>
    </Layout>
  );
}

AuthSignup.PreviewProps = {
  Username: "rocky",
  Email: "sylvester@stallone.com",
  Url: "https://url.space/auth/signup/123",
} satisfies AuthSignupProps;
