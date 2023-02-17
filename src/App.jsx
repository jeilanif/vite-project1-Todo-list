import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="main">
      <img src="https://source.unsplash.com/VuwAfoHpxgs"></img>
    <div id="box">
  <div id="box-items">
   <h1 id="title">To-DO</h1>
   <h3>A task list that enables users to add their daily tasks</h3>
   <button>Get Started</button>
   </div>
    </div>
    </div>
  )
}

export default App
