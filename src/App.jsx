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

function App() {
  return (
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
    </>
  );
}

export default App
