import React from "react";
import { CreateCar } from "../../CreateCar/CreateCar";
import ControlPanel from "../../../ControlPanel/ControlPanel";
import styles from "./MainGame.module.css";

const MainGame = () => {
  return (
    <main>
      <CreateCar />
      <hr className={styles.hr} />
      <ControlPanel />
      <hr className={styles.hr} />
    </main>
  );
};

export default MainGame;
