import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import List from "./components/List";

const App = () => {
  return (
    <div className="main_div">
      <div className="center_div">
        <i className="fas fa-key fas-head text-center"></i>
        <h1 className="text-center heading">Password Manager</h1>
        <div className="inbox mt-4">
          <input type="text" placeholder="Enter Your Name" />
          <input type="text" placeholder="Enter Your Password" />
        </div>
        <button type="button" className="info mt-5 mb-2">
          Submit
        </button>
        <h1 className="text-center mt-5">password List</h1>
        <List></List>
      </div>
    </div>
  );
};

export default App;
