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
    case "ADD_CAR":
      localStorage.setItem(
        "race",
        JSON.stringify({
          ...state,
          raceCars: [...state.raceCars, action.payload],
        })
      );
      state = JSON.parse(localStorage.getItem("race"));
      return state;
    default:
      return state;
  }
};
