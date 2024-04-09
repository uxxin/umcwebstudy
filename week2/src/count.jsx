//컴포넌트 개념
import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0); //무조건 const 사용
  //변수 이름이랑 함수 이름은 소문자로 시작!! 무조건!!
  const increase = () => {
    setCount(count + 1);
    console.log("증가버튼이 클릭되었습니다.");
  };

  const decrease = () => {
    setCount(count - 1);
    console.log("감소버튼이 클릭되었습니다.");
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    </>
  );
}

export default Count;

//useState 값을 사용해 지정해줌.
//문자, 숫자, 불리안, 배열, 객체 등등

//const [변수 이름, 변수 값을 바꿀 때 쓰는 함수의 이름] = useState{초기값};

//초기값이 숫자면 숫자로만 변경 가능, 초기값이 문자면 문자로만 변경 가능
