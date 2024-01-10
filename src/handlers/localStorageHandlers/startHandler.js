import bestTime from "../bestTime";
import time from "../time";

const startHandler = (state) => {
  localStorage.setItem(
    "race",
    JSON.stringify({
      ...state,
      raceCars: state.raceCars.map((el) => ({
        ...el,
        pos: el.pos >= 80 ? el.pos : el.pos + el.speed,
        time: time(80, el.speed),
        bestTime: bestTime(el.time, el.bestTime),
      })),
    })
  );
  state = JSON.parse(localStorage.getItem("race"));
  return state;
};

export default startHandler;
