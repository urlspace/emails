import UrlsButton from "./_components/urls-button";
import UrlsText from "./_components/urls-text";
import UrlsLayout from "./_components/urls-layout";

interface AuthResetPasswordRequestProps {
  Url?: string;
}

export default function AuthResetPasswordRequest({
  Url = "{{.Url}}",
}: AuthResetPasswordRequestProps) {
  return (
    <UrlsLayout>
      <UrlsText>
        You requested a password reset for your <strong style={{ fontWeight: 700 }}>url.space</strong> account. This link expires in 1 hour.
      </UrlsText>
      <UrlsButton href={Url}>Reset your password</UrlsButton>
      <UrlsText>If you didn't request this, you can ignore this email.</UrlsText>
    </UrlsLayout>
  );
}

AuthResetPasswordRequest.PreviewProps = {
  Url: "https://url.space/auth/reset-password/123",
} satisfies AuthResetPasswordRequestProps;
