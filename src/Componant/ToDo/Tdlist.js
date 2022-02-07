const Tdlist = () => {
    const [inputList, setInputList] = useState("");
    const [item, setItem] = useState([]);
  
    const itemData = (e) => {
      setInputList(e.target.value);
    };
  
    const ListData = () => {
      if (!inputList) {
      } else {
        
        setItem((oldItem) => {
          return [...oldItem, inputList];
        });
        setInputList("");
      }
    };
  
    const deleteItem = (id) => {
      // console.log("itemDeleted")
      setItem((oldItem) => {
        return oldItem.filter((arrElem, index) => {
          return index !== id;
        });
      });
    };
    return (
      <>
        <div className="main_div">
          <div className="center_div">
            <h1>ToDo List</h1>
            <input
              type="text"
              value={inputList}
              placeholder="Enter item name"
              onChange={itemData}
            />
            <button onClick={ListData}>+</button>
            {/* <button className="editbtn" onClick={EditItem}><i class="fas fa-edit"></i></button> */}
            <ol>
              {item.map((itemval, index) => {
                return (
                  <div>
                    {/* <EditItem /> */}
                    <ToDolist
                      key={index}
                      id={index}
                      text={itemval}
                      onSelect={deleteItem}
                    />
                    
                  </div>
                );
              })}
            </ol>
          </div>
        </div>
      </>
    );
  };
  