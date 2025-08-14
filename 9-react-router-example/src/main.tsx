import About from "app/About";
import MainLayout from "app/MainLayout";
import Projects from "app/Projects";
import UserAdd from "app/UserAdd";
import UserDetail from "app/UserDetail";
import UserEdit from "app/UserEdit";
import Users from "app/Users";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./app/app";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/users/add" element={<UserAdd />} />
          <Route path="/users/:id/edit" element={<UserEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
