import { useState } from "react";
import Form from "./Form";

const App = () => {
  const [items, setItems] = useState([]);
  console.log(items)
  return <section className="section-center">
    <Form setItems={setItems} items={items}/>
  </section>;
};

export default App;
