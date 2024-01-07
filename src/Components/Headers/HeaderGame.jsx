import React from "react";
import BtnRouter from "../BtnRouter/BtnRouter";
import styles from "./Header.module.css";

const HeaderGame = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Game</h1>
      <BtnRouter href="#score" name="Score" />
    </header>
  );
};

export default HeaderGame;
