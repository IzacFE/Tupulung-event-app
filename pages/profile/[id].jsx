import React from "react";
import Button from "../../components/Button";
import styles from "../../styles/Profile.module.css";
import Image from "next/image";
import picture from "../../public/authentication_picture.png";
import PrEvCard from "../../components/PrEvCard";

export default function Profile() {
  return (
    <div className="w-4/5" id={styles["profileContainer"]}>
      <section className="" id={styles["profile"]}>
        <h2
          className="text-emerald-900 dark:text-neutral-100"
          id={styles["profileHead"]}
        >
          Profil
        </h2>
        <div
          className="mx-auto rounded-full"
          id={styles["profileImage"]}
          style={{
            backgroundImage: `url(https://i1.sndcdn.com/avatars-ylM4tanwBXJZhjWb-X76mWw-t500x500.jpg)`,
          }}
        />
        <h2 className="text-emerald-900 dark:text-neutral-100 text-center text-3xl">
          Jocelyn
        </h2>
        <h2 className="text-emerald-900 dark:text-neutral-100 text-center text-2xl">
          Male
        </h2>
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
        <h2 className="text-emerald-900 dark:text-neutral-100">Acara Saya</h2>
        <PrEvCard />
      </section>
    </div>
  );
}
