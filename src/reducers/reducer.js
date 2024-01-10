import carSpeed from "../handlers/carSpeed";
import addCarHandler from "../handlers/localStorageHandlers/addCarHandler";
import deleteCarHandler from "../handlers/localStorageHandlers/deleteCarHandler";
import refreshHandler from "../handlers/localStorageHandlers/refreshHandler";
import removeAllCarsHandler from "../handlers/localStorageHandlers/removeAllCarsHandler";
import startHandler from "../handlers/localStorageHandlers/startHandler";

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
    case "DELETE_CAR": {
      return deleteCarHandler(state, action);
    }
    case "START":
      return startHandler(state);
    case "REFRESH":
      return refreshHandler(state);
    case "CREATE_CARS_SPEED":
      localStorage.setItem(
        "race",
        JSON.stringify({
          ...state,
          raceCars: state.raceCars.map((el) => ({ ...el, speed: carSpeed() })),
        })
      );
      state = JSON.parse(localStorage.getItem("race"));
      return state;
    case "WINNER": {
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
    }
    default:
      return state;
  }
};
