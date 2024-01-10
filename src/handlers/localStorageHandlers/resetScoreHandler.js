import resetWins from "../resetWins";

const resetScoreHandler = (state) => {
  localStorage.setItem(
    "race",
    JSON.stringify({
      raceCars: resetWins(state.raceCars),
      allCars: [],
    })
  );
  state = JSON.parse(localStorage.getItem("race"));
  return state;
};

export default resetScoreHandler;
