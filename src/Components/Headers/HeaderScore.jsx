import React from "react";
import BtnRouter from "../BtnRouter/BtnRouter";
import styles from "./Header.module.css";

const HeaderScore = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Score</h1>
      <BtnRouter name="Game" href="#" />
    </header>
  );
};

export default HeaderScore;
