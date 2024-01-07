import React from "react";
import { CreateCar } from "../../CreateCar/CreateCar";
import ControlPanel from "../../../ControlPanel/ControlPanel";
import styles from "./MainGame.module.css";
import Car from "../../Car/Car";

const MainGame = () => {
  return (
    <main className={styles.main}>
      <CreateCar />
      <hr className={styles.hr} />
      <ControlPanel />
      <hr className={styles.hr} />
      <Car />
    </main>
  );
};

export default MainGame;
