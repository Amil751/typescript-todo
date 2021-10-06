import React, { Fragment } from "react";
import classes from "./TodoItem.module.css";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const TodoItem: React.FC<{ text: string ,id:string}> = (props) => {
    const global=useContext(TodosContext)
    const deleteTodo=()=>{
       global.removeTodo(props.id)
    }
  return (
    <Fragment>
      <li className={classes.item} onClick={deleteTodo}>{props.text} </li>
    </Fragment>
  );
};

export default TodoItem;
