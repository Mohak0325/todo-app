import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import { Routes , Route , Navigate } from "react-router-dom";
import LoginPage from "./pages/Login";
import TodoPage from "./pages/ToDo";

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/todo" /> : <LoginPage />} />
      <Route path="/todo" element={isAuthenticated ? <TodoPage /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default App;
