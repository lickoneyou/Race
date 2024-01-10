import React from "react";
import BtnRouter from "../BtnRouter/BtnRouter";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";

const HeaderGame = () => {
const scoreDisabled = useSelector(state => state.scoreDisabled)

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Game</h1>
      <BtnRouter href="#score" name="Score" disabled={scoreDisabled} />
    </header>
  );
};

export default HeaderGame;
