import React from "react";
import Row from "./layout/Row";
import Section from "./layout/Section";

interface Props {
  name?: string;
}

const Greetings = (props: Props) => {
  return (
    <Section>
      <Row label="Name">{props.name}</Row>
    </Section>
  );
};

export default Greetings;
