import React, { useState } from "react";

import "../App.css";

const Main = (props) => {
  const [data, setData] = useState({
    name: "",
    id: "",
    pass: "",
  });
  const addField = (e) => {
    props.passbtn(data);
    e.preventDefault();
    alert("Your id and password has been added");
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <i className="fas fa-key fas-head text-center"></i>
        <h1 className="text-center heading">Password Manager</h1>
        <input
          type="text"
          placeholder="Enter Field Name"
          onChange={(e) => {
            // console.log(e.target.value);
            // setData(e.target.value);
            setData((preData) => {
              return {
                ...preData,
                name: e.target.value,
              };
            });
          }}
        />
        <div className="inbox mt-4">
          <input
            type="text"
            placeholder="Enter Field ID"
            onChange={(e) => {
              // console.log(e.target.value);
              // setData(e.target.value);
              setData((preData) => {
                return {
                  ...preData,
                  id: e.target.value,
                };
              });
            }}
          />

          <input
            type="name"
            placeholder="Enter Field Password"
            onChange={(e) => {
              // console.log(e.target.value);
              // setData(e.target.value);
              setData((preData) => {
                return {
                  ...preData,
                  pass: e.target.value,
                };
              });
            }}
          />
        </div>
        <button type="button" onClick={addField} className="info mt-5 mb-2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Main;
