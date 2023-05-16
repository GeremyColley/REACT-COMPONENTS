import { useState, useCallback } from "react";
import ComponentTwoOneInt from "./ComponentTwoOneInt";

// useCallBack

const ComponentTwoOneExt = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  console.log("Re-render ComponentTwoOneExt");

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, []);

  return (
    <>
      <ComponentTwoOneInt
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

export default ComponentTwoOneExt;