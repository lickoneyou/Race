const resetWins = (cars) => {
  if (cars.length) {
    return cars.map((el) => ({ ...el, wins: 0 }));
  }
  return cars;
};

export default resetWins;
