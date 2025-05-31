import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Hello Parker!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
         This definitely is <s> not</s> a useless button.
        </p>
      </div>
      <p className="read-the-docs">
        made by the goat
      </p>
    </>
  )
}

export default App
