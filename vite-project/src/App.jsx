import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>login page </h1>
      <input type='text' placeholder='enter name'/> 
      <input type='text' placeholder='enter name'/>
      <input type='submit' value="submit"/>

    </>
  )
}

export default App
