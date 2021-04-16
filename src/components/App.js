import { useState } from 'react';

function App() {
  
  const [값, 변경함] = useState(0);
  
  function Add() {
    변경함(값 + 1)
  }

  function Minus() {
    변경함(값 - 1)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ fontSize: "60px" }}>{값}</div>
        <div style={{ display: "inline-block", marginTop: "30px" }} >
          <button onClick={Add} >더하기 +1</button>
          <button onClick={Minus}>빼기 -1</button>
        </div>
      </header>
    </div>
  );
}

export default App;
