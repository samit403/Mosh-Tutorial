import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const ListGroup = props => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem
  } = props;
  //   console.log(props); //checking for plumbing (what props are coming here)
  return (
    <div className="list-group">
      {items.map(item => (
        <button
          key={item[valueProperty]}
          style={{ cursor: "pointer" }}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
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
