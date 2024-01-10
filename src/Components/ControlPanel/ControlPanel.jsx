import React, { useEffect, useState } from "react";
import styles from "./ControlPanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const ControlPanel = () => {
  const dispatch = useDispatch();
  const [isRaceAvailable, setIsRaceAvailable] = useState(false);
  const disabled = useSelector((state) => state.disabled);
  const raceCars = useSelector((state) => state.race.raceCars);
  const [disabledRestartBtn, setDisabledRestartBtn] = useState(true);

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
    dispatch({ type: "REMOVE_ALL_CARS" });
    dispatch({ type: "ENABLE" });
  };

  const startRaceHandler = () => {
    if (raceCars.length < 2) {
      notify("Add 2 or more cars");
    } else {
      setIsRaceAvailable((state) => (state = true));
      dispatch({ type: "DISABLED" });
    }
  };

  const drowRaceHandler = () => {
    if (
      JSON.parse(localStorage.getItem("race")).raceCars.every(
        (el) => el.pos === 80
      )
    ) {
      setIsRaceAvailable((state) => (state = false));
      setDisabledRestartBtn((state) => (state = false));
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
    setDisabledRestartBtn((state) => (state = true));
    dispatch({ type: "REFRESH" });
    dispatch({ type: "ENABLE" });
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
          disabled={disabledRestartBtn}
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
