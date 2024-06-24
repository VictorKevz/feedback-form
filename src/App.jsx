import React, { useState } from "react";

import "./App.css";
import Form from "./components/Form";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="outer-container">
      <div className="inner-container">
       

        <Form/>
        
      </div>
      <Footer/>
    </main>
  );
}

export default App;
