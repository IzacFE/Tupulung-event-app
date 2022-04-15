
import React from "react";
import Card from "../components/Card";
import Search from "../components/search";


import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
<<<<<<< HEAD
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
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
            <input
              type="search"
              class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <input
              type="search"
              class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                class="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
=======
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
>>>>>>> 8a8fd161cb62b61aca64e2538e18269c54917def
        </div>
      </div>
    </div>
  );
}
