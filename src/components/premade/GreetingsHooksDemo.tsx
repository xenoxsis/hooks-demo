import React, {
  ChangeEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Row from "../layout/Row";
import Section from "../layout/Section";
import { HookThemeContext, LocaleContext } from "../../context";

const Greetings = () => {
  const name = useFormInput("Mary");
  const surname = useFormInput("Poppins");
  const theme = useContext(HookThemeContext);
  const language = useContext(LocaleContext);
  const width = useWindowWidth();
  const inputRef = useRef<HTMLInputElement | null>(null);
  useDocumentTitle(name.value + " " + surname.value);

  return (
    <Section className={theme}>
      <Row label="Name">
        <input {...name} ref={inputRef} />
      </Row>
      <Row label="Surname">
        <input {...surname} />
      </Row>
      <Row label="Language" onClick={() => inputRef.current?.focus()}>
        {language}
      </Row>
      <Row label="Width">{width}</Row>
    </Section>
  );
};

const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
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

export default Greetings;
