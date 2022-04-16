import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as EventServices from "../../service/event";
import EventDetail from "../../components/EventDetail";
import EventSponsor from "../../components/EventSponsor";
import EventParticipants from "../../components/EventParticipants";

export default function Index() {
  const [event, setEvent] = useState({});
  const { query, isReady } = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [participants, setParticipants] = useState([]);
  // const [event, setEvent] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // const fetchData = () => {
  //   return EventServices.get({ limit: 10, page: 1 });
  // };
  // useEffect(() => {
  //   const data = fetchData();
  //   if (data.code === 200) {
  //     setEvent(data.data);
  //     setIsLoading(false);
  //   }
  //   console.log(data);
  // }, []);
  useEffect(() => {
    if (isReady) {
      fetchData(query.id);
    }
  });

  async function fetchData(id) {
    await EventServices.getByID(id)
      .then((res) => {
        setEvent(res.data);
        if (event.cover) {
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const renderDetailSection = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <EventDetail
          title={event.title}
          host={event.hosted_by}
          image={event.cover}
          date={event.datetime_event}
          location={event.location}
          description={event.description}
        />
        <EventSponsor />
        <EventParticipants participants={event.participants} />
      </>
    );
  };

  return (
    <div className="">
      <div className="max-w-xs md:max-w-3xl  xl:max-w-7xl m-auto">
        {/* gambar */}
        {renderDetailSection()}

        <section className="mb-20">
          <div className="flex space-x-2 justify-center">
            <button
              type="button"
              className="inline-block px-28 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight rounded  hover:bg-orange-500  focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600  transition duration-150 ease-in-out"
            >
              ikut event
            </button>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-white rounded-lg  w-auto h-36 dark:bg-slate-900 flex justify-center mb-3">
            {/* <div className=""> */}
            <textarea
              className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-light
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-orange-400 focus:outline-none
                resize-none
                mt-2 mb-4
              "
              id="comment"
              rows="3"
              placeholder="apa komentar kamu?"
            ></textarea>
            <button
              type="button"
              className=" inline-block px-10 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight rounded  hover:bg-orange-500  focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600  transition duration-150 ease-in-out "
            >
              kirim
            </button>
            {/* </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}
