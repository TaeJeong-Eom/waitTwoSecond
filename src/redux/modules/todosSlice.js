import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// 2초 지연 시키기
const waitTwoSeconds = () => new Promise((resolve) => setTimeout(resolve, 2000));

// 할 일 추가
export const __addToDo = createAsyncThunk(
  '__addToDo',
  async (newTodo, thunkAPI) => {
    await waitTwoSeconds(); // 2초 지연
    return newTodo; // 새로운 할 일 반환
  }
);

// 할 일 삭제
export const __deleteTodo = createAsyncThunk(
  '__deleteToDo',
  async (id, thunkAPI) => {
    await waitTwoSeconds(); // 2초 지연
    return id;
  }
);

const initialState = {
  list: [], // 할 일 목록 저장
  loading: false,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,  // 초기 상태
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__addToDo.pending, (state) => {
        state.loading = true; // 추가 시작 => 로딩 상태 true
      })
      .addCase(__addToDo.fulfilled, (state, action) => {
        state.list.push(action.payload); // 할 일 추가
        state.loading = false; // 추가 완료 => 로딩 상태 false
      })
      .addCase(__deleteTodo.pending, (state) => {
        state.loading = true; // 삭제 시작 => 로딩 상태 true
      })
      .addCase(__deleteTodo.fulfilled, (state, action) => {
        state.list = state.list.filter((todo) => todo.id !== action.payload); // 특정 id를 가진 할 일을 리스트에서 제거
        state.loading = false; // 삭제 작업 완료 => 로딩 상태 false
      })
  },
});

export default todosSlice.reducer;
