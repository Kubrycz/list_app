import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import AddTask from "../pages/AddTask";

const Routing = () => {
  return (
    <BrowserRouter>
      {/* <Layout /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add_task" element={<AddTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
