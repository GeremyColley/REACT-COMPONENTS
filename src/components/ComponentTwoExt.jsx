import { useState } from "react";
import ComponentTwoInt from "./ComponentTwoInt";

// Memo

const ComponentTwoExt = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  console.log("Re-render ComponentTwoExt");
  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <>
      <ComponentTwoInt
        todos={todos}
        addTodo={addTodo}
      />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default ComponentTwoExt;