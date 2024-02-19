import React from "react";
import SingleItem from "./SingleItem";
const Items = ({ items, setItems, setLocalStorage }) => {
  const removeItems = (id) => {
    setItems((cur) => {
      const newItem = cur.filter((c) => c.id != id);
      setLocalStorage(newItem);
      return newItem;
    });
  };
  const editItem = (id) => {
    const newItems = items.map((c) => {
      if (c.id === id) {
        const newItem = { ...c, completed: !c.completed };
        return newItem;
      }
      return c;
    });
    setLocalStorage(newItems);
    setItems(newItems);
  };
  return (
    <div className="items">
      {items.map((item, index) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            index={index}
            removeItems={removeItems}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
