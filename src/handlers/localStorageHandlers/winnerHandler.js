import winnersChecked from "../winnersChecked";

const winnerHandler = (state, action) => {
  localStorage.setItem(
    "race",
    JSON.stringify({
      allCars: winnersChecked(state.allCars, action),
      raceCars: state.raceCars.map((el) => {
        if (el.name === action.payload.name) {
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
