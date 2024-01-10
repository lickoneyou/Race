const scoreDisabledReducer = (state = false, action) => {
  switch (action.type) {
    case "SCORE_DISABLED":
      state = true;
      return state;
    case "SCORE_ENABLE":
      state = false;
      return state;
    default:
      return state;
  }
};

export default scoreDisabledReducer;
