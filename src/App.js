import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount} from "./slice";
import { addTodo } from "./todo";
//import styles from "./Counter.module.css";

  function App() {
    const[task,setTask]=useState("")
  const state = useSelector((state) => state.counter);
    const stateTodo = useSelector((state) => state.todos);
  const dispatch = useDispatch();
const handleChange=(event)=>{
setTask(event.target.value)
}
 const addTodoAction = () => {
   dispatch(addTodo(task));
   setTask("")
 };
  return (
    <div>
      <div>
        <h1>{state.value}</h1>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
     
        <input type="text" value={task} onChange={handleChange} />
        <button onClick={addTodoAction}>AddTodo</button>
     
      {stateTodo.todos.map((ele)=>(
<li>{ele}</li>
      ))}
    </div>
  );
}
export default App;