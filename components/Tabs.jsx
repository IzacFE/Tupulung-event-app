import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/Tabs.module.css";
import PrEvCard from "./PrEvCard";
// import "./App.css";

export default function Tabs(props) {
  const [toggleState, setToggleState] = useState(1);
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    if (props.data) {
      setEventData(props.data);
    }
  });
  //   const dataShare = () => {};

  //   const milikSayaEvents = (data) => {

  //   };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="bg-white dark:bg-slate-700" id={styles["container"]}>
      {console.log(props.data)}
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
          {eventData.map((item) => {
            return (
              <PrEvCard
                image={item.cover}
                date={item.datetime_event}
                location={item.location}
                title={item.title}
                hosted={item.hosted_by}
                description={item.description}
              />
            );
          })}
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
          {props.children}
        </div>
      </div>
    </div>
  );
}
