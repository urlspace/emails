import { Link } from "react-email";

interface UrlsButtonProps {
  href: string;
  children: string;
}

export default function UrlsButton({ href, children }: UrlsButtonProps) {
  return (
    <Link
      href={href}
      className="urls-button"
    >
      {children}
    </Link>
  );
}
