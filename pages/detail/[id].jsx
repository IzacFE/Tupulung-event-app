import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as EventServices from "../../service/event";
import EventDetail from "../../components/EventDetail";
import EventSponsor from "../../components/EventSponsor";
import EventParticipants from "../../components/EventParticipants";
import EventComments from "../../components/EventComments";
import LoadSpin from "../../components/LoadSpin";
import axios from "axios";

export default function Index() {
  const [event, setEvent] = useState({});
  // const { query, isReady } = useRouter();
  const router = useRouter();
  const { id } = router.query;
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
    // if (isReady) {
    fetchData();
    // query.id
    // }
  }, []);

  async function fetchData() {
    await axios
      .get(`/api/events/${id}`)
      // EventServices.getByID(id)
      .then((response) => {
        setEvent(response.data);
        console.log(response.data);
        // if (event.cover) {
        //   setIsLoading(false);
        // }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(setIsLoading(false));
  }

  let result;
  if (isLoading) {
    result = <LoadSpin />;
  } else {
    result = (
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

        <EventComments id={event.id} />
      </>
    );
  }

  return (
    <div className="container px-7 md:px-14 lg:px-28">
      <div className="">
        {/* gambar */}
        {/* {renderDetailSection()} */}
        {result}
      </div>
    </div>
  );
}
