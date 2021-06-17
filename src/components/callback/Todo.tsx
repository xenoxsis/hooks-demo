import { memo } from "react";

interface Props {
  items: string[];
  add: () => void;
}

const Todo = (props: Props) => {
  console.log("Render Todo");
  return (
    <div>
      <h2>My Todo</h2>
      {props.items.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
      <button onClick={props.add}>Add Todo</button>
    </div>
  );
};

export default memo(Todo);
