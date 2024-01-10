import carSpeed from "../carSpeed";

const createCarsSpeedHandler = (state) => {
  localStorage.setItem(
    "race",
    JSON.stringify({
      ...state,
      raceCars: state.raceCars.map((el) => ({ ...el, speed: carSpeed() })),
    })
  );
  state = JSON.parse(localStorage.getItem("race"));
  return state;
};

export default createCarsSpeedHandler;
