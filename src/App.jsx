/* eslint-disable no-unused-vars */
import React from 'react'
import Header from "./Pages/Header/Header";
import Hero from "./Pages/Hero/Hero";
import Products from "./Pages/Products/Products";
import Services from "./Pages/Services/Services";
import News from "./Pages/News/News";
import Videos from "./Pages/Videos/Videos";
import Employees from "./Pages/Employees/Employees";
import Message from "./Pages/Message/Message";
import Partners from "./Pages/Partners/Partners";
import Footer from "./Pages/Footer/Footer";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import HeroAbout from "./Pages/HeroAbout/HeroAbout";

function App() {
  return (
    <HelmetProvider>
      <>
        <Header />
        <Hero />
        <Products />
        <Services />
        <News />
        <Videos />
        <Employees />
        <Message />
        <Partners />
        <Footer />

        <Helmet>
          <script src="/src/assets/js/main.js"></script>
        </Helmet>
      </>
    </HelmetProvider>
  );
}

export default App
