import React from "react";
import Hello from "./Hello";
import './App.css'
// import Wrapper from "./Wrapper";

function App() {
  const name = 'gwangmin';
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : 24,
    padding: '1rem'
  };
  return (
    <>
    {/* 주석 사용 */}
      <Hello/>
      <div
      // 주석사용
      style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
