import React, { useRef, useState } from "react";
import styles from "./CreateCar.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { CarConstructor } from "../../handlers/carConstructor";

export const CreateCar = () => {
  const [inputVaule, setInputValue] = useState("");
  const dispatch = useDispatch();
  const colorRef = useRef();

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
      return;
    }
    dispatch({
      type: "ADD_CAR",
      payload: new CarConstructor(inputVaule, colorRef.current.value),
    });
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
            ref={colorRef}
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
