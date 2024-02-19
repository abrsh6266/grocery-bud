import { useState } from "react";

const SingleItem = ({ item, index, removeItems, editItem }) => {
  return (
    <div className="single-item">
      <input type="checkbox" onChange={() => editItem(item.id)} />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: !item.completed && "line-through",
        }}
      >
        {index + 1} {item.name}
      </p>
      <button
        className="btn remove-btn"
        onClick={() => {
          removeItems(item.id);
        }}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
