import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

interface Props {
  text: string;
  id: number;
  isComplete: boolean;
  deleteToDo: (id: number) => void;
  toggle: (id: number) => void;
}

const ToDoItems = ({ text, id, isComplete, deleteToDo, toggle }: Props) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={isComplete ? tick : not_tick} alt="tick" className="w-7" />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoratopn-slate-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>

      <img
        src={delete_icon}
        alt="delete"
        className="w-3.5 cursor-pointer"
        onClick={() => deleteToDo(id)}
      />
    </div>
  );
};

export default ToDoItems;
