import { useState } from "react";

// Array.from({ length: 20 }, (_, i) => i + 1)}
// creates an array with 20 elements from 1-20
// map function creates array of option elements with the given array of values; need a key when rendering lists
// React then renders list to the component
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState(""); // state will become a value of the input field
  const [numberOf, setNumberOf] = useState(1);

  // event handler to submit form information when "add" button clicked
  // set onSubmit event in form to handleSubmit (remember NOT to call the function)
  // preventDefault() prevents JS from reloading site whenever form is submitted
  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;

    const newItem = { description, numberOf, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setNumberOf(1); // reset form state variables
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for you trip?</h3>
      <select
        value={numberOf}
        onChange={(e) => setNumberOf(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
