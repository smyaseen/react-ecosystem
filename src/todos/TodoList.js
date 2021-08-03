import React from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { isCompleted, removeTodo } from "./actions";
import "./TodoList.css";

const TodoList = ({ todos = [], onRemovePressed, isCompleted }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        todo={todo}
        onRemovePressed={onRemovePressed}
        isCompleted={isCompleted}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  isCompleted: (text) => dispatch(isCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
