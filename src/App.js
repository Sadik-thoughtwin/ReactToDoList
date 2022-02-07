import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [item, setItem] = useState([]);
  const [ind, setInd] = useState(null);

  const ListData = () => {
   
    if (!inputList) {
      alert('Please add Task...')
    } else if (ind === null) {
      setItem([...item,inputList]);

      setInputList("");
    } else {
      item.splice(ind, 0, inputList);
      setInputList("");
    }
  };

      //  delete items
  const deleteItem = (id) => {
    const updatedItem = item.filter((itemval, index) => {
      return index !== id;
    });
    setItem(updatedItem);
  };

  //  Edit items
  const editItem = (id) => {
    let newEditItem = item.find((itemval, index) => {
      return id === index;
    });
    const data = item.splice(id, 1);
    setInd(id);
    setInputList(data.toString());
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <div>
            <input
              type="text"
              value={inputList}
              placeholder="Enter item name"
              onChange={(e) => setInputList(e.target.value)}
            />
            <button onClick={ListData}>+</button>
          </div>
          <div>
            {item.map((itemval, index) => {
              return (
                <div key={index} className="changes">
                  {itemval}
                  <i
                    className="fas fa-times"
                    onClick={() => deleteItem(index)}
                  ></i>
                  <i
                      className="fas fa-edit"
                      title="Edit Task"
                      onClick={() => editItem(index)}
                    >
                      &#xe22b;
                    </i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
