<<<<<<< HEAD
import React from "react";
import Card from "../components/Card";
import Search from "../components/search";
=======
// import ButtonTest from "../components/ButtonTest";
>>>>>>> 91a2d6db17893fc60f2f6e78b94a35af9c9bcf0e
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
<<<<<<< HEAD
      {/* search */}

      <div>
        <Search />
      </div>

      {/* menu */}

      <div className="px-6 pt-6 pb-2 sm:max-w-sm space-x-3 text-sm md:max-w-xl mx-auto flex justify-around md:space-x-10 text-emerald-900 dark:text-slate-100 ">
        <div>
          <a className=" hover:text-orange-400 " href="">
            Semua
          </a>
        </div>
        <div>
          <a className=" hover:text-orange-400 " href="">
            Selebriti
          </a>
        </div>
        <div>
          <a className=" hover:text-orange-400 " href="">
            Permainan
          </a>
        </div>
        <div>
          <a className=" hover:text-orange-400 " href="">
            Kesehatan
          </a>
        </div>
        <div>
          <a className=" hover:text-orange-400 " href="">
            teknologi
          </a>
        </div>
      </div>

      <div className=" my-10 mx-10 h-0.5 w-auto bg-slate-200 dark:bg-slate-700"></div>

      <div className="my-20 flex flex-row mx-auto flex-wrap ">
        <div className="basis-1/2">
          <Card />
        </div>
        <div className="basis-1/2">
          <Card />
        </div>
      </div>
=======
      {/* <ButtonTest
        click1={() => {
          console.log("button1");
        }}
        click2={() => {
          console.log("button2");
        }}
        click3={() => {
          console.log("button3");
        }}
      /> */}
>>>>>>> 91a2d6db17893fc60f2f6e78b94a35af9c9bcf0e
    </div>
  );
}
