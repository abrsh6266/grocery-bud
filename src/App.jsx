import { useState } from "react";
import Form from "./Form";

const App = () => {
  const [items, setItems] = useState("");
  return <section className="section-center">
    <h4>Grocery bud</h4>
    <Form />
  </section>;
};

export default App;
