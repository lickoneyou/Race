import React, { useState } from "react";
import styles from "./CreateCar.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreateCar = () => {
  const [inputVaule, setInputValue] = useState("");

  const notify = () =>
    toast.error("Enter car name", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const onChangeHandler = (e) => {
    setInputValue((inputVaule) => (inputVaule = e.target.value));
  };

  const onClickHandler = () => {
    if (!inputVaule) {
      notify();
    }
  };

  return (
    <>
      <ToastContainer />
      <h2 className={styles.createCarTitle}>Create Car:</h2>
      <div className={styles.inputsContainer}>
        <input
          type="text"
          className={styles.carName}
          placeholder="Enter car name..."
          value={inputVaule}
          onChange={onChangeHandler}
        />
        <div className={styles.colorContainer}>
          <input
            type="color"
            defaultValue="#ff4500"
            className={styles.color}
            id="color"
          />
          <label className={styles.colorLabel} htmlFor="color">
            Choose car color
          </label>
        </div>
        <button onClick={onClickHandler} className={styles.createCarBtn}>
          Create Car
        </button>
      </div>
    </>
  );
};
