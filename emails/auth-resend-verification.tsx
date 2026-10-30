import UrlsButton from "./_components/urls-button";
import UrlsText from "./_components/urls-text";
import UrlsLayout from "./_components/urls-layout";

interface AuthResendVerificationProps {
  Url?: string;
}

export default function AuthResendVerification({ Url = "{{.Url}}" }: AuthResendVerificationProps) {
  return (
    <UrlsLayout>
      <UrlsText>
        You requested a new verification link for your <strong style={{ fontWeight: 700 }}>url.space</strong> account. This link will expire in
        24 hours.
      </UrlsText>
      <UrlsButton href={Url}>Verify your email address</UrlsButton>
    </UrlsLayout>
  );
}

AuthResendVerification.PreviewProps = {
  Url: "https://url.space/auth/signup/123",
} satisfies AuthResendVerificationProps;
