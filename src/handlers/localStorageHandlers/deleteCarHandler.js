const deleteCarHandler = (state, action) => {
  localStorage.setItem(
    "race",
    JSON.stringify({
      ...state,
      raceCars: state.raceCars.filter((car) => car.name !== action.payload),
    })
  );
  state = JSON.parse(localStorage.getItem("race"));
  return state;
};

export default deleteCarHandler;
