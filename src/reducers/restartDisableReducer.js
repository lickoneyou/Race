const restartDisableReducer = (state = true, action) => {
  switch (action.type) {
    case "RESTART_DISABLED":
      state = true;
      return state;
    case "RESTART_ENABLE":
      state = false;
      return state;
    default:
      return state;
  }
};

export default restartDisableReducer;
