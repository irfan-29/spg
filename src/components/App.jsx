import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../App.css";
import Navigationbar from "./Navbar";
import Input from "./Input";
import Random from "./Random";

function App() {
  return (
    <div>
      <Navigationbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Input />} />
          <Route exact path="/random" element={<Random/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
