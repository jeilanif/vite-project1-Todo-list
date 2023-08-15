import React, { useState, useEffect } from 'react';
import './Todo.css';
import classNames from 'classnames';
import '@fortawesome/fontawesome-free/css/all.css';

function Todo() {
  const [items, setItems] = useState([]);
  const [editItemId, setEditItemId] = useState(null); // To track which item is being edited

  useEffect(() => {
    const storedItems = localStorage.getItem('todoItems');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(items));
  }, [items]);

  function handleSubmit(e) {
    e.preventDefault();
    const newItemText = e.target.item.value.trim();
    if (newItemText !== '') {
      const newItem = {
        id: new Date().getTime(),
        text: newItemText,
        completed: false,
        promodorsToComplete: 1, // Default value, can be changed by user
      };
      setItems([...items, newItem]);
      e.target.reset();
    }
  }

  const handleDelete = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  const handleComplete = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  };

  const handleEdit = (id) => {
    setEditItemId(id);
    const itemToEdit = items.find(item => item.id === id);
    if (itemToEdit) {
      const editInput = document.getElementById('editInput');
      if (editInput) {
        editInput.value = itemToEdit.text;
      }
    }
  };

  const handleSaveEdit = () => {
    const updatedText = document.getElementById('editInput').value;
    const updatedItems = items.map(item => {
      if (item.id === editItemId) {
        return {
          ...item,
          text: updatedText,
        };
      }
      return item;
    });
    setItems(updatedItems);
    setEditItemId(null);
  };

  const allTasksCompleted = items.every(item => item.completed);
  const taskBoxClass = classNames('task-box', { completed: allTasksCompleted });

  return (
    <div className='container'>
      <h1> Today's List of Tasks</h1>
      <form onSubmit={handleSubmit}>
        <input name="item" />
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
                {item.completed ?
                  <i className="fa-sharp fa-solid fa-check-square"></i> :
                  <i className="fa-sharp fa-regular fa-square"></i>}
              </button>
              <button
                className='edit-btn'
                onClick={() => handleEdit(item.id)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
      {editItemId !== null && (
        <div className='edit-input'>
          <input id='editInput' />
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      )}
    </div>
  );
}

export default Todo;
