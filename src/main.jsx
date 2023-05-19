import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroAbout from "./Pages/HeroAbout/HeroAbout.jsx";
import ProductsAbout from "./Pages/ProductAbout/ProductsAbout.jsx";
import ServiceAbout from "./Pages/ServiceAbout/ServiceAbout.jsx";
import NewsAbout from "./Pages/NewsAbout/NewsAbout.jsx";
import VideoAbout from "./Pages/VideoAbout/VideoAbout.jsx";
import EmployeeAbout from "./Pages/EmployeeAbout/EmployeeAbout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hero/about" element={<HeroAbout />} />
        <Route path="/product/about" element={<ProductsAbout />} />
        <Route path="/service/about" element={<ServiceAbout />} />
        <Route path="/news/about" element={<NewsAbout />} />
        <Route path="/video/about" element={<VideoAbout />} />
        <Route path="/employee/about" element={<EmployeeAbout />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
