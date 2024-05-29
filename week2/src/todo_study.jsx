import { useState, useEffect } from "react";
import styled from "styled-components";

function Todo() {
  const [todoId, setTodoId] = useState(1);
  const [todos, setTodos] = useState([]);
  const [doneId, setDoneId] = useState(1);
  const [dones, setDones] = useState([]);

  const addTodo = (e) => {
    if (e.key === "Enter") {
      const newData = { id: todoId, content: e.target.value, isDone: false };
      setTodos([...todos, newData]);
      e.target.value = "";
      setTodoId(todoId + 1);
    }
  };

  useEffect(() => {
    console.log(todos);
  }, [addTodo]);

  const clear = (e) => {
    let arr = [...todos];
    for (let i = 0; i < todos.length; ++i) {
      if (e.target.value === arr[i].content) {
        arr[i].isDone = true;
        const done = {
          id: doneId,
          content: arr[i].content,
          isDone: false,
        };
        setTodos(arr);
        setDones([...dones, done]);
        setDoneId(doneId + 1);
      }
    }
  };

  useEffect(() => {
    console.log(dones);
  }, [clear]); //컴퓨터 진행과 입력 순서가 알맞지 않을 수 있어서 사용

  const Delete = (e) => {
    let arr = [...dones];
    for (let i = 0; i < dones.length; ++i) {
      if (arr[i].content === e.target.value) {
        arr[i].isDone = true;
        setDones(arr);
      }
    }
  };

  return (
    <div id="background" style={{ backgroundColor: "skyblue" }}>
      <div
        id="main"
        style={{
          backgroundColor: "lightgray",
          width: "1280px",
          height: "600px",
          padding: "20px",
        }}
      >
        <h1 id="title">UMC Study Plan</h1>
        <hr id="line" style={{ width: "800px" }} />
        <input
          id="input"
          style={{ width: "600px", height: "30px" }}
          onKeyDown={addTodo}
          placeholder="UMCcons 스터디 계획을 작성해보세요."
        ></input>
        <div
          id="category"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div id="todo" style={{ width: "400px", display: "inline-block" }}>
            <h4>해야할 일</h4>
            {todos.map(function (item, index) {
              if (item.isDone === false) {
                return (
                  <Div>
                    <Text>{item.content}</Text>
                    <button
                      type="button"
                      style={{
                        fontSize: "10px",
                        width: "50px",
                        height: "30px",
                      }}
                      value={item.content}
                      onClick={clear}
                    >
                      완료
                    </button>
                  </Div>
                );
              }
            })}
          </div>
          <div id="done" style={{ width: "400px", display: "inline-block" }}>
            <h4>해낸 일</h4>
            {dones.map(function (item, index) {
              if (item.isDone === false) {
                return (
                  <Div>
                    <Text>{item.content}</Text>
                    <button
                      type="button"
                      style={{
                        fontSize: "10px",
                        width: "50px",
                        height: "30px",
                      }}
                      value={item.content}
                      onClick={Delete}
                    >
                      삭제
                    </button>
                  </Div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;

const Div = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 40px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  margin-left: 50px;
  margin-bottom: 5px;
`;
const Text = styled.div`
  display: flex;
  align-items: center;
  width: 230px;
  height: 40px;
  margin-left: 10px;
  border: 1px solid black;
`;
