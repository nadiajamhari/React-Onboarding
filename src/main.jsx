import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Post from "./pages/Post";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post id="1" />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
