import React from "react";
import styles from "../styles/Button.module.css";

export default function Button(props) {
  return (
    <div
      className="w-full bg-orange-400 hover:text-orange-400 mt-10 hover:bg-white border-2 border-orange-400 text-center rounded-md text-white"
      id={styles["buttonLogin"]}
      onClick={props.onClick}
    >
      Masuk
    </div>
  );
}
