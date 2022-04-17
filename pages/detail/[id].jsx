import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as EventServices from "../../service/event";
import EventDetail from "../../components/EventDetail";
import EventSponsor from "../../components/EventSponsor";
import EventParticipants from "../../components/EventParticipants";
import EventComments from "../../components/EventComments";
import LoadSpin from "../../components/LoadSpin";
import Router from "next/router";
import { joinEvents } from "../../service/event";

export default function Index() {
  const [event, setEvent] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    fetchData(id);
  }, [router.isReady, event]);

  const onClikJoinEvent = () => {
    if (localStorage.getItem("id")) {
      joinEvent();
    } else {
      Router.push("/authentication/login");
    }
  };

  const joinEvent = async () => {
    return await joinEvents(id, {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    })
      .then((result) => {
        alert(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function fetchData(id) {
    console.log(id);
    await EventServices.getByID(id)
      .then((res) => {
        setEvent(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const renderDetailSection = () => {
    if (isLoading) {
      return <LoadSpin />;
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
        <section className="mb-20">
          <div className="flex space-x-2 justify-center">
            <button
              type="button"
              className="inline-block px-28 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight rounded  hover:bg-orange-500  focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600  transition duration-150 ease-in-out"
              onClick={() => {
                onClikJoinEvent();
              }}
            >
              ikut event
            </button>
          </div>
        </section>

        <EventComments id={event.id} />
      </>
    );
  };

  return (
    <div className="container px-7 md:px-14 lg:px-28">
      <div className="">{renderDetailSection()}</div>
    </div>
  );
}
