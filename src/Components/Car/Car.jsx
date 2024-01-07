import React from "react";
import { useSelector } from "react-redux";
import CarImg from "../CarImg/CarImg";
import styles from "./Car.module.css";
import flag from "../../img/flag.png";

const Car = () => {
  const cars = useSelector((state) => state.raceCars);

  return (
    <div>
      <h2>Race</h2>
      {cars.map((car) => (
        <div key={Math.random() + car.name} className={styles.carContainer}>
          <CarImg color={car.color} />
          <img className={styles.flag} src={flag} alt="flag" />
          <hr className={styles.hr} />
          <div className={styles.carControlContainer}>
            <p className={styles.descr}>{car.name}</p>
            <button className={styles.btn}>Delete this car</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Car;
