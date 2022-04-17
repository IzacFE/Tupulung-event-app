import React, { useEffect, useState, useRef } from "react";

import Card from "../components/Card";
import HomeMenu from "../components/HomeMenu";
import PrEvCard from "../components/PrEvCard";
// import Search from "../components/search";

import * as EventServices from "../service/event";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import LoadSpin from "../components/LoadSpin";

export default function Home() {
  const [event, setEvent] = useState({});
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const nameForm = useRef(null);
  const Router = useRouter();
  const { c } = Router.query;

  const handleClickEvent = () => {
    const form = nameForm.current;
    setSearch(form["search"].value);
    setLocation(form["location"].value);
  };

  useEffect(() => {
    fetchData({
      limit: 10,
      page: 1,
      q: search,
      location: location,
      category_id: c,
    });
  }, [search, location, c]);

  const fetchData = async (params) => {
    return await EventServices.get(params)
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

  let result;
  if (isLoading) {
    result = <LoadSpin />;
  } else {
    result = (
      <div className="container px-4 md:px-10 lg:px-24">
        {/* search */}

        <div>
          <div className="flex justify-center">
            <div className="my-3 mt-9  ">
              {/* <div className="input-group relative flex w-full mb-4"> */}
              <form
                ref={nameForm}
                className="input-group relative flex w-full mb-4"
              >
                <input
                  type="search"
                  className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-400 focus:outline-none dark:bg-slate-900 dark:border-slate-900"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                  name="search"
                />
                <input
                  type="search"
                  className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-400 focus:outline-none dark:bg-slate-900 dark:border-slate-900"
                  placeholder="location"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                  name="location"
                />

                <button
                  className="btn inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded-r-sm shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-600  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  type="button"
                  id="button-addon2"
                  onClick={() => handleClickEvent()}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    className="w-4"
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
              </form>
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* menu */}
        <HomeMenu />
        <div className=" my-10 mx-10 h-0.5 w-auto bg-slate-200 dark:bg-slate-700" />

        <section>
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-around">
              {event.map((value) => {
                return (
                  <div key={value.id} className="w-6/12 mb-7">
                    <Card
                      id={value.id}
                      image={value.cover}
                      title={value.title}
                      date={value.datetime_event}
                      host={value.hosted_by}
                      attend={
                        value.participants ? value.participants.length : 0
                      }
                    />
                  </div>
                );
              })}
            </div>
            <div className=" my-10 mx-10 h-0.5 w-auto bg-slate-200 dark:bg-slate-700" />
          </div>
        </section>
      </div>
    );
  }

  return <>{result}</>;
}
