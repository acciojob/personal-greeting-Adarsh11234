
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
         <p>Enter your name:</p>
    <input value={input} onChange={onInput} />
    {!!input.length&&<p>Hello {input}!</p>}
    <button onClick={onClear}>Clear</button>
    </div>
  )
}

export default App
