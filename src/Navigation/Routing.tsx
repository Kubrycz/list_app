import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "../components/AddTask";
import Home from "../components/Home";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_task" element={<AddTask />} />
      </Routes>
    </Router>
  );
};

export default Routing;
