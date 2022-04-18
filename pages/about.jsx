import React from "react";
import styles from "../styles/About.module.css";

export default function about() {
  return (
    <section
      className={`${styles.layout} bg-emerald-900 rounded-md dark:bg-slate-700`}
    >
      <h1 className="text-orange-400">KELOMPOK 1</h1>
      <h1 className="text-orange-400">TUPULUNG EVENT APP</h1>
      <div className={`${styles.container} bg-white dark:bg-slate-700`}>
        <div className={`${styles.division} bg-white dark:bg-slate-700`}>
          <h2 className="text-emerald-900 dark:text-neutral-100">Front end</h2>

          <div className={styles.person}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(/profileMuka.jpg)`,
              }}
            />
            <h2 className="text-emerald-900 dark:text-neutral-100">
              Izac Aqsha Ghifari
            </h2>
          </div>

          <div className={styles.person}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(/ricky.jpg)`,
              }}
            />
            <h2 className="text-emerald-900 dark:text-neutral-100">
              Ricky Hariana Ardiansyah
            </h2>
          </div>
        </div>

        <div className={`${styles.division} bg-white dark:bg-slate-700`}>
          <h2 className="text-emerald-900 dark:text-neutral-100">Back end</h2>

          <div className={styles.person}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(/13761315.png)`,
              }}
            />
            <h2 className="text-emerald-900 dark:text-neutral-100">
              Moh. Badar Wildanie
            </h2>
          </div>

          <div className={styles.person}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(/nasrul.png)`,
              }}
            />
            <h2 className="text-emerald-900 dark:text-neutral-100">
              Muh. Nasrul
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
