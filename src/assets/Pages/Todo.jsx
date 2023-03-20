import React from 'react'
import './Todo.css'
import classNames from 'classnames';


function Todo() {
  const [items, setItems] = React.useState([])

  function handleSubmit(e) {
    e.preventDefault();  /** to prevent page from refreshing and saves list  */
    const newItemText = event.target.item.value.trim(); /** to prevent items that lead with spaces or blank space to be submited */
    if (newItemText !== '') {
    const newItem ={
      id: new Date().getTime(),
      text: e.target.item.value,
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
              Delete
            </button>
            <button
              className='complete-btn'
              onClick={() => handleComplete(item.id)}
            >
              Completed!
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
)
}

export default Todo