import React from "react";
import Button from "../../components/Button";
import styles from "../../styles/Profile.module.css";
import PrEvCard from "../../components/PrEvCard";

export default function Profile() {
  return (
    <div
      className="w-4/5 divide-x divide-emerald-900"
      id={styles["profileContainer"]}
    >
      <section className="" id={styles["profile"]}>
        <h2
          className="text-emerald-900 dark:text-neutral-100"
          id={styles["profileHead"]}
        >
          Profil akun
        </h2>
        <div
          className="mx-auto rounded-full"
          id={styles["profileImage"]}
          style={{
            backgroundImage: `url(https://i1.sndcdn.com/avatars-ylM4tanwBXJZhjWb-X76mWw-t500x500.jpg)`,
          }}
        />
        <h2
          className="text-emerald-900 dark:text-neutral-100 text-center text-3xl"
          id={styles["profileName"]}
        >
          Jocelyn Bergson
        </h2>
        <h2 className="text-emerald-900 dark:text-neutral-100 text-center text-2xl">
          Male
        </h2>
        <div
          className="w-full divide-x divide-emerald-900"
          id={styles["eventsNumber"]}
        >
          <section id={styles["attends"]}>
            <h2>21</h2>
            <h3>Menghadiri</h3>
          </section>
          <section id={styles["host"]}>
            <h2>3</h2>
            <h3>Penyelenggara</h3>
          </section>
        </div>
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
          molestiae repudiandae placeat unde magni doloribus cum voluptatum
          eaque ratione nobis atque rem, autem, consectetur neque error nesciunt
          quaerat nihil voluptas?
        </p>
        <Button text={"Edit"} />
        <Button text={"Delete"} />
      </section>
      <section id={styles["events"]}>
        <h2
          className="text-emerald-900 dark:text-neutral-100"
          id={styles["tabEvents"]}
        >
          Acara Saya
        </h2>
        <PrEvCard />
        <PrEvCard />
        <PrEvCard />
      </section>
    </div>
  );
}
