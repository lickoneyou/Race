import React, { useEffect, useState } from "react";
import styles from "./ControlPanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const ControlPanel = () => {
  const dispatch = useDispatch();
  const [isRaceAvailable, setIsRaceAvailable] = useState(false);
  const disabled = useSelector((state) => state.disabled);
  const raceCars = useSelector((state) => state.race.raceCars);
  const restartDisable = useSelector((state) => state.restartDisable);

  const notify = (text) =>
    toast.error(text, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const removeAllCarsHandler = () => {
    dispatch({ type: "RESTART_DISABLED" });
    dispatch({ type: "REMOVE_ALL_CARS" });
    dispatch({ type: "ENABLE" });
    dispatch({ type: "SCORE_ENABLE" });
  };

  const startRaceHandler = () => {
    if (raceCars.length < 2) {
      notify("Add 2 or more cars");
    } else {
      dispatch({ type: "CREATE_CARS_SPEED" });
      setIsRaceAvailable((state) => (state = true));
      dispatch({ type: "DISABLED" });
      dispatch({ type: "SCORE_DISABLED" });
    }
  };

  const drowRaceHandler = () => {
    if (
      JSON.parse(localStorage.getItem("race")).raceCars.every(
        (el) => el.pos >= 80
      )
    ) {
      const winner = [...raceCars].sort(
        (carA, carB) => carB.speed - carA.speed
      )[0];

      setIsRaceAvailable((state) => (state = false));
      dispatch({ type: "SCORE_ENABLE" });
      dispatch({ type: "WINNER", payload: winner });
      notify(`Car '${winner.name}' WIN!`);
      if (raceCars.length) {
        dispatch({ type: "RESTART_ENABLE" });
      }
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

  const restart = () => {
    dispatch({ type: "RESTART_DISABLED" });
    dispatch({ type: "REFRESH" });
    dispatch({ type: "ENABLE" });
    dispatch({ type: "SCORE_ENABLE" });
  };

  return (
    <section>
      <h2 className={styles.controlPanelTitle}>Control panel:</h2>
      <div className={styles.controlPanelContainer}>
        <button
          onClick={startRaceHandler}
          className={[styles.btn, styles.disabledBtn].join(" ")}
          disabled={disabled}
        >
          Start
        </button>
        <button
          className={[styles.btn, styles.disabledBtn].join(" ")}
          onClick={restart}
          disabled={restartDisable}
        >
          Restart
        </button>
        <button onClick={removeAllCarsHandler} className={styles.btn}>
          Remove all cars
        </button>
      </div>
    </section>
  );
};

export default ControlPanel;
