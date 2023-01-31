import React, {useState} from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  // number라는 상태를 만들껀데 이 상태의 기본값은 0 , setNumber는 상태를 바꿔주는 코드

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
    // 로직을 활용한 업데이트 함수 사용 가능 , 나중에 최적화 단계에서 함수형 업데이트 필요
  }
  const onDecrease = () => {
    setNumber(number - 1);
    // 어떠한 값으로 바꿀거야 라는 다음상태를 넣을 수 있음
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      {/* 주의할점 : 함수를 넣어줘야지 함수를 호출하면 안됨 즉 onIncrease() 형태 X */}
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter;