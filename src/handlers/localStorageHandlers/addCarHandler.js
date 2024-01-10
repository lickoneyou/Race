const addCarHandler = (state, action) => {
  localStorage.setItem(
    "race",
    JSON.stringify({
      ...state,
      raceCars: [...state.raceCars, action.payload],
    })
  );
  state = JSON.parse(localStorage.getItem("race"));
  return state;
};

export default addCarHandler;
