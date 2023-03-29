import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // console.log(state.todos);
      //console.log(action.payload);
      // debugger;
      state.todos.push(action.payload);
    },
  },
});

// you have to export two things from here

// actions

export const { addTodo } = todoSlice.actions;

// the reducer

export default todoSlice.reducer;
