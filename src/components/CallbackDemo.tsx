import React, { useCallback, useState } from "react";
import Counter from "./callback/Counter";
import Number from "./callback/Number";
import Todo from "./callback/Todo";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import "./layout/CallbackDemo.scss";

const CallbackDemo = () => {
  useDocumentTitle("useCallback Demo");
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
  const add = useCallback(() => {
    setItems(() => [...items, "New todo"]);
  }, [items]);

  //handler function for Counter
  const increase = useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  //handler function for Counter
  const decrease = useCallback(() => {
    setNumber(number - 1);
  }, [number]);

  return (
    <div className="callback-container">
      <Todo items={items} add={add} />
      <Number number={number} />
      <Counter incr={increase} decr={decrease} />
    </div>
  );
};

export default CallbackDemo;
