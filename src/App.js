import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";


function App() {
  return (
    <Wrapper>
      <Hello name = 'react' color = 'red' isSpecial = {true} />  {/* 값 설정을 해주지 않으면 T로 인식 */}
      <Hello color = 'pink'/>
    </Wrapper>
  );
}

export default App;
