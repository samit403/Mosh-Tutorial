import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const ListGroup = props => {
  const { items, textProperty, valueProperty } = props;

  return (
    <div className="list-group">
      {items.map(item => (
        <button
          key={item[valueProperty]}
          style={{ cursor: "pointer" }}
          className="list-group-item list-group-item-action"
          onClick={() => props.onItemSelect(item)}
        >
          {item[textProperty]}
        </button>
      ))}
    </div>
  );
};

export default ListGroup;
