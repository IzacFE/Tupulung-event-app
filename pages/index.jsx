import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import HomeMenu from "../components/HomeMenu";
import PrEvCard from "../components/PrEvCard";
import Search from "../components/search";

import * as EventServices from "../service/event";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [event, setEvent] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

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

  const renderCard = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return event.map((value) => (
      <div key={value.id} className="w-6/12 mb-7">
        <Card
          id={value.id}
          image={value.cover}
          title={value.title}
          date={value.datetime_event}
          host={value.hosted_by}
          attend={value.participants ? value.participants.length : 0}
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
      <HomeMenu />
      <div className=" my-10 mx-10 h-0.5 w-auto bg-slate-200 dark:bg-slate-700" />

      <section>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-around">{renderCard()}</div>
          <div className=" my-10 mx-10 h-0.5 w-auto bg-slate-200 dark:bg-slate-700" />
        </div>
      </section>
    </div>
  );
}
