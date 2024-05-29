import { useState, useEffect } from "react";
import styled from "styled-components";

function Todo() {
  const [todoId, setTodoId] = useState(1);
  const [todos, setTodos] = useState([]);
  const [doneId, setDoneId] = useState(1);
  const [dones, setDones] = useState([]);

  // 할 일 추가 함수
  const addTodo = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const newData = { id: todoId, content: e.target.value, isDone: false };
      setTodos([...todos, newData]);
      setTodoId(todoId + 1);
      e.target.value = ""; // 입력 필드를 비웁니다.
    }
  };

  // 완료 처리 함수
  const clear = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: true } : todo
    );
    setTodos(updatedTodos);
    const doneTodo = updatedTodos.find((todo) => todo.id === id);
    setDones([...dones, doneTodo]);
  };

  // 삭제 함수
  const Delete = (id) => {
    const updatedDones = dones.filter((done) => done.id !== id);
    setDones(updatedDones);
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
          placeholder="UMC 스터디 계획을 작성해보세요."
        ></input>
        <div
          id="category"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div id="todo" style={{ width: "400px", display: "inline-block" }}>
            <h4 style={{ color: "black" }}>해야할 일</h4>
            {todos.map((item) =>
              !item.isDone ? (
                <Div key={item.id}>
                  <Text>{item.content}</Text>
                  <button
                    type="button"
                    style={{
                      fontSize: "10px",
                      width: "50px",
                      height: "30px",
                    }}
                    onClick={() => clear(item.id)}
                  >
                    완료
                  </button>
                </Div>
              ) : null
            )}
          </div>
          <div id="done" style={{ width: "400px", display: "inline-block" }}>
            <h4 style={{ color: "black" }}>해낸 일</h4>
            {dones.map((item) =>
              item.isDone ? (
                <Div key={item.id}>
                  <Text>{item.content}</Text>
                  <button
                    type="button"
                    style={{
                      fontSize: "10px",
                      width: "50px",
                      height: "30px",
                    }}
                    onClick={() => Delete(item.id)}
                  >
                    삭제
                  </button>
                </Div>
              ) : null
            )}
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
  border: 1px solid transparent; /* Changed to transparent */
  color: black; /* Changed text color to black */
`;
