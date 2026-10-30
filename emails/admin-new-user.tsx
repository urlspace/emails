import UrlsLayout from "./_components/urls-layout";
import UrlsEmail from "./_components/urls-email";
import UrlsDl from "./_components/urls-dl";
import UrlsText from "./_components/urls-text";

interface AdminNewUserProps {
  Username?: string;
  Email?: string;
}

export default function AdminNewUser({
  Username = "{{.Username}}",
  Email = "{{.Email}}",
}: AdminNewUserProps) {
  return (
    <UrlsLayout>
      <UrlsText>A new user verified their email on <strong style={{ fontWeight: 700 }}>url.space</strong>.</UrlsText>
      <UrlsDl
        items={[
          { term: "Username", value: Username },
          { term: "Email", value: <UrlsEmail email={Email} /> },
        ]}
      />
    </UrlsLayout>
  );
}

AdminNewUser.PreviewProps = {
  Username: "rocky",
  Email: "sylvester@stallone.com",
} satisfies AdminNewUserProps;
