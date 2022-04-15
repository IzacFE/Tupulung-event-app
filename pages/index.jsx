import React from "react";
import Card from "../components/Card";
import HomeMenu from "../components/HomeMenu";
import PrEvCard from "../components/PrEvCard";
import Search from "../components/search";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* search */}

      <div>
        <Search />
      </div>

      {/* menu */}
      <div className="container mx-auto">
        <div className="flex justify-around px-32">
          <HomeMenu href="/detail/1">Semua</HomeMenu>
          <HomeMenu>Selebriti</HomeMenu>
          <HomeMenu>Permainan</HomeMenu>
          <HomeMenu>Kesehatan</HomeMenu>
          <HomeMenu>Teknologi</HomeMenu>
        </div>
      </div>

      <div className=" my-10 mx-10 h-0.5 w-auto bg-slate-200 dark:bg-slate-700"></div>

      <section>
        <div className="container mx-auto max-w-6xl">
          <div className="flex space-x-10 ">
            <div className="w-6/12 ">
              <Card
                gambar="https://i1.sndcdn.com/avatars-ylM4tanwBXJZhjWb-X76mWw-t500x500.jpg"
                judul="meet and great actor international"
                tanggal="rabu, 22 April 2022"
                penyelenggara="MTv Production"
                jumlahPeserta="30"
              />
            </div>
            <div className="w-6/12">
              <Card
                gambar="/undraw.png"
                judul="spotify event music international"
                tanggal="rabu, 22 April 2022"
                penyelenggara="MTv Production"
                jumlahPeserta="30"
              />
            </div>
          </div>
          <div className=" my-10 mx-10 h-0.5 w-auto bg-slate-200 dark:bg-slate-700"></div>
        </div>
        <div className="container mx-auto max-w-6xl">
          <div className="flex space-x-10 ">
            <div className="w-6/12 ">
              <Card
                gambar="https://i1.sndcdn.com/avatars-ylM4tanwBXJZhjWb-X76mWw-t500x500.jpg"
                judul="meet and great actor international"
                tanggal="rabu, 22 April 2022"
                penyelenggara="MTv Production"
                jumlahPeserta="30"
              />
            </div>
            <div className="w-6/12">
              <Card
                gambar="/undraw.png"
                judul="spotify event music international"
                tanggal="rabu, 22 April 2022"
                penyelenggara="MTv Production"
                jumlahPeserta="30"
              />
            </div>
          </div>
          <div className=" my-10 mx-10 h-0.5 w-auto bg-slate-200 dark:bg-slate-700"></div>
        </div>
      </section>
    </div>
  );
}
