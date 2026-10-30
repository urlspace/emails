import UrlsLink from "./_components/urls-link";
import UrlsText from "./_components/urls-text";
import UrlsLayout from "./_components/urls-layout";

interface EmailChangeNotifyProps {
  NewEmail?: string;
}

export default function EmailChangeNotify({ NewEmail = "{{.NewEmail}}" }: EmailChangeNotifyProps) {
  return (
    <UrlsLayout>
      <UrlsText>
        The email address for your <strong style={{ fontWeight: 700 }}>url.space</strong> account was changed to{" "}
        <strong style={{ fontWeight: 700 }}>{NewEmail}</strong>.
      </UrlsText>
      <UrlsText>
        If you didn't make this change, contact us immediately at{" "}
        <UrlsLink href="mailto:mail@url.space">mail@url.space</UrlsLink>.
      </UrlsText>
    </UrlsLayout>
  );
}

EmailChangeNotify.PreviewProps = {
  NewEmail: "sylvester@stallone.com",
} satisfies EmailChangeNotifyProps;
