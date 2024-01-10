const refreshHandler = (state) => {
  localStorage.setItem(
    "race",
    JSON.stringify({
      ...state,
      raceCars: state.raceCars.map((el) => ({ ...el, pos: 0 })),
    })
  );
  state = JSON.parse(localStorage.getItem("race"));
  return state;
};

export default refreshHandler;
