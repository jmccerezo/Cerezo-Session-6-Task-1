export const UCB = "UCB";
export const UFB = "UFB";

export const updateClassBased = (val) => {
  return { type: UCB, payload: val };
};

export const updateFuncBased = (name, designation) => {
  return { type: UFB, payload: [name, designation] };
};
