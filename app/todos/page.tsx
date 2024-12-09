'use client';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';


interface ListItem {
  id: number;
  value: string;
};


export default function ToDoPage() {

  const [userInput, setUserInput] = useState<string>('');
  const [list, setList] = useState<ListItem[]>([]);
  const [editIndex, setEditIndex] = useState<number | null >(null);  // which item to edit 

  const updateInput = (value: string) => {
    setUserInput(value);
  };

  const handleAction = () => {
    if (userInput.trim() === "") return;
    if (editIndex !== null) {
      const updatedList = list.map((item, index) =>
        index === editIndex ? { ...item, value: userInput } : item);
      setList(updatedList);
      setEditIndex(null);
    } else {
      const newItem = {
        id: Math.random(),
        value: userInput
      };
      setList([...list, newItem]);
    }
    setUserInput("");
  };

  const deleteItem = (id: number) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  const startEdit = (index: number) => {
    setUserInput(list[index].value);
    setEditIndex(index);
  };


  return (
    <div className="container md:mx-auto pt-10">
      <div className="flex flex-col items-center py-5 ">
        <h1 className="font-bold text-2xl py-1"> Santa's To Do List </h1> 
        <br></br>
        <h2 className=""> Hot tip: only add things you really want or <em> need </em> to do! </h2>
      </div>

      <div className="grid justify-center  items-center py-10 text-l">
        <div className="auto-rows-auto "> 
         <input 
          className="w-96 rounded-sm border hover:border-1 active:outline-1:outline-slate-100 p-1 me-3"
          type="text"
          value={userInput}
          onChange={(e) => updateInput(e.target.value)}
        />
        <button onClick={handleAction}
          className={editIndex !== null ? "bg-emerald-600 hover:bg-emerald-900 p-1 rounded-md text-slate-50" : "bg-emerald-800 hover:bg-emerald-900 p-1 rounded-md text-slate-50"}>
          {editIndex !== null ? "Update" : "Add" }
        </button>
        </div>

        

        <div className=" auto-rows-auto mt-5">
        <ul className="grid grid-cols-1 col-auto odd:bg-white even:bg-stone-50">
          {list.map((item, index) => (
            <li className="p-1 flex justify-between items-center odd:bg-white even:bg-stone-50 border-2 border-stone-150" 
              key={item.id}>
                <span className="px-2"> {item.value} </span>
              <div>  


              <button className=" bg-amber-100 hover:bg-amber-200 p-1 m-1 rounded-md text-base "
                  onClick={() => startEdit(index)}>Edit</button>
              <button className=" bg-red-200 hover:bg-red-300 p-1 m-1 rounded-md  text-base "
                  onClick={() => deleteItem(item.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  )
};