import React from "react";
import styles from "./CreateCar.module.css";

export const CreateCar = () => {
  return (
    <>
      <h2 className={styles.createCarTitle}>Create Car:</h2>
      <div className={styles.inputsContainer}>
        <input className={styles.carName} placeholder="Enter car name..." />
        <div className={styles.colorContainer}>
          <input
            type="color"
            value="#ff4500"
            className={styles.color}
            id="color"
          />
          <label className={styles.colorLabel} for="color">
            Choose car color
          </label>
        </div>
        <button className={styles.createCarBtn}>Create Car</button>
      </div>
    </>
  );
};
