import React, { useState } from "react";

import "../App.css";

const Main = (props) => {
  const [data, setData] = useState({
    name: "",
    id: "",
    pass: "",
  });
  const inputEvent = (e) => {
    const { value, name } = e.target;
    setData((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };
  const addField = (e) => {
    props.passbtn(data);
    e.preventDefault();
    alert("Your data has been added");
    setData(() => {
      return { name: "", id: "", pass: "" };
    });
  };
  const generateP = () => {
    var pass = "";
    var str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&%-_" +
      "abcdefghijklmnopqrstuvwxyz0123456789@#$&%-_";
    var i = "";
    for (i = 1; i <= 15; i++) {
      var char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    return pass;
  };
  const generatePass = () => {
    var pass = generateP();
    setData((preData) => {
      return {
        ...preData,
        pass,
      };
    });
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <i className="fas fa-key fas-head text-center"></i>
        <h1 className="text-center heading">Password Manager</h1>
        <input
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Enter Field Name"
          onChange={inputEvent}
          value={data.name}
          required
        />
        <div className="inbox mt-4">
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter Field ID"
            name="id"
            onChange={inputEvent}
            value={data.id}
          />

          <input
            type="name"
            autoComplete="off"
            placeholder="Enter Field Password"
            name="pass"
            onChange={inputEvent}
            value={data.pass}
          />
        </div>
        <button type="button" onClick={addField} className="info mt-5 mb-2">
          Submit
        </button>
        &nbsp; &nbsp;
        <button type="button" onClick={generatePass} className="info mt-5 mb-2">
          Genrate
        </button>
        <p className="text-muted mt-2">
          By using generte we suggest you a strong password
        </p>
      </div>
    </div>
  );
};

export default Main;
