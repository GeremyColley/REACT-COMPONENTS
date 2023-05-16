import { memo } from "react";

const ComponentTwoInt = ({ todos, addTodo }) => {
  console.log("Re-render ComponentTwoInt");
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

export default memo(ComponentTwoInt);