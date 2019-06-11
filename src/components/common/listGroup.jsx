import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const ListGroup = props => {
  const { items, textProperty, valueProperty } = props;
  console.log(props); //checking for plumbing (what props are coming here)
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

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
