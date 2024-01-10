const time = (pos, speed) => {
  return Number((pos / (speed * 30)).toFixed(2));
};

export default time;
