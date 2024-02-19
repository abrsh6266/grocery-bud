import { useState } from "react";
import Form from "./Form";
import Items from "./Items";
const setLocalStorage = (items) => {
  console.log("new added");
  localStorage.setItem("list", JSON.stringify(items));
};
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(list);
    return list;
  }
  else return []
};
const App = () => {
  const [items, setItems] = useState(getLocalStorage);
  return (
    <section className="section-center">
      <Form
        setItems={setItems}
        items={items}
        setLocalStorage={setLocalStorage}
      />
      <Items
        items={items}
        setItems={setItems}
        setLocalStorage={setLocalStorage}
      />
    </section>
  );
};

export default App;
