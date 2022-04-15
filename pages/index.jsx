import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import HomeMenu from "../components/HomeMenu";
import PrEvCard from "../components/PrEvCard";
import Search from "../components/search";
import * as EventServices from "../service/event";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [event, setEvent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    return await EventServices.get({ limit: 10, page: 1 })
      .then((res) => {
        if (res.code === 200) {
          setEvent(res.data);
          setIsLoading(false);
          // console.log(event);
        } else {
          // console.log(res);
        }
        // setEvent(res.data);

        return res;
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(true);
      });
  };

  useEffect(() => {
    const data = fetchData();
    // console.log(data);
  }, []);

  const renderCard = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return event.map((value) => (
      <div key={value.id} className="w-6/12">
        <Card
          gambar={value.cover}
          judul={value.title}
          tanggal={value.datetime_event}
          penyelenggara={value.hosted_by}
        />
      </div>
    ));
  };
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
          <div className="flex flex-wrap justify-around">{renderCard()}</div>
          <div className=" my-10 mx-10 h-0.5 w-auto bg-slate-200 dark:bg-slate-700"></div>
        </div>
      </section>
    </div>
  );
}
