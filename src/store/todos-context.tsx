import React, { createContext } from "react";
import Todo from "../models/todo";
import { useState } from "react";
type todosContexttype={
    items: Todo[];
    addTodo: (text:string) => void;
    removeTodo: (id: string) => void;
}
export const TodosContext = createContext<todosContexttype>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});


const TodosContextProvider: React.FC = (props) => {
  const [todo, setTodo] = useState<Todo[]>([]);

  const addTodo = (newtodo: string) => {
    const todos = new Todo(newtodo);
    setTodo((prevState) => {
      return prevState.concat(todos);
    });
  };

  const deleteTodos = (id: string) => {
    const a = todo.filter((item) => item.id !== id);
    setTodo(a);
  };
 
  const contextValue: todosContexttype = {
    items: todo,
    addTodo: addTodo,
    removeTodo: deleteTodos,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;
