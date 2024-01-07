import React, { useRef, useState } from "react";
import styles from "./CreateCar.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { CarConstructor } from "../../handlers/carConstructor";

export const CreateCar = () => {
  const [inputVaule, setInputValue] = useState("");
  const dispatch = useDispatch();
  const colorRef = useRef();
  const cars = useSelector((state) => state.raceCars);

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

  const onChangeHandler = (e) => {
    setInputValue((inputVaule) => (inputVaule = e.target.value));
  };

  const onClickHandler = () => {
    if (!inputVaule) {
      notify("Enter car name");
      return;
    }
    if (!!cars.find((car) => car.name === inputVaule)) {
      notify(
        `Car "${inputVaule}" already exists, please select a different name`
      );
      return;
    }
    dispatch({
      type: "ADD_CAR",
      payload: new CarConstructor(inputVaule, colorRef.current.value),
    });
    setInputValue("");
  };

  return (
    <>
      <ToastContainer />
      <h2 className={styles.createCarTitle}>Create car:</h2>
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
