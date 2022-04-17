import { XIcon } from "@heroicons/react/outline";
import React from "react";
import styles from "../styles/Modal.module.css";

export default function Modal(props) {
  return (
    <div className={`${styles.modalBackground}`}>
      <section
        className={`${styles.modalContainer} bg-neutral-200 dark:bg-slate-700`}
      >
        <button onClick={props.exit}>
          <XIcon className="w-8 rounded-md p-1 bg-emerald-900 text-neutral-200 dark:bg-slate-900" />
        </button>
        {/* <div className={`${styles.title}`}>
          <h1 className="text-emerald-900 dark:text-neutral-100">
            Anda Yakin?
          </h1>
        </div> */}
        <div className={`${styles.body}`}>
          <p className="text-emerald-900 dark:text-neutral-100">
            Klik tombol OK untuk menghapus akun ini
          </p>
        </div>
        <div className={`${styles.footer}`}>
          <button
            className="bg-emerald-900 dark:text-neutral-100 dark:bg-slate-900"
            onClick={props.cancel}
          >
            Batal
          </button>
          <button className="bg-red-600">OK</button>
        </div>
      </section>
    </div>
  );
}
