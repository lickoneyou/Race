const disabledReducer = (state = false, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default disabledReducer;
