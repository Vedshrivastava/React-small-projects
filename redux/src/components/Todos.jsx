import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Todos() {
  const todos = useSelector(state => state.todo.todos); // Correctly access the part of the state

  console.log(todos);

  return (
    <div>
      <h1>Todos</h1>
    </div>
  );
}

export default Todos;
