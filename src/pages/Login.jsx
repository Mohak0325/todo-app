import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    if (email && password) {
      dispatch(login({ email, password }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to To-Do App</h1>
        <form className="mb-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required 
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            required 
            className="w-full p-2 mb-4 border rounded"
          />
            <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white cursor-pointer rounded"
            >
                Login   
            </button>
        </form>              
      </div>
    </div>
  );
};

export default LoginPage;
