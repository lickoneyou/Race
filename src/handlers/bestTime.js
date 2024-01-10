const bestTime = (time, bestTime) => {
  if (time > 0) {
    return bestTime <= time ? bestTime : time;
  }
};

export default bestTime;
