import { Link } from "react-email";

interface UrlsLinkProps {
  href: string;
  children: string;
}

export default function UrlsLink({ href, children }: UrlsLinkProps) {
  return (
    <Link href={href} style={{ color: "#4d57b7" }}>
      {children}
    </Link>
  );
}
