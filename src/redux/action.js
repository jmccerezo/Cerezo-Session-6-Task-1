export const UCB = "UCB";
export const UFB = "UFB";

export const updateClassBased = (val) => {
  return { type: UCB, payload: val };
};

export const updateFuncBased = (val) => {
  return { type: UFB, payload: val };
};
