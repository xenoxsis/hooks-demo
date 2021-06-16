import React, { useState } from "react";
import Counter from "../../callback/Counter";
import Number from "../../callback/Number";
import Todo from "../../callback/Todo";

const CallbackDemo = () => {
  console.log("Render CallbackDemo");

  //init items for Todo
  const [items, setItems] = useState([
    "1. Some todo",
    "2. Some todo",
    "3. Some todo",
  ]);

  //init number for Number and Counter
  const [number, setNumber] = useState(0);

  //add items for Todo
  const add = () => {
    setItems(() => [...items, "New todo"]);
  };

  //handler function for Counter
  const increase = () => {
    setNumber(number + 1);
  };

  //handler function for Counter
  const decrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <Todo items={items} add={add} />
      <Number number={number} />
      <Counter incr={increase} decr={decrease} />
    </div>
  );
};

export default CallbackDemo;
