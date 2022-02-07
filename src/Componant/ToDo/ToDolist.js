import React from "react";
// import { NavItem } from "react-bootstrap";

export default function ToDolist(props) {

    
  return (
    <div className="todo_style">
      <i
        className="fas fa-times"
        onClick={() => {
          props.onSelect(props.id);
        }}
      ></i>
      <i
        className="fas fa-edit"
        onClick={() => {
            props.onEdit(props.id)
        }}
      ></i>
      
      
      <li>{props.text}</li>
    </div>
  );
}
