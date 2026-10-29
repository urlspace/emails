import { Column, Row, Section, Text } from "react-email";

interface UrlsDlProps {
  items: { term: string; value: string }[];
}

const cssterm = { fontSize: "13px", opacity: ".5", margin: "0" };
const cssvalue = { fontSize: "16px", fontWeight: "700", margin: "0" };

export default function UrlsDl({ items }: UrlsDlProps) {
  return (
    <Section style={{ paddingBottom: "28px" }}>
      {items.map(({ term, value }, index) => (
        <Row key={index}>
          <Column
            style={{
              paddingBottom: index === items.length - 1 ? "0px" : "7px",
            }}
          >
            <Text style={cssterm}>{term}</Text>
            <Text style={cssvalue}>{value}</Text>
          </Column>
        </Row>
      ))}
    </Section>
  );
}
