import React, { useState, useEffect } from "react";
import ColumnInput from "./columnInput";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import db from "../config/db";
import uuid from "uuid/v4";

const Column = props => {
  const [item, setItem] = useState({
    addItem: false,
    blur: false,
    value: "",
    id: ""
  });
  const [columnInput, setColumnInput] = useState({ item: [], id: "0" });

  const handleColumnItems = () => {
    setItem({
      addItem: true
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (/[a-z]/gi.test(item.value) === false || item.value == undefined)
      setItem({
        ...item,
        value: ""
      });
    else {
      db.collection("users")
        .doc(localStorage.getItem("email"))
        .set(
          {
            columns: {
              [uuid()]: {
                items: [{ id: uuid(), content: item.value }]
              }
            }
          },
          { merge: true }
        );

      {
        /*Sets columns when it should set the array of items, need to
        fix for both adding columns and adding items */
      }

      setColumnInput({
        item: [...columnInput.item, item.value],
        id: columnInput.id + 1
      });
      setItem({
        ...item,
        value: ""
      });
    }
    console.log(columnInput, columnInput.id);
  };

  const handleChange = e => {
    console.log(e, "this is the event");
    setItem({
      ...item,
      value: [e.target.value]
    });
    console.log("this is the value:" + item.value);
  };

  const handleBlur = () => {
    setItem({
      addItem: false
    });
  };

  const dragEnd = result => {
    //todo
  };

  const style = {
    border: "1px solid #fff",
    borderRadius: "2px",
    color: "#fff",
    width: "20rem",
    height: "30rem",
    fontSize: "2rem",
    margin: "1rem"
  };

  const span = {
    cursor: "pointer",
    marginTop: "10px",
    display: "block"
  };

  return (
    <DragDropContext onDragEnd={dragEnd}>
      <div style={style} key={props.key}>
        {columnInput.item ? (
          <Droppable droppableId={columnInput.id + "droppable"}>
            {droppableProvided => (
              <ul
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
              >
                {columnInput.item.map((value, i) => (
                  <Draggable
                    draggableId={columnInput.item.toString()}
                    index={i}
                  >
                    {draggableProvided => (
                      <li
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                        ref={draggableProvided.innerRef}
                        key={i}
                      >
                        {value}
                      </li>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </ul>
            )}
          </Droppable>
        ) : null}

        {item.addItem ? null : (
          <span style={span} onClick={handleColumnItems}>
            + add item
          </span>
        )}

        {item.addItem ? (
          <ColumnInput
            submit={handleSubmit}
            blur={handleBlur}
            change={handleChange}
            value={item.value}
          />
        ) : null}
      </div>
    </DragDropContext>
  );
};

export default Column;
