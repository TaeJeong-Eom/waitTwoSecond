import React, { useState } from 'react';
import {
  Button,
  InputContainer,
  PageWrapper,
  TodoCard,
  TodoContainer,
  TodoHeader,
  TodoListContainer,
} from './components/styles';
import nextId from 'react-id-generator';
import { useDispatch, useSelector } from 'react-redux';
import { __addToDo, __deleteTodo } from './redux/modules/todosSlice';

function App() {
  const id = nextId(); // ID
  const dispatch = useDispatch(); // 함수 가져오기
  const todos = useSelector((state) => state.todos.list); //할 일 목록 가져오기
  const loading = useSelector((state) => state.todos.loading); // 로딩 상태 가져오기
  const [title, setTitle] = useState(''); // 제목
  const [body, setBody] = useState(''); // 내용

  // 할 일 추가
  const onAddTodo = () => {
    if (!title || !body) return; // 제목이나 내용이 비어있으면
    const newTodo = { id, title, body }; // 새로운 할 일 생성
    dispatch(__addToDo(newTodo));
    resetInputs(); // 초기화
  };

  // 할 일 삭제
  const onDeleteTodo = (id) => {
    dispatch(__deleteTodo(id));
  };

  // 입력 초기화
  const resetInputs = () => {
    setTitle(''); // 초기화
    setBody(''); // 초기화
  };

  const onChangeTitle = (e) => setTitle(e.target.value);

  const onChangeBody = (e) => setBody(e.target.value);

  return (
    <PageWrapper>
      <TodoContainer>
        <TodoHeader>🐢 SLOW TODO LIST 🐢</TodoHeader>
        <InputContainer>
          <span>제목: </span>
          <input
            value={title}
            placeholder="할 일 제목"
            onChange={onChangeTitle}
          />
          <span>내용: </span>
          <input
            value={body}
            placeholder="할 일 내용"
            onChange={onChangeBody}
          />
          <Button onClick={onAddTodo} disabled={loading}>+ 추가하기</Button> {/* 로딩 중에는 버튼 비활성화 */}
        </InputContainer>
        <TodoListContainer>
          {todos.map((todo) => (
            <TodoCard key={todo.id}>
              <span>제목: {todo.title}</span>
              <span>할 일: {todo.body}</span>
              <Button onClick={() => onDeleteTodo(todo.id)} disabled={loading}>삭제하기</Button> {/* 로딩 중에는 버튼 비활성화 */}
            </TodoCard>
          ))}
        </TodoListContainer>
      </TodoContainer>
    </PageWrapper>
  );
}

export default App;
