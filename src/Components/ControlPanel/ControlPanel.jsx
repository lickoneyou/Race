import React, { useEffect, useState } from "react";
import styles from "./ControlPanel.module.css";
import { useDispatch, useSelector } from "react-redux";

const ControlPanel = () => {
  const dispatch = useDispatch();
  const [isRaceAvailable, setIsRaceAvailable] = useState(false);
  const disabled = useSelector((state) => state.disabled);

  const removeAllCarsHandler = () => {
    dispatch({ type: "REMOVE_ALL_CARS" });
  };

  const startRaceHandler = () => {
    setIsRaceAvailable((state) => (state = true));
    dispatch({ type: "DISABLED" });
  };

  const drowRaceHandler = () => {
    if (
      JSON.parse(localStorage.getItem("race")).raceCars.every(
        (el) => el.pos === 80
      )
    ) {
      setIsRaceAvailable((state) => (state = false));
      return false;
    }
    dispatch({ type: "START" });
  };

  useEffect(() => {
    let timer = null;
    if (isRaceAvailable) {
      timer = setInterval(() => drowRaceHandler(), 30);
    }
    return () => clearInterval(timer);
  });

  return (
    <section>
      <h2 className={styles.controlPanelTitle}>Control panel:</h2>
      <div className={styles.controlPanelContainer}>
        <button
          onClick={startRaceHandler}
          className={[styles.btn, styles.startBtn].join(" ")}
          disabled={disabled}
        >
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
