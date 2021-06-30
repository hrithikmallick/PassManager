import React from "react";
import "../List.css";

const List = (props) => {
  const deletfunct = () => {
    props.deletefunc(props.id);
  };
  const editFunc = () => {
    props.edit(props.id);
  };
  return (
    <>
      <div className="lbox">
        <div className="phead">{props.fname}</div>
        <div className="phead">{props.fid}</div>
        <div className="pmain">{props.fpass}</div>
        <div className="pfunc">
          <i className="fas fa-edit text-warning" onClick={editFunc}></i>
          <i className="fas fa-trash text-danger" onClick={deletfunct}></i>
        </div>
      </div>
    </>
  );
};

export default List;
