import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  //Состояние элементов TodoList
  const [todoList, setTodoList] = useState([]);

  //Добавление нового элемента Todo с писок TodoList
  const addNewTodo = (item) => {
    const newTodo = {
      text: item,
      completed: true,
      id: uuidv4(),
    };
    setTodoList([...todoList, newTodo]);
  };

  //Смена статуса элемента Todo на выполнен/не выполнен
  const changeComplete = (id) => {
    console.log(id);
    let newTodo = [];
    todoList.map((todo) => {
      if (todo.id == id) {
        todo.completed ? (todo.completed = false) : (todo.completed = true);
      }
      console.log(todo.id);
      newTodo = [...newTodo, todo];
    });
    setTodoList(newTodo);
  };

  //Удаление элемента
  const dellTodo = (id) => {
    let newList = [];
    todoList.map((todo, index) => {
      if (todo.id == id) {
      } else {
        newList = [...newList, todo];
      }
    });
    setTodoList(newList);
  };

  //Удаление выполненных элементов / всех элементов, в зависимости от переменной completed
  const cleverDellTodo = (completed) => {
    let newList = [];
    todoList.map((todo) => {
      if (completed) {
        if (todo.completed) {
          newList = [...newList, todo];
        }
      } else {
      }
    });
    setTodoList(newList);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm buttonFunction={addNewTodo} listWithTodo={todoList} />
      <TodoList
        listWithTodo={todoList}
        dellTodo={dellTodo}
        changeComplete={changeComplete}
        cleverDellTodo={cleverDellTodo}
      />
    </div>
  );
}

export default App;
