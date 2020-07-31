import React,{ useState } from "react";

function App() { 
const [note, setNote] = useState("");
const [items, setItems] = useState([]);

function handleChange(event){
  const newValue = event.target.value;
  setNote(newValue);
}

function addItem(){
  setItems((prevItems)=> {
    return [...prevItems, note];
  });
  setNote("");
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={note}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(toDoItem => <li>{toDoItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
