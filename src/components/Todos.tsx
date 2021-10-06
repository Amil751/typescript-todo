import React from "react";
import classes from './Todos.module.css';
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
const Todos= () => {
    const global=useContext(TodosContext)
  return (
    <div>
      <ul className={classes.todos}>
        {global.items.map((item) => {
          return (
            
              <TodoItem key={item.id} id={item.id} text={item.name}/>
            
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
