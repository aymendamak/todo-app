import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import ToDoItems from "./ToDoItems";

interface Todo {
  text: string;
  id: number;
  isComplete: boolean;
}

const Todo = () => {
  const inputRef = useRef<HTMLDivElement | null>(null);

  const [todoList, setTodoList] = useState([]);

  const add = () => {
    //if (inputRef && inputRef.current) {
    const inputText = inputRef.current.value.trim();
    console.log(inputRef, inputText);
    if (inputText === "") {
      return null;
    }
    const newTodo: Todo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
    //}
  };

  const deleteToDo = (id) => {
    setTodoList((prev: Todo[]) => {
      return prev.filter((todo: Todo) => todo.id !== id);
    });
  };

  const toggle = (id: number) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo: Todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }

        return todo;
      });
    });
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div
      className="bg-white place-self-center w-11/12 
    max-w-md flex flex-col p-7 
    min-h-[550px] rounded-xl"
    >
      <div className="flex items-center mt-7 gap-2">
        <img src={todo_icon} alt="todo icon" className="w-8" />
        <h1 className="text-3xl font-semibold ">To Do List</h1>
      </div>

      <div className="flex items-center my-7 bg-gray-200 rounded-xl">
        <input
          ref={inputRef}
          type="text"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-xl bg-sky-400  w-32 h-14 text-white text-lg font-medium cursor-pointer "
        >
          NEW TASK
        </button>
      </div>

      <div className="">
        {todoList.map((item, key) => (
          <ToDoItems
            key={key}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteToDo={deleteToDo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
