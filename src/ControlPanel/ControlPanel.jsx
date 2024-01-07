import React, { useEffect, useState } from "react";
import styles from "./ControlePanel.module.css";
import { useDispatch } from "react-redux";

const ControlPanel = () => {
  const dispatch = useDispatch();
  const [state, setS] = useState(0);

  const removeAllCarsHandler = () => {
    dispatch({ type: "REMOVE_ALL_CARS" });
  };

  const startRaceHandler = () => {
    if (
      JSON.parse(localStorage.getItem("race")).raceCars.every(
        (el) => el.pos === 80
      )
    ) {
      return false;
    }
    dispatch({ type: "START" });
  };

  // useEffect(
  //   () =>
  //     setInterval(() => {
  //       setS((state) => (state += 1));
  //       console.log(state);
  //     }, 1000),
  //   [state]
  // );

  // useEffect(() => {
  //   setInterval(() => {
  //     setS((state) => (state += 1));
  //     console.log(state);
  //   }, 1000);
  // }, [state]);

  return (
    <section>
      <h2 className={styles.controlPanelTitle}>Control panel:</h2>
      <div className={styles.controlPanelContainer}>
        <button onClick={startRaceHandler} className={styles.btn}>
          Start
        </button>
        <button onClick={removeAllCarsHandler} className={styles.btn}>
          Remove all cars
        </button>
      </div>
    </section>
  );
};

export default ControlPanel;
