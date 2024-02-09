import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [count,setcount] =useState(6);
function inc(){
setcount(count+1)
console.log(count)
}
function dec(){
setcount(count-1)
console.log(count)
}


  return (
    <>
      <h1> Counter App</h1>
      <h2> counter val {count}</h2>
      <button onClick={inc} >Increase {count}</button>
      <br></br>
      <button onClick={dec}>Decrese {count}</button>

    </>
  )
}

export default App
