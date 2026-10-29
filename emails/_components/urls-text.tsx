import type { ComponentProps } from "react";
import { Text } from "react-email";

const text = {
  margin: "0px 0px 28px 0px",
  fontSize: "16px",
};

export default function UrlsText(props: Omit<ComponentProps<typeof Text>, "style">) {
  return <Text style={text} {...props} />;
}
