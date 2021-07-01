import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Main from "./components/Main";
import List from "./components/List";
import Update from "./components/Update";

const App = () => {
  const [toogle, setToogle] = useState(true);
  let inList;
  if (localStorage.getItem("allfield") === null) {
    inList = [];
  } else {
    inList = JSON.parse(localStorage.getItem("allfield"));
  }
  const [item, setItem] = useState(inList);
  const addPass = (data) => {
    setItem((preData) => {
      return [...preData, data];
    });
    // console.log(data);
  };
  const deleteItem = (id) => {
    setItem((oldItems) => {
      return oldItems.filter((errElm, ind) => {
        return ind !== id;
      });
    });
    localStorage.setItem("allfield", JSON.stringify(item));
  };
  const editFunc = (id) => {
    console.log(item[id]);
    setToogle(false);
  };
  useEffect(() => {
    localStorage.setItem("allfield", JSON.stringify(item));
  }, [item]);
  return (
    <>
      {toogle ? (
        <Main passbtn={addPass}></Main>
      ) : (
        <Update passbtn={addPass}></Update>
      )}

      <h1 className="text-center mt-5 text-white">password Lists</h1>

      {item.map((val, ind) => {
        return (
          <List
            key={ind}
            id={ind}
            fname={val.name}
            fid={val.id}
            fpass={val.pass}
            deletefunc={deleteItem}
            edit={editFunc}
          />
        );
      })}
    </>
  );
};

export default App;
