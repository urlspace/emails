import UrlsButton from "./_components/urls-button";
import UrlsEmail from "./_components/urls-email";
import UrlsText from "./_components/urls-text";
import UrlsLayout from "./_components/urls-layout";
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
    <UrlsLayout>
      <UrlsText>Welcome to <strong style={{ fontWeight: 700 }}>url.space</strong>! Verify your email address to get started.</UrlsText>
      <UrlsDl
        items={[
          { term: "Username", value: Username },
          { term: "Email", value: <UrlsEmail email={Email} /> },
        ]}
      />
      <UrlsButton href={Url}>Verify your email address</UrlsButton>
      <UrlsText>This link will expire in 24 hours.</UrlsText>
    </UrlsLayout>
  );
}

AuthSignup.PreviewProps = {
  Username: "rocky",
  Email: "sylvester@stallone.com",
  Url: "https://url.space/auth/signup/123",
} satisfies AuthSignupProps;
