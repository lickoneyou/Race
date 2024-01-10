import React from "react";
import Score from "../../Score/Score";
import styles from "./MaunScore.module.css";
import { useDispatch } from "react-redux";

const MainScore = () => {
  const dispatch = useDispatch();
  const resetScore = () => {
    dispatch({ type: "RESET_SCORE" });
  };

  return (
    <main style={{ padding: "0px 300px 0px 300px" }}>
      <Score />
      <button onClick={resetScore} className={styles.btn}>
        Reset score
      </button>
    </main>
  );
};

export default MainScore;
