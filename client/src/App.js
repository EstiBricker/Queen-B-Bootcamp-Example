import React from "react";
//import axios from "axios";

//import Header from "../src/components/Header";
import Main from "../src/components/Main";
//import Footer from "../src/components/Footer";

const port = process.env.PORT || 5001;

function App() {
  return (
    <div className="container">
      <h1>HEYYYYYYYYYYYYYYYYYY</h1>
      {/*<Header /> */}
      <Main port={port} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
//create component App
