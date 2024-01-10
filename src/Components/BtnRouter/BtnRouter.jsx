import React from "react";
import styles from "./BtnRouter.module.css";

const BtnRouter = ({ href, name, disabled }) => {
  return (
    <form action={href}>
      <button className={styles.btn} disabled={disabled}>
        {name}
      </button>
    </form>
  );
};

export default BtnRouter;
