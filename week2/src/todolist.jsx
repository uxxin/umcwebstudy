//컴포넌트 개념
import React, { useState } from "react";

function Todo() {
  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ]);
  //배열(key가 3개인 객체가 4개 들어간 상태)

  const addTodos = (newTodoContent) => {
    if (newTodoContent.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        content: newTodoContent,
        isDone: false,
      };

      setTodos([...todos, newTodo]);
    }
  };

  const completeTodos(id)=>{
    const updatedTodos = todos.map((todo) => )
  };

  const finishTodos = () => {};

  return (
    <>
      <div>
        <h1>Todo-List</h1>
        <form>
          <input
            type="text"
            placeholder="입력하세요"
            style={{ height: "30px", width: "300px" }}
          />
          <button>TO-DO 추가</button>
        </form>
      </div>
    </>
  );
}

export default Todo;
