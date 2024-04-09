import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CarImg from "../CarImg/CarImg";
import styles from "./Car.module.css";
import flag from "../../img/flag.png";

const Car = () => {
  const cars = useSelector((state) => state.race.raceCars);
  const disabled = useSelector((state) => state.disabled);
  const dispatch = useDispatch();

  const deleteCarHandler = (name) => {
    dispatch({ type: "DELETE_CAR", payload: name });
  };

  return (
    <div data-test='carContainer'>
      <h2>Race</h2>
      {cars.map((car) => (
        <div data-test='car' key={Math.random() + car.name} className={styles.carContainer}>
          <CarImg color={car.color} pos={car.pos} />
          <img className={styles.flag} src={flag} alt="flag" />
          <hr className={styles.hr} />
          <div className={styles.carControlContainer}>
            <p className={styles.descr}>{car.name}</p>
            <button
              onClick={() => deleteCarHandler(car.name)}
              className={styles.btn}
              disabled={disabled}
            >
              Delete this car
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Car;
