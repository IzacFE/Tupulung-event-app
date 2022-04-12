import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className="bg-emerald-900 dark:bg-slate-900" id={styles["footer"]}>
      <div className="text-white" id={styles["footerContainer"]}>
        <h4 className="mx-4 text-xl text-gray-300 my-2">Kelompok 1</h4>
        <a href="/about" className="mx-4 my-2">
          <h2 className="text-2xl">Tentang kami</h2>
        </a>
        <h4 className="mx-4 text-xl text-gray-300 my-2">
          &#9400; Copyright 2022
        </h4>
      </div>
    </footer>
  );
}
