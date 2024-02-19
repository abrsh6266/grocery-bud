import { useState } from "react";
import Form from "./Form";
import Items from "./Items";

const App = () => {
  const [items, setItems] = useState([]);
  console.log(items)
  return <section className="section-center">
    <Form setItems={setItems} items={items}/>
    <Items items={items}/>
  </section>;
};

export default App;
