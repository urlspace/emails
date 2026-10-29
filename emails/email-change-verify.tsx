import UrlsText from "./_components/urls-text";
import Layout from "./_components/layout";
import UrlsOtp from "./_components/urls-otp";

interface EmailChangeVerifyProps {
  Code?: string;
}

export default function EmailChangeVerify({ Code = "{{.Code}}" }: EmailChangeVerifyProps) {
  return (
    <Layout>
      <UrlsText>
        You requested to change the email address for your <strong style={{ fontWeight: 700 }}>url.space</strong> account. Enter this code to
        confirm the change:
      </UrlsText>
      <UrlsOtp code={Code} />
      <UrlsText>
        This code expires in 15 minutes. If you didn't request this change, you can ignore this
        email.
      </UrlsText>
    </Layout>
  );
}

EmailChangeVerify.PreviewProps = {
  Code: "123456",
} satisfies EmailChangeVerifyProps;
