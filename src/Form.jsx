import { nanoid } from "nanoid";

const Form = ({ items, toast,setItems, setLocalStorage }) => {
  return (
    <form
      className="form-control"
      onSubmit={(e) => {
        e.preventDefault();
        if(!e.currentTarget.name.value){
          toast.error('cannot add empty name')
          return
        }
        const newItem = {
          name: e.currentTarget.name.value,
          id: nanoid(),
          completed: false,
        };
        toast.success('item added to the list')
        setItems([...items, newItem]);
        setLocalStorage([...items, newItem])
      }}
    >
      <input name="name" type="text" className="form-input" />
      <button className="btn" type="submit" name="submit">
        Add Item
      </button>
    </form>
  );
};

export default Form;
