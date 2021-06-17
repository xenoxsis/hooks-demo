import { memo } from "react";

interface Props {
  number: number;
}

const Number = (props: Props) => {
  console.log("Render Number");
  return (
    <div>
      <h2>Counter</h2>
      <p>The number is: {props.number}</p>
    </div>
  );
};

export default memo(Number);
