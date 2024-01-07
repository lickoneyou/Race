export const reducer = (state, action) => {
  const defaultState = {
    allCars: [],
    raceCars: [],
  };

  if (!localStorage.getItem("race")) {
    localStorage.setItem("race", JSON.stringify(defaultState));
  }

  state = JSON.parse(localStorage.getItem("race"));

  switch (action.type) {
    default:
      return state;
  }
};
