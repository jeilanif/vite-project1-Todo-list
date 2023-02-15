import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <h1>To-DO</h1>
   <h3>A task list that enables users to add their daily tasks</h3>
   <button>Get Started</button>
    </div>
  )
}

export default App
