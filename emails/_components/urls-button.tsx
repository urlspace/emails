import { Link } from "react-email";

interface UrlsButtonProps {
  href: string;
  children: string;
}

export default function UrlsButton({ href, children }: UrlsButtonProps) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-block",
        backgroundColor: "#4d57b7",
        color: "#ffffff",
        fontWeight: 500,
        padding: "7px 14px",
        borderRadius: "4px",
        textDecoration: "none",
        marginBottom: "28px",
        fontSize: "15px",
      }}
    >
      {children}
    </Link>
  );
}
