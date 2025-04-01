import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import QuoteComponent from "../components/QuoteComponent";

const TodoPage = () => {
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md flex flex-col h-[75vh]">
            <h1 className="text-2xl font-bold text-center">To-Do List</h1>
            <TaskInput />

            <div className="flex-grow overflow-y-auto max-h-[45vh] no-scrollbar mt-3 border p-2 rounded-md">
            <TaskList />
            </div>

            <button
            onClick={() => dispatch(logout())}
            className="w-full mt-4 py-2 bg-red-500 text-white cursor-pointer rounded"
            >
            Logout
            </button>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-gray-200 text-center">
            <QuoteComponent />
        </div>
    </div>
  );
};

export default TodoPage;

