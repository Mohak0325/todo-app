import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addTask } from "../redux/slices/taskSlice";

const TaskInput = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      priority: "High",
    },
  });


  const onSubmit = (data) => {
    if (!data.title.trim()) return;
    dispatch(addTask(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <input
        {...register("title", { required: true })}
        className="w-full p-2 border rounded mb-2"
        placeholder="Task Title"
      />
      <select label="Priority" {...register("priority")} className="w-full p-2 border rounded mb-2">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button className="w-full py-2 bg-green-500 cursor-pointer text-white rounded" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;