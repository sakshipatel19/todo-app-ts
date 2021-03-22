import React, { useState }  from 'react';

import './App.css';

interface ITodo {
  id : number,
  text : string,
  isComplete : boolean
}
function App():JSX.Element{
  const [value ,setValue] =useState<string>("");
  const [todos,setTodo] =useState<ITodo[]>([]);
  const addTodo =() =>{
    const newTodo :ITodo[] = [...todos,{id:todos.length +1,text:value,isComplete:false}];
      setTodo(newTodo);
      setValue('');
  }
  return(
    <div className="app">
      <h1>TODO's List</h1>
      <input type="text" value={value} onChange={ (e) =>setValue(e.target.value)}/>
      <button onClick={()=>addTodo()}>Add TODO</button>
      {todos.map((todo : ITodo) =><div className="todo" style={{textDecoration : !todo.isComplete ? "underlined" :undefined}}>{todo.text}</div> )}
    </div>
  )
}

export default App;
