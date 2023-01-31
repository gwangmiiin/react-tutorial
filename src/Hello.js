import React from "react";

function Hello({color , name, isSpecial }) {
  return (
    <div style={{
    color
    }}>
      {isSpecial && <b>*</b>} 
      {/* 내용이 바뀌어야 할 때는 삼항연산자 사용 , 단순히 보여지고 숨기는 부분은 &연산자 사용*/}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음'
} // 기본값 설정
export default Hello;