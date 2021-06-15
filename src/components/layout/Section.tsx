import React, { FC } from "react";
import "./Section.scss";

interface Props {
  className?: string;
}

const Section: FC<Props> = ({ children, className }) => {
  return <section className={className ?? "default"}>{children}</section>;
};

export default Section;
