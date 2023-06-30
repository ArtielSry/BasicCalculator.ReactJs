import { useState, useRef } from "react"; 
import './App.css';

function App() {

  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 

  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = '';
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
    setResult((result) => result = 0)
  }; 
 

  return (
    <>
    <h1>Simplest Working Calculator</h1>

    <form>
        <p ref ={resultRef}>Result: {result}</p>
        <input 
            placeholder='number here' 
            type="number"
            pattern="[0-9]"
            ref={inputRef}
        />
          <button btn='add'  onClick={plus}>add</button>
          <button btn='subtract'  onClick={minus}>subtract</button>
          <button btn='multiply'  onClick={times}>multiply</button>
          <button btn='divide'  onClick={divide}>divide</button>
          
          <button btn='reset input' class='orange'  onClick={resetInput}>reset input</button>
          <button btn='reset result' class='orange'  onClick={resetResult}>reset result</button>
    
      </form>
    </>  
  );
}

export default App;
