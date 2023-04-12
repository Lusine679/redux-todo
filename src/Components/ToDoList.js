import React, { useMemo } from "react";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";
import { selectFilterData } from "../redux/filter";


import db from "../firebase";
import { onValue, ref } from "firebase/database";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react"

const ToDoList = (props) => {

 const [item, setItem] = useState([]);
  useEffect(() => {
    const unsab = onSnapshot(collection(db, "123"), (snapshot) => {
      setItem(snapshot.docs.map(doc => doc.data()));
    });

    return unsab;
  }, []);


  const toDoList = useSelector((state) => state.todo.toDoItems);
  const selectedFilterData = useSelector(selectFilterData);

  const filteredItems = useMemo(() => {
    return toDoList.filter((i) => {
      if (selectedFilterData === "all") {
        return true;
      }
      if (selectedFilterData === "checked") {
        return i.checked;
      }
      if (selectedFilterData === "unchecked") {
        return !i.checked;
      }
      return false;
    });
  }, [toDoList, selectedFilterData]);

  return (
    <>
    // filteredItems
      {item.map((toDo) => {
        // console.log(filteredItems);
        return <ToDoItem key={toDo.id} toDo={toDo} onSave={props.onSave} />;
      })}
    </>
  );
};

export default ToDoList;
