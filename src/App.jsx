import { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { ToastContainer,toast } from "react-toastify";
const setLocalStorage = (items) => {
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
      <ToastContainer position="top-center"/>
      <Form
        setItems={setItems}
        items={items}
        setLocalStorage={setLocalStorage}
        toast={toast}
      />
      <Items
        items={items}
        setItems={setItems}
        setLocalStorage={setLocalStorage}
        toast={toast}
      />
    </section>
  );
};

export default App;
