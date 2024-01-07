import React from "react";
import styles from "./ControlePanel.module.css";

const ControlPanel = () => {
  return (
    <section>
      <h2 className={styles.controlPanelTitle}>Control panel:</h2>
      <div className={styles.controlPanelContainer}>
        <button className={styles.btn}>Start</button>
        <button className={styles.btn}>Remove all cars</button>
      </div>
    </section>
  );
};

export default ControlPanel;
