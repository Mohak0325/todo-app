import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, toggleComplete } from "../redux/slices/taskSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);

  return (
    <div className="mt-2">
      <h2 className="text-lg font-semibold">Tasks</h2>
      {tasks.length === 0 ? <p>No tasks added</p> : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between gap-5 p-2 border rounded mt-2 bg-gray-100">
              <span className={`flex-1 break-words ${task.completed ? "line-through text-gray-500" : ""}`}>
                {task.title} ({task.priority})
              </span>
              <div className="flex items-center space-x-2">
                <button onClick={() => dispatch(toggleComplete(task.id))}
                  className="px-2 py-1 bg-yellow-500 text-white cursor-pointer rounded self-center">
                  ✓
                </button>
                <button onClick={() => dispatch(removeTask(task.id))}
                  className="px-2 py-1 bg-red-500 text-white cursor-pointer rounded self-center">
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;