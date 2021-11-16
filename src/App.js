import React, { Fragment } from "react";
import Header from "./componets/Header";
import Portfolio from "./componets/Portfolio";
import About from "./componets/About";

export default function App() {
  return (
    <Fragment> 
          <Header />
          <About />
          <Portfolio />
    </Fragment>
  );
}