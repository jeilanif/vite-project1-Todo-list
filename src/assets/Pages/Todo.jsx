import React, {useState, useEffect} from 'react'
import './Todo.css'
import classNames from 'classnames';
import '@fortawesome/fontawesome-free/css/all.css';



function Todo() {
  const [items, setItems] = React.useState([])
  /** store active todo items in localstorage */
  React.useEffect(() => {
    const storedItems = localStorage.getItem('todoItems');
      if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  /** to get items out of local storage back to the state */
  React.useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(items));
  }, [items]);


  function handleSubmit(e) {
    e.preventDefault();  /** to prevent page from refreshing and saves list  */
    const newItemText = e.target.item.value.trim();
    if (newItemText !== '') {
      const newItem ={
        id: new Date().getTime(),
        text: newItemText,
        completed: false
      };
      setItems([...items, newItem]);
      e.target.reset();
    }
  };
const handleDelete = (id) => {
  const updatedItems = items.filter(item => item.id !== id); 
  setItems(updatedItems)
};

const handleComplete = (id) => {
  const updatedItems = items.map((item) =>{
    if(item.id === id) {
      return {
        ...item,
        completed: !item.completed,
      };
    } else {
      return item;
    }
  });
  setItems(updatedItems);
}


const allTasksCompleted = items.every(item => item.completed);
const taskBoxClass = classNames('task-box', { completed: allTasksCompleted });

return (
  <div className='container'>
    <h1> Today's List of Tasks</h1>
    <form onSubmit={handleSubmit}>
      <input name="item"  />
      <button>Add Task</button>
    </form>
    <ul className={taskBoxClass}>
      {items.map((item) => (
        <li
          key={item.id}
          className={classNames('todo-item', { completed: item.completed })}
        >
          <span className={item.completed ? 'todo-text completed' : 'todo-text'}>
            {item.text}
          </span>
          <div className='todo-actions'> 
            <button className='delete-btn' onClick={() => handleDelete(item.id)}>
            <i className="fa-sharp fa-solid fa-delete-left"></i>
            </button>
            <button
              className='complete-btn'
              onClick={() => handleComplete(item.id)}
            >
               {item.completed ? 
              <i className="fa-sharp fa-solid fa-square-check"></i>: 
              <i className="fa-sharp fa-regular fa-square-check"></i>}
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
)
}

export default Todo