import React from "react";
import styles from "../styles/PrEvCard.module.css";
import { HeartIcon } from "@heroicons/react/outline";

export default function PrEvCard(props) {
  return (
    <section
      className="w-full bg-neutral-100 dark:bg-slate-800 p-2"
      id={styles["container"]}
    >
      <div
        className="rounded-md bg-emerald-900"
        id={styles["eventImage"]}
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      />
      <section className="" id={styles["eventDetail"]}>
        <h2 className="text-emerald-900 dark:text-neutral-100">{props.date}</h2>
        <h2 className="text-emerald-900 dark:text-neutral-100">
          {props.location}
        </h2>
        <h1 className="text-emerald-900 dark:text-neutral-100">
          {props.title}
        </h1>
        <h2 className="text-emerald-900 dark:text-neutral-100">
          {props.hosted}
        </h2>
        <h2 className="text-emerald-900 dark:text-neutral-100">
          {props.description}
        </h2>
        <div id={styles["detailFlex"]}>
          <p className="text-emerald-900 dark:text-neutral-100">30 peserta</p>
          <div>
            <HeartIcon className="h-5 w-5 text-red-600" />
            <h3 className="text-emerald-900 dark:text-neutral-100">5</h3>
          </div>
        </div>
      </section>
    </section>
  );
}
