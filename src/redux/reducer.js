import * as actions from "./action";

const initState = {
  empData: [
    {
      id: 1,
      name: "John Doe",
      designation: "Developer",
    },
    {
      id: 2,
      name: "Ana Williams",
      designation: "Manager",
    },
    {
      id: 3,
      name: "Elon Musk",
      designation: "CEO",
    },
  ],
};

const reducer = (state = initState, action) => {
  console.log("ACTION", action);
  switch (action.type) {
    case actions.UCB:
      return { ...state, empData: action.payload };
    case actions.UFB:
      return { ...state, empData: action.payload };

    default:
      return state;
  }
};

export default reducer;
