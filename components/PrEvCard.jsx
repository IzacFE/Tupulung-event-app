import React from "react";
import styles from "../styles/PrEvCard.module.css";
import { DotsCircleHorizontalIcon, HeartIcon } from "@heroicons/react/outline";

export default function PrEvCard() {
  return (
    <section className="border-white" id={styles["container"]}>
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
        <h3 className="text-emerald-900 dark:text-neutral-100">
          Diadakan oleh MTV
        </h3>
        <p className="text-emerald-900 dark:text-neutral-100">30 peserta</p>
        <div>
          <span>
            <HeartIcon className="h-5 w-5" /> 5
          </span>

          <DotsCircleHorizontalIcon className="h-5 w-5" />
        </div>
      </section>
    </section>
  );
}
