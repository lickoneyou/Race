import React from "react";
import styles from "./Score.module.css";
import { useSelector } from "react-redux";

const Score = () => {
  const winners = [...useSelector((state) => state.race.allCars)].sort(
    (a, b) => b.wins - a.wins
  );
  const winnerPlace = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles.scoreContainer}>
      <div className={[styles.row, styles.rowHead].join("")}>
        <div className={[styles.col, styles.colHead].join("")}>Place</div>
        <div className={[styles.col, styles.colHead].join("")}>Name</div>
        <div className={[styles.col, styles.colHead].join("")}>Best Time</div>
        <div className={[styles.col, styles.colHead].join("")}>Wins</div>
      </div>
      {winnerPlace.map((el, index) => (
        <div className={styles.row} key={el}>
          <div className={styles.col}>{el}</div>
          <div className={styles.col}>{winners?.[index]?.name ?? ""}</div>
          <div className={styles.col}>{winners?.[index] ? `${winners[index].bestTime}s` : ''}</div>
          <div className={styles.col}>{winners?.[index]?.wins ?? ""}</div>
        </div>
      ))}
    </div>
  );
};

export default Score;
