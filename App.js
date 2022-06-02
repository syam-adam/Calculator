import React,{useState} from 'react';
import './App.css';
 const App = () => {
   const [input,setInput] = useState("");
   const [result,setResult] = useState(0);
   const handler = e=>{
    setInput(e.target.value);
   } 
   const clicked = e =>{
    setResult(eval(input));
    setInput('')
   }
   const cleared = e =>{
    setResult(0);
    setInput('')
   }
  return (
    <div id="card">
      <center>
        <input id ="input" type="text" name="input" placeholder="Enter" value={input} onChange={handler}/>
        <h3> = {result}</h3>
        <div id="keypad">
          <button onClick={() =>setInput((input+'1'))}>1</button>
          <button onClick={() =>setInput((input+'2'))}>2</button>
          <button onClick={() =>setInput((input+'3'))}>3</button>
          <button onClick={() =>setInput((input+'+'))}>+</button>
          <button onClick={() =>setInput((input+'4'))}>4</button>
          <button onClick={() =>setInput((input+'5'))}>5</button>
          <button onClick={() =>setInput((input+'6'))}>6</button>
          <button onClick={() =>setInput((input+'-'))}>-</button>
          <button onClick={() =>setInput((input+'7'))}>7</button>
          <button onClick={() =>setInput((input+'8'))}>8</button>
          <button onClick={() =>setInput((input+'9'))}>9</button>
          <button onClick={() =>setInput((input+'*'))}>*</button>
          <button onClick={() =>setInput((input+'0'))}>0</button> 
          <button onClick={clicked}> = </button>
          <button onClick={cleared}>C</button>
          <button onClick={() =>setInput((input+'/'))}>/</button>
          
        </div>
      </center>
    </div>
  )
}

export default App