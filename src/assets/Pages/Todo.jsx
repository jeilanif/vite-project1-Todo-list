import React from 'react'
import './Todo.css'

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
}

  return (
    <div className='container'>
      <h1> Today's List of Tasks</h1>
      <form onSubmit={handleSubmit}>
        <input name="item"  />
        <button>Add Task</button>
      </form>
      <ul className='task-box'>
        {items.map((item) => (
          <li
           key={item.id}
           className='todo-item'
          
          >
           <span className='todo-text'> {item.text}</span>
           <div className='todo-actions'> 
           <button className='delete-btn' onClick={()=> handleDelete(item.id)}> Delete </button>
           <button className='edit-btn'> EDIT </button>
           </div>

          
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo