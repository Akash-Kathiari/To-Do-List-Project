import React from "react";
import ToDoItem from "./ToDoItem";

function App() {
  //track the change for input field
  const [inputText, setInputText] = React.useState("");
  //set items into array & display them
  const [item, setItem] = React.useState([]);

  function handleOnChange(props) {
    const newValue = props.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItem((preValue) => {
      return [...preValue, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItem((preValue) => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });

    // setItem((preValue) => {}); //find the index of them item and compare it to the other indexs. filter out the item with a matching index
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleOnChange} value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((eachItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={eachItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
