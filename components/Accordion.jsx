import { MinusIcon, PlusIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import styles from "../styles/Accordion.module.css";

export default function Accordion(props) {
  const [clicked, setClicked] = useState(false);

  const icon = () => {
    if (clicked) {
      return <MinusIcon className={`${styles.icon} text-orange-400`} />;
    } else {
      return (
        <PlusIcon
          className={`${styles.icon} text-emerald-900 dark:text-neutral-100`}
        />
      );
    }
  };

  return (
    <div
      className={`${styles.accordion} w-full border border-gray-400 dark:border-slate-700`}
    >
      <header
        className={`${styles.header} w-full bg-white dark:bg-slate-700 border-2-gray`}
        onClick={() => {
          setClicked(!clicked);
          console.log(clicked);
        }}
      >
        <h2
          className={
            clicked
              ? `text-orange-400`
              : `text-emerald-900 dark:text-neutral-100`
          }
        >
          Edit Profile
        </h2>
        {icon()}
      </header>

      <section
        className={
          clicked
            ? `${styles.container} bg-white dark:bg-slate-700`
            : `${styles.deactive}`
        }
      >
        {props.children}
      </section>
    </div>
  );
}
