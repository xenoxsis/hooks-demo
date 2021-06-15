import React, { useContext, useEffect, useState } from "react";
import Row from "../layout/Row";
import Section from "../layout/Section";
import { HookThemeContext, LocaleContext } from "../../context";

const Greetings = () => {
  const name = useFormInput("Mary");
  const surname = useFormInput("Poppins");
  const locale = useContext(LocaleContext);
  const theme = useContext(HookThemeContext);
  const width = useWindowWidth();
  useDocumentTitle(`${name.value} ${surname.value}`);

  return (
    <Section className={theme}>
      <Row label="Name">
        <input {...name} />
      </Row>
      <Row label="Surname">
        <input {...surname} />
      </Row>
      <Row label="Language">{locale}</Row>
      <Row label="Width">{width}</Row>
    </Section>
  );
};

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
};

const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, onChange: handleChange };
};

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default Greetings;
