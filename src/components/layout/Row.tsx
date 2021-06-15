import React, { FC } from "react";

interface Props {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Row: FC<Props> = ({ children, label, onClick }) => {
  return (
    <div className="container" onClick={onClick}>
      <div className="label">{label}</div>
      <div className="contents">{children}</div>
    </div>
  );
};

export default Row;
