import React from "react";
import {TodoListItem} from './todo_list_item';
import TodoForm from "./todo_form";

const todoList = ({todos}) => {
  return (
    <>
      <ul>
        <h4>Todo List</h4>
        {todos.map(todo => (
          <TodoListItem todo={todo} key={todo.id}/>
        ))}
      </ul>
      < TodoForm receiveTodo={todos.receiveTodo}/>
    </>
  );
};

export default todoList;