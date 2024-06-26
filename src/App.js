import logo from './logo.svg';
import './App.css';
import React,{useCallback, useState} from "react";
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const incrementCount = useCallback(() =>setCount(count+1),[count]);

  return (
    <div className="App">
      <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}  
      />
      <button onClick = {incrementCount}>IncrementCounter</button>
      <h3>Input text:</h3>
      <h3>Count:{count}</h3>
      <hr/>
      <ChildComponent count ={count} onClick={incrementCount}/>

    </div>
  );
}
const ChildComponent = React.memo(function({count,onClick}){
  console.log('child component render')
  return (
    <div>
      <h1>This is a child component</h1>
      <button onClick={onClick}>IncrementCount</button>
      <h4>Count:{count}</h4>
    </div>
  )
})

export default App;
// main
