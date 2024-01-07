import React from "react";
import styles from "./BtnRouter.module.css";

const BtnRouter = ({ href, name }) => {
  return (
    <a className={styles.btn} href={href}>
      {name}
    </a>
  );
};

export default BtnRouter;
