import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import * as EventServices from "../../service/event";
import styles from "../../styles/Detail.module.css";

import EventDetail from "../../components/EventDetail";
// import EventSponsor from "../../components/EventSponsor";
import EventParticipants from "../../components/EventParticipants";
import EventComments from "../../components/EventComments";
import LoadSpin from "../../components/LoadSpin";
import ProcessSpin from "../../components/ProcessSpin";

import Accordion from "../../components/Accordion";
import Button from "../../components/Button";
import { TrashIcon } from "@heroicons/react/outline";
import Modal from "../../components/Modal";
import Router from "next/router";
import { joinEvents } from "../../service/event";
import swal from "sweetalert";

export default function Index() {
  const [event, setEvent] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // const [participants, setParticipants] = useState([]);

  const [delAlert, setDelAlert] = useState(false);
  const [isProcess, setIsProcess] = useState(false);

  // Edit form data
  const [title, setTitle] = useState("");
  const [hosted_by, setHosted_by] = useState("");
  const [cover, setCover] = useState("");
  const [datetime_event, setDatetime_event] = useState("");
  const [category_id, setCategory_id] = useState(0);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!router.isReady) return;
    fetchData(id);
  }, [router.isReady]);

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
        swal("selamat!", "kamu berhasil ikut event", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function fetchData(id) {
    if (localStorage.getItem("id")) {
      setUserId(localStorage.getItem("id"));
    }
    await EventServices.getByID(id)
      .then((res) => {
        setEvent(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const editEvent = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("hosted_by", hosted_by);
    formData.append("cover", cover);
    formData.append("datetime_event", datetime_event);
    formData.append("category_id", +category_id);
    formData.append("location", location);
    formData.append("description", description);
    // console.log(formData);

    setIsProcess(true);
    axios
      .put(`/api/events/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log(response);
        alert("berhasil");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        console.log("error");
      })
      .finally(setIsProcess(false));

    // fetchData(id);
  };

  const deleteEvent = async () => {
    setIsProcess(true);
    await axios
      .delete(`/api/events/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log(response);
        alert("berhasil hapus acara");
        // localStorage.removeItem("token");
        // localStorage.removeItem("id");
        // localStorage.removeItem("dark");
        Router.push("/");
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("gagal menghapus akun");
      })
      .finally(setIsProcess(false));
  };

  const processSpin = () => {
    if (isProcess) {
      return <ProcessSpin />;
    }
  };

  const eventAuth = () => {
    if (event.user_id == userId) {
      return (
        <>
          {processSpin}
          <Accordion text={"Edit Acara"}>
            <div className={styles.formContainer}>
              <form>
                <div className={`${styles.formpart} w-full`}>
                  <label htmlFor="">Judul acara</label>
                  <input
                    type="text"
                    className="rounded-md"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label htmlFor="">Diselenggarakan oleh</label>
                  <input
                    type="text"
                    className="rounded-md"
                    onChange={(e) => {
                      setHosted_by(e.target.value);
                    }}
                  />
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label htmlFor="">Deskripsi acara</label>
                  <input
                    type="text"
                    className="rounded-md"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>

                <div
                  className={`${styles.formpart} ${styles.radioButton} w-full`}
                >
                  <label htmlFor="">Kategori acara</label>
                  <section>
                    <input
                      type="radio"
                      name="kategori"
                      value={1}
                      className="rounded-md"
                      id="Education"
                      onClick={(e) => {
                        setCategory_id(e.target.value);
                      }}
                    />
                    <label htmlFor="Education">Edukasi</label>
                  </section>
                  <section>
                    <input
                      type="radio"
                      name="kategori"
                      value={2}
                      className="rounded-md"
                      id="Teknologi"
                      onClick={(e) => {
                        setCategory_id(e.target.value);
                      }}
                    />
                    <label htmlFor="Education">Teknologi</label>
                  </section>
                  <section>
                    <input
                      type="radio"
                      name="kategori"
                      value={3}
                      className="rounded-md"
                      id="Kesehatan"
                      onClick={(e) => {
                        setCategory_id(e.target.value);
                      }}
                    />
                    <label htmlFor="Education">Kesehatan</label>
                  </section>
                  <section>
                    <input
                      type="radio"
                      name="kategori"
                      value={4}
                      className="rounded-md"
                      id="Permainan"
                      onClick={(e) => {
                        setCategory_id(e.target.value);
                      }}
                    />
                    <label htmlFor="Education">Permainan</label>
                  </section>
                  <section>
                    <input
                      type="radio"
                      name="kategori"
                      value={5}
                      className="rounded-md"
                      id="Selebriti"
                      onClick={(e) => {
                        setCategory_id(e.target.value);
                      }}
                    />
                    <label htmlFor="Education">Selebriti</label>
                  </section>
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label htmlFor="">Lokasi</label>
                  <input
                    type="text"
                    className="rounded-md"
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                  />
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label htmlFor="">Gambar Cover</label>
                  <input
                    type="file"
                    className="rounded-md"
                    onInput={(e) => {
                      setCover(e.target.files[0]);
                    }}
                  />
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label htmlFor="">Tanggal Acara</label>
                  <input
                    type="date"
                    className="rounded-md"
                    onChange={(e) => {
                      setDatetime_event(e.target.value);
                    }}
                  />
                </div>
              </form>
              <Button
                text={"Edit Acara"}
                onClick={() => {
                  // editEvent();
                  editEvent();
                  console.log("edit acara");
                }}
              />
              <div
                className={`${styles.buttonDelete} w-full rounded-md p-2 bg-red-600 hover:bg-white hover:text-red-600 border-2 border-red-600`}
                onClick={() => {
                  // deleteWarn();
                  setDelAlert(true);
                }}
              >
                <TrashIcon className={`${styles.trashIc}`} />
                <h2>Hapus acara</h2>
              </div>
              {delAlert && (
                <Modal
                  text={"acara"}
                  exit={() => {
                    setDelAlert(false);
                  }}
                  cancel={() => {
                    setDelAlert(false);
                  }}
                  delete={() => {
                    deleteEvent();
                    // console.log("deleted");
                  }}
                />
              )}
            </div>
          </Accordion>
        </>
      );
    }
  };

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
        {/* <EventSponsor /> */}
        {eventAuth()}
        {/* {console.log(event.user_id)} */}
        <EventParticipants participants={event.participants} />
        <section className="mb-10">
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

// const [delAlert, setDelAlert] = useState(false);

// {
//   delAlert && (
//     <Modal
//       text={"akun"}
//       exit={() => {
//         setDelAlert(false);
//       }}
//       cancel={() => {
//         setDelAlert(false);
//       }}
//       delete={() => {
//         deleteAcc();
//         console.log("deleted");
//       }}
//     />
//   );
// }

// const [title, setTitle] = useState("");
// const [hosted_by, setHosted_by] = useState("");
// const [cover, setCover] = useState("");
// const [datetime_event, setDatetime_event] = useState("");
// const [category_id, setCategory_id] = useState(0);
// const [location, setLocation] = useState("");
// const [description, setDescription] = useState("");

//  const editEvent = () => {
//    const formData = new FormData();
//    formData.append("title", title);
//    formData.append("hosted_by", hosted_by);
//    formData.append("cover", cover);
//    formData.append("datetime_event", datetime_event);
//    formData.append("category_id", +category_id);
//    formData.append("location", location);
//    formData.append("description", description);
//    console.log(formData);

//    setIsProcess(true);
//    axios
//      .put(`/api/events/${id dari si event}`, formData, {
//        headers: {
//          "Content-Type": "multipart/form-data",
//          Authorization: `Bearer ${localStorage.getItem("token")}`,
//        },
//      })
//      .then((response) => {
//        console.log(response);
//        alert("berhasil");
//      })
//      .catch((err) => {
//        console.log(err);
//        console.log("error");
//      })
//      .finally(setIsProcess(false));
//  };
