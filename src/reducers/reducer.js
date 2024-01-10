import addCarHandler from "../handlers/localStorageHandlers/addCarHandler";
import createCarsSpeedHandler from "../handlers/localStorageHandlers/createCarsSpeedHandler";
import deleteCarHandler from "../handlers/localStorageHandlers/deleteCarHandler";
import refreshHandler from "../handlers/localStorageHandlers/refreshHandler";
import removeAllCarsHandler from "../handlers/localStorageHandlers/removeAllCarsHandler";
import resetScoreHandler from "../handlers/localStorageHandlers/resetScoreHandler";
import startHandler from "../handlers/localStorageHandlers/startHandler";
import winnerHandler from "../handlers/localStorageHandlers/winnerHandler";

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
      return addCarHandler(state, action);
    case "REMOVE_ALL_CARS":
      return removeAllCarsHandler(state);
    case "DELETE_CAR":
      return deleteCarHandler(state, action);
    case "START":
      return startHandler(state);
    case "REFRESH":
      return refreshHandler(state);
    case "CREATE_CARS_SPEED":
      return createCarsSpeedHandler(state);
    case "WINNER":
      return winnerHandler(state, action);
    case "RESET_SCORE":
      return resetScoreHandler(state);
    default:
      return state;
  }
};
