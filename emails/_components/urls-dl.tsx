import type { ReactNode } from "react";
import { Column, Row, Section, Text } from "react-email";

interface UrlsDlProps {
  items: { term: string; value: ReactNode }[];
}

export default function UrlsDl({ items }: UrlsDlProps) {
  return (
    <Section tdClassName="urls-dl-section">
      {items.map(({ term, value }, index) => (
        <Row key={index}>
          <Column
            className={
              index === items.length - 1
                ? "urls-dl-item urls-dl-item-last"
                : "urls-dl-item"
            }
          >
            <Text className="urls-dl-term">{term}</Text>
            <Text className="urls-dl-value">{value}</Text>
          </Column>
        </Row>
      ))}
    </Section>
  );
}
