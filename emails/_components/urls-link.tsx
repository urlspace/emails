import { Link } from "react-email";

interface UrlsLinkProps {
  href: string;
  children: string;
}

export default function UrlsLink({ href, children }: UrlsLinkProps) {
  return (
    <Link href={href} className="urls-link">
      {children}
    </Link>
  );
}
