import React from "react";
import { useState } from "react";
import styles from "../styles/Tabs.module.css";
import PrEvCard from "./PrEvCard";
// import "./App.css";

export default function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="bg-white dark:bg-slate-700" id={styles["container"]}>
      <div className={styles.blocTabs}>
        <button
          className={
            toggleState === 1
              ? `${styles.tabs} ${styles.activeTabs} bg-white text-orange-400 dark:bg-slate-700`
              : `${styles.tabs} text-emerald-900 bg-neutral-100 dark:bg-slate-900 dark:text-slate-500`
          }
          onClick={() => toggleTab(1)}
        >
          Milik Saya
        </button>
        <button
          className={
            toggleState === 2
              ? `${styles.tabs} ${styles.activeTabs} bg-white text-orange-400 dark:bg-slate-700`
              : `${styles.tabs} text-emerald-900 bg-neutral-100 dark:bg-slate-900 dark:text-slate-500`
          }
          onClick={() => toggleTab(2)}
        >
          Diikuti
        </button>
        <button
          className={
            toggleState === 3
              ? `${styles.tabs} ${styles.activeTabs} bg-white text-orange-400 dark:bg-slate-700`
              : `${styles.tabs} text-emerald-900 bg-neutral-100 dark:bg-slate-900 dark:text-slate-500`
          }
          onClick={() => toggleTab(3)}
        >
          Buat Acara
        </button>
      </div>

      <div className={styles.contentTabs}>
        <div
          className={
            toggleState === 1
              ? `${styles.content} ${styles.activeContent}`
              : styles.content
          }
        >
          <PrEvCard />
          <PrEvCard />
          <PrEvCard />
        </div>

        <div
          className={
            toggleState === 2
              ? `${styles.content} ${styles.activeContent}`
              : styles.content
          }
        >
          <PrEvCard />
        </div>

        <div
          className={
            toggleState === 3
              ? `${styles.content} ${styles.activeContent}`
              : styles.content
          }
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
}
