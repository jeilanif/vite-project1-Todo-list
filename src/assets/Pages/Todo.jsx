import React from 'react'

function Todo() {
  const [items, setItems] = React.useState([])

  function handleSubmit(e) {
    e.preventDefault();
    const newItem ={
      id: new Date().getTime(),
      text: e.target.item.value
    };
    setItems([...items, newItem]);
    e.target.reset();
  }

  return (
    <div>
      <h1> Today's List of Tasks</h1>
      <form onSubmit={handleSubmit}>
        <input name="item"  />
        <button>Add Task</button>
      </form>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo