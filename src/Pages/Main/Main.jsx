import React from "react";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import Services from "../Services/Services";
import News from "../News/News";
import Videos from "../Videos/Videos";
import Employees from "../Employees/Employees";
import Message from "../Message/Message";
import Partners from "../Partners/Partners";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Main = (props) => {
  const { selectLan } = props;

  return (
    <div>
      <HelmetProvider>
        <>
          {/* <Header /> */}
          <Hero />
          <Products selectLan={selectLan} />
          <Services selectLan={selectLan} />
          <News selectLan={selectLan} />
          <Videos selectLan={selectLan} />
          <Employees selectLan={selectLan} />
          <Message />
          <Partners />
          {/* <Footer /> */}

          <Helmet>
            <script src="/src/assets/js/main.js"></script>
          </Helmet>
        </>
      </HelmetProvider>
    </div>
  );
};

export default Main;
