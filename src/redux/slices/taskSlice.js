import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [] },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), ...action.payload, completed: false });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, removeTask, toggleComplete } = taskSlice.actions;
export default taskSlice.reducer;