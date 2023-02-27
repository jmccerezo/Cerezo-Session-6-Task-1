import React from "react";
import Home from "./Components/Home";
import ClassBased from "./Components/ClassBased";
import FuncBased from "./Components/FuncBased";

const App = () => {
  return (
    <>
      <Home />
      <div style={{ display: "flex" }}>
        <ClassBased />
        <FuncBased />
      </div>
    </>
  );
};

export default App;
