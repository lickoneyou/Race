const removeAllCarsHandler = (state) => {
  localStorage.setItem(
    "race",
    JSON.stringify({
      ...state,
      raceCars: [],
    })
  );
  state = JSON.parse(localStorage.getItem("race"));
  return state;
};

export default removeAllCarsHandler;
