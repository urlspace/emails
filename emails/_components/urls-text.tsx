import type { ComponentProps } from "react";
import { Text } from "react-email";

export default function UrlsText({
  className,
  ...props
}: Omit<ComponentProps<typeof Text>, "style">) {
  return <Text {...props} className={["urls-text", className].filter(Boolean).join(" ")} />;
}
