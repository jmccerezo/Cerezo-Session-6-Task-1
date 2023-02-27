import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFuncBased } from "../redux/action";

const FuncBased = () => {
  // const empData = useSelector((state) => state.empData);
  // let empCopy = [...empData];
  // empCopy[1].name = "Oliver Brown";
  // empCopy[1].designation = "DevOps Developer";

  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(updateFuncBased("Oliver Brown", "DevOps Developer"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h5>Function Based</h5>
      <p>Update index 1</p>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default FuncBased;
