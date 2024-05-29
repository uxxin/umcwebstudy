//컴포넌트 개념
import React, { useState } from "react";

function Modal() {
  const [modal, setModal] = useState(false); //무조건 const 사용
  //변수 이름이랑 함수 이름은 소문자로 시작!! 무조건!!
  const openModal = () => {
    setModal(true);
    console.log("모달이 열렸습니다.");
  };

  const closeModal = () => {
    setModal(false);
    console.log("모달이 닫혔습니다.");
  };

  return (
    <>
      <h1>안녕하세요!</h1>
      <h2>내용내용내용</h2>
      <button onClick={openModal}>버튼 열기</button>

      {modal && (
        <div>
          <div>
            <p>모달 내용입니다.</p>
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
