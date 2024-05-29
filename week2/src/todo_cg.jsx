import React, { useState } from "react";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ]);
  const [doneTodos, setDoneTodos] = useState([]);

  function handleAddTodo() {
    if (!inputValue) return;
    const newTodo = {
      id: todos.length + 1,
      content: inputValue,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  }

  function handleToggleTodo(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  }

  function handleMoveToDone(id) {
    const todoToMove = todos.find((todo) => todo.id === id);
    if (todoToMove) {
      setDoneTodos([...doneTodos, todoToMove]);
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  }

  function handleDeleteDone(id) {
    setDoneTodos(doneTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h1>UMC STUDY PLAN</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="UMC 스터디 계획을 작성해보세요!"
          style={{ height: "50px", width: "300px" }} // 입력 칸의 너비를 조정합니다.
        />
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ marginRight: "20px" }}>
          <h2>해야 할 일</h2>
          {todos.map((todo) => (
            <div key={todo.id}>
              <span onClick={() => handleToggleTodo(todo.id)}>
                {todo.content}
              </span>
              <button onClick={() => handleMoveToDone(todo.id)}>완료</button>
            </div>
          ))}
        </div>
        <div>
          <h2>해낸 일</h2>
          {doneTodos.map((todo) => (
            <div key={todo.id}>
              {todo.content}
              <button onClick={() => handleDeleteDone(todo.id)}>삭제</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
