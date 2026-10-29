import UrlsLink from "./_components/urls-link";
import UrlsText from "./_components/urls-text";
import Layout from "./_components/layout";

export default function PasswordChangeNotify() {
  return (
    <Layout>
      <UrlsText>
        The password for your <strong style={{ fontWeight: 700 }}>url.space</strong> account was changed. As a precaution, you've been signed
        out of all devices.
      </UrlsText>
      <UrlsText>
        If you didn't make this change, contact us immediately at{" "}
        <UrlsLink href="mailto:mail@url.space">mail@url.space</UrlsLink>.
      </UrlsText>
    </Layout>
  );
}

PasswordChangeNotify.PreviewProps = {};
