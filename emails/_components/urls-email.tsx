import { Link } from "react-email";

interface UrlsEmailProps {
  email: string;
}

export default function UrlsEmail({ email }: UrlsEmailProps) {
  return (
    <Link
      href={`mailto:${email}`}
      className="urls-email"
    >
      {email}
    </Link>
  );
}
