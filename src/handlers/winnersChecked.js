const winnersChecked = (winners, { payload: winner }) => {
  if (!winners.find((winCar) => winCar.name === winner.name)) {
    const winnerMini = {
      name: winner.name,
      wins: 1,
      bestTime: winner.bestTime,
    };
    winners.push(winnerMini);
  } else {
    const winnerIndex = winners.findIndex((el) => el.name === winner.name);
    winners[winnerIndex].wins += 1;
    winners[winnerIndex].bestTime = winner.bestTime;
  }
  return winners;
};

export default winnersChecked;
