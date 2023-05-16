import { memo } from "react";

// useCallBack

const ComponentTwoOneInt = ({ todos, addTodo }) => {
  console.log("Re-render ComponentTwoOneInt");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(ComponentTwoOneInt);