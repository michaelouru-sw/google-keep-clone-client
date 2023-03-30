import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Index from "./Index";
import Register from "./Register";
import { Navigate } from "react-router-dom";
import { jwt } from "jsonwebtoken";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
