import { nanoid } from "nanoid";

const Form = ({ items, setItems }) => {
  return (
    <form
      className="form-control"
      onSubmit={(e) => {
        e.preventDefault();
        const newItem = {
          name: e.currentTarget.name.value,
          id: nanoid(),
          defaultValue: false,
        };
        console.log(newItem);
        setItems([...items, newItem]);
      }}
    >
      <input name="name" type="text" className="form-input" id="" />
      <button className="btn" type="submit" name="submit">
        Add Item
      </button>
    </form>
  );
};

export default Form;
