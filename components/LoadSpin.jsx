import React from "react";
import styles from "../styles/LoadSpin.module.css";

export default function LoadSpin() {
  return (
    <div className={styles.spinnerScreen}>
      <section>
        <div className={`${styles.spinner} border-4 border-orange-400`}></div>
        <h1 className="text-emerald-900">Tunggu Sebentar</h1>
      </section>
    </div>
  );
}
