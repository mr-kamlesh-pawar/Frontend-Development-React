import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setCount] = useState(5);
 // const counter =15;

  let add = ()=>{
    counter++;
    console.log(counter);
    setCount(counter);
  }

  let remove = () =>{
    if(counter >0){

      counter --;
      setCount(counter);
    }
  }


  return (
    <>
       <h1> Counter App</h1>
      <div>
        <p>Click on the Button to Increment and Decrement Count : {counter}</p>
        <br />
        <button onClick={add}>Increment {counter}</button>
        <br /><br />
        <button onClick={remove}>Decrement : {counter}</button>
        <br /><br />
        <p>Value - {counter}</p>
      </div>
      
    </>
  )
}

export default App
