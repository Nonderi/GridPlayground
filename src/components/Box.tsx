import styles from "./Box.module.css";
import React from "react";

function Box() {
  return (
    <div className={styles.box}>
      <p>Shall I compare thee to a summer's day?</p>
      <p>
        <span>❤️</span>Odette<span>❤️</span>
      </p>
    </div>
  );
}

export default Box;
