import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Account from "./pages/account.tsx";
import AddTodo from "./pages/addTodo.tsx";
import Home from "./pages/home.tsx";
import MainLayout from "./pages/mainLayout.tsx";
import Reports from "./pages/reports.tsx";
import Timer from "./pages/timer.tsx";
import "./view-transitions.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="/addTodo" element={<AddTodo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
