import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import styles from "../../styles/Profile.module.css";
// import PrEvCard from "../../components/PrEvCard";
import Tabs from "../../components/Tabs";
import Accordion from "../../components/Accordion";
import axios from "axios";
import Router from "next/router";
import LoadSpin from "../../components/LoadSpin";
import ProcessSpin from "../../components/ProcessSpin";
import { TrashIcon } from "@heroicons/react/outline";

export default function Profile() {
  const [token, setToken] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [isProcess, setIsProcess] = useState(false);
  // const [user]

  // the result of data fetching (profile, user events, followed events)
  const [profile, setProfile] = useState({});
  const [myEvent, setMyEvent] = useState([]);

  // formData of user profile, to be send to API
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [gender, setGender] = useState("");

  // form Data of Creating new event
  const [title, setTitle] = useState("");
  const [hosted_by, setHosted_by] = useState("");
  const [cover, setCover] = useState("");
  const [datetime_event, setDatetime_event] = useState("");
  const [category_id, setCategory_id] = useState(0);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      fetchProfile();
      fetchEvent();
    } else {
      Router.push("/");
    }
  }, []);

  const fetchProfile = () => {
    axios
      .get(`/api/users/${localStorage.getItem("id")}`)
      .then((response) => {
        setProfile(response.data.data);
        // console.log(response.data.data);
      })
      .catch((err) => {
        alert("error");
        console.log(err);
      })
      .finally(() => setIsReady(true));
  };

  const fetchEvent = () => {
    axios
      .get(`/api/users/${localStorage.getItem("id")}/events?limit=0&page=1`)
      .then((response) => {
        setMyEvent(response.data.data);
        // console.log(response.data.data);
      })
      .catch((err) => {
        alert("error");
        console.log(err);
      });
    // .finally(() => setIsReady(true));
  };

  const editProfile = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("gender", gender);
    formData.append("address", address);
    formData.append("avatar", avatar);
    formData.append("dob", dob);
    console.log(formData);

    setIsProcess(true);
    axios
      .put(`/api/users/${localStorage.getItem("id")}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        alert("berhasil");
        Router.push("/authentication/login");
      })
      .catch((err) => {
        console.log(err);
        console.log("error");
      })
      .finally(setIsProcess(false));
  };

  const newEvent = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("hosted_by", hosted_by);
    formData.append("cover", cover);
    formData.append("datetime_event", datetime_event);
    formData.append("category_id", +category_id);
    formData.append("location", location);
    formData.append("description", description);
    console.log(formData);

    setIsProcess(true);
    axios
      .post("/api/events", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        alert("berhasil");
        Router.push("/authentication/login");
      })
      .catch((err) => {
        console.log(err);
        console.log("error");
      })
      .finally(setIsProcess(false));
  };

  const processSpin = () => {
    if (isProcess) {
      return <ProcessSpin />;
    }
  };

  let result;
  if (isReady) {
    result = (
      <div className="w-4/5" id={styles["profileContainer"]}>
        {processSpin()}
        <section className="" id={styles["profile"]}>
          <h2
            className="text-emerald-900 dark:text-neutral-100"
            id={styles["profileHead"]}
          >
            Profil akun
          </h2>
          <div
            className="mx-auto rounded-full"
            id={styles["profileImage"]}
            style={{
              backgroundImage: `url(${profile.avatar})`,
            }}
          />

          <h2
            className="text-emerald-900 dark:text-neutral-100 text-center text-3xl"
            id={styles["profileName"]}
          >
            {profile.name}
          </h2>
          <h2 className="text-emerald-900 dark:text-neutral-100 text-center text-2xl">
            {profile.gender}
          </h2>
          <div className="w-full " id={styles["eventsNumber"]}>
            <section id={styles["attends"]}>
              <h2>Lahir</h2>
              <h3>{profile.dob.slice(0, 10)}</h3>
            </section>
            <section id={styles["host"]}>
              <h2>Alamat</h2>
              <h3>{profile.address}</h3>
            </section>
          </div>

          <Accordion>
            <article className="px-3 pb-3">
              <form>
                <div className={`${styles.formpart} w-full`}>
                  <label
                    htmlFor=""
                    className="text-emerald-900 dark:text-white"
                  >
                    Nama akun
                  </label>
                  <input
                    type="text"
                    className="rounded-md"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label
                    htmlFor=""
                    className="text-emerald-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="rounded-md"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label
                    htmlFor=""
                    className="text-emerald-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="rounded-md"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <div className={styles.gender}>
                    <label
                      htmlFor=""
                      className="text-emerald-900 dark:text-white"
                    >
                      Jenis kelamin
                    </label>
                    <div className={styles.radbtn}>
                      <div>
                        <input
                          type="radio"
                          name="gender"
                          value={"Pria"}
                          className="rounded-md text-emerald-900 dark:text-white"
                          onClick={(e) => {
                            setGender(e.target.value);
                          }}
                        />
                        <label className="text-emerald-900 dark:text-white ml-2">
                          Pria
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="gender"
                          value={"Wanita"}
                          className="rounded-md text-emerald-900 dark:text-white"
                          onClick={(e) => {
                            setGender(e.target.value);
                          }}
                        />
                        <label className="text-emerald-900 dark:text-white ml-2">
                          Wanita
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label
                    htmlFor=""
                    className="text-emerald-900 dark:text-white"
                  >
                    Alamat
                  </label>
                  <input
                    type="text"
                    className="rounded-md"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label
                    htmlFor=""
                    className="text-emerald-900 dark:text-white"
                  >
                    Gambar Profil
                  </label>
                  <input
                    type="file"
                    className="rounded-md"
                    onInput={(e) => {
                      setAvatar(e.target.files[0]);
                    }}
                  />
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label
                    htmlFor=""
                    className="text-emerald-900 dark:text-white"
                  >
                    Tanggal Lahir
                  </label>
                  <input
                    type="date"
                    className="rounded-md"
                    onChange={(e) => {
                      setDob(e.target.value);
                    }}
                  />
                </div>
              </form>
              <Button
                text={"Edit"}
                onClick={() => {
                  editProfile();
                }}
              />
            </article>
          </Accordion>

          <div className={`${styles.buttonDelete} w-full rounded-md p-2`}>
            <TrashIcon className={`${styles.trashIc} `} />
            <h2>Hapus akun</h2>
          </div>
          {/* <Button text={"Delete"} /> */}
        </section>

        <section id={styles["events"]}>
          <div id={styles["tabContainer"]}>
            {/* <h2
              className="text-emerald-900 dark:text-neutral-100"
              id={styles["tabEvents"]}
            >
              Acara Saya
            </h2> */}
            <Tabs data={myEvent}>
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
                text={"Buat"}
                onClick={() => {
                  newEvent();
                }}
              />
            </Tabs>
          </div>
        </section>
      </div>
    );
  } else {
    result = <LoadSpin />;
  }
  return <>{result}</>;
}
