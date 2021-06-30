import React from "react";
import "../List.css";

const List = () => {
  return (
    <>
      <div className="lbox">
        <div className="phead">Google</div>
        <div className="pmain">123</div>
        <div className="pfunc">
          <i className="fas fa-edit"></i>
          <i className="fas fa-trash"></i>
        </div>
      </div>
    </>
  );
};

export default List;
