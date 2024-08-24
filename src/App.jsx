import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  function handleClick(num){
    alert(num + 5)
  }
  return (
    <>
      <h3>Hello react</h3>
      <button onClick={() => handleClick(5)}>Click Me</button>
      <button onClick={handleClick}>Click Me</button>
      <Counter />
      <Team />
      <Users />
      <Friends />
    </>
  )
}

export default App
