import React from "react";
import styles from "../styles/PrEvCard.module.css";
import { HeartIcon } from "@heroicons/react/outline";

export default function PrEvCard() {
  return (
    <section
      className="w-full bg-neutral-100 dark:bg-slate-800 p-2"
      id={styles["container"]}
    >
      <div
        className="rounded-md bg-emerald-900"
        id={styles["eventImage"]}
        style={{
          backgroundImage: `url(https://i1.sndcdn.com/avatars-ylM4tanwBXJZhjWb-X76mWw-t500x500.jpg)`,
        }}
      />
      <section className="" id={styles["eventDetail"]}>
        <h2 className="text-emerald-900 dark:text-neutral-100">
          Kamis, april 9
        </h2>
        <h1 className="text-emerald-900 dark:text-neutral-100">
          Spotify Music Fest
        </h1>
        <h2 className="text-emerald-900 dark:text-neutral-100">
          Diadakan oleh MTV
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
