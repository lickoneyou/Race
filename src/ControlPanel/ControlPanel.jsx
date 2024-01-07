import React from "react";
import styles from "./ControlePanel.module.css";
import { useDispatch } from "react-redux";

const ControlPanel = () => {
  const dispatch = useDispatch();

  const removeAllCarsHandler = () => {
    dispatch({ type: "REMOVE_ALL_CARS" });
  };

  return (
    <section>
      <h2 className={styles.controlPanelTitle}>Control panel:</h2>
      <div className={styles.controlPanelContainer}>
        <button className={styles.btn}>Start</button>
        <button onClick={removeAllCarsHandler} className={styles.btn}>
          Remove all cars
        </button>
      </div>
    </section>
  );
};

export default ControlPanel;
