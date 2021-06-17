import { memo } from "react";

interface Props {
  incr: () => void;
  decr: () => void;
}

const Counter = (props: Props) => {
  console.log("Render Counter");
  return (
    <div>
      <button onClick={props.incr}>Increase</button>
      <button onClick={props.decr}>Decrease</button>
    </div>
  );
};

export default memo(Counter);
