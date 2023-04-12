import React from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import Filter from "./Components/Filter";
import { useEffect, useState } from "react"

export default function App() {
  // onSave = (id, newValue) =>
  //   this.setState({
  //     todoList: this.state.todoList.map((item) =>
  //       id === item.id
  //         ? {
  //           ...item,
  //           name: newValue,
  //         }
  //         : item
  //     ),
  //   });


  return (
    <div id="main-container">
      <div id="header">
        <Header />
      </div>
      <div id="toDo-list">
        <ToDoList />
        <Filter />
      </div>
    </div>
  );
}
