const disabledReducer = (state = false, action) => {
  switch (action.type) {
    case "DISABLED": {
      state = true;
      return state;
    }
    case "ENABLE": {
      state = false;
      return state;
    }
    default:
      return state;
  }
};

export default disabledReducer;
