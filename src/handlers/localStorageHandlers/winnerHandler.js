const winnerHandler = (state, action) => {
  localStorage.setItem(
    "race",
    JSON.stringify({
      ...state,
      raceCars: state.raceCars.map((el) => {
        if (el.name === action.payload) {
          return { ...el, wins: el.wins + 1 };
        } else {
          return el;
        }
      }),
    })
  );
  state = JSON.parse(localStorage.getItem("race"));
  return state;
};

export default winnerHandler;
