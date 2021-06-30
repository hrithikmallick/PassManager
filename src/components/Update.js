import React, { useState } from "react";

import "../App.css";

const Update = (props) => {
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
        />
        <div className="inbox mt-4">
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter Field ID"
            name="id"
            onChange={inputEvent}
          />

          <input
            type="name"
            autoComplete="off"
            placeholder="Enter Field Password"
            name="pass"
            onChange={inputEvent}
          />
        </div>
        <button type="button" onClick={addField} className="info mt-5 mb-2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Update;
