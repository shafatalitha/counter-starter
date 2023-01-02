// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import shoppingIcon from "./assets/shopping-icon.svg";
import minusIcon from "./assets/minus-icon.svg";
import plusIcon from "./assets/plus-icon.svg";
function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    { title: "Matcha", count: 1 },
    { title: "Mendoan", count: 1 },
    { title: "Tahu", count: 1 },
  ]);
  const handleSubmit=(e)=>{
    e.preventDefault()

    if(!value){
      alert('nilai kosong!')
      return
    }

    const addedTodos =[...todos,{
      title:value,
      count:1
    }]
    setTodos(addedTodos)
    setValue('')
  }

  const handleAdditionCount = (index) => {
    const newTodos = [...todos];

    newTodos[index].count = newTodos[index].count + 1;
    setTodos(newTodos);
  };

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].count>0){
      newTodos[index].count = newTodos[index].count -1
    }else{
      // kalau udah 0 dan masih dikurangin juga
      // hapus array value dengan index yang sesuai 
      newTodos.splice(index, 1)
    }
    setTodos(newTodos);
  };

  return (
    <>
      <nav className="nav">
        <img className="nav-icon" src={shoppingIcon} alt="shopping icon" />
        <h1 className="nav-title">Shoppping List</h1>
      </nav>

      <section className="container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            className="input"
            type="text"
            placeholder="list"
          />
          <button className="add-button">add</button>
        </form>
        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo, index, arr) => {
              return (
                <div
                  key={index}
                  className={`todo ${
                    !(arr.length === index + 1) && "todo-divider"
                  }`}
                >
                  {todo.title}
                  <div className="todo-icon-wrapper">{todo.count}</div>
                  <button
                    onClick={() => handleSubstractionCount(index)}
                    className="todo-action-button"
                  >
                    <img src={minusIcon} alt="minus-icon" />
                  </button>
                  <button
                    onClick={() => handleAdditionCount(index)}
                    className="todo-action-button"
                  >
                    <img src={plusIcon} alt="plus-icon" />
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Kosong</div>
        )}
      </section>
    </>
  );
}

export default App;
