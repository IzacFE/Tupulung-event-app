import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import styles from "../../styles/Profile.module.css";
// import PrEvCard from "../../components/PrEvCard";
import Tabs from "../../components/Tabs";
import Accordion from "../../components/Accordion";
import axios from "axios";

export default function Profile() {
  const [token, setToken] = useState("");
  const [isReady, setIsReady] = useState(false);
  // const [user]

  // the result of data fetching (profile, user events, followed events)
  const [profile, setProfile] = useState({});
  const [myEvent, setMyEvent] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      fetchProfile();
      fetchEvent();
      setIsReady(true);
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
      });
    // .finally(() => setIsReady(true));
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

  let result;
  if (isReady) {
    result = (
      <div className="w-4/5" id={styles["profileContainer"]}>
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
              <h3>{profile.dob}</h3>
            </section>
            <section id={styles["host"]}>
              <h2>Alamat</h2>
              <h3>{profile.address}</h3>
            </section>
          </div>
          {/* <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
          molestiae repudiandae placeat unde magni doloribus cum voluptatum
          eaque ratione nobis atque rem, autem, consectetur neque error nesciunt
          quaerat nihil voluptas?
        </p> */}
          <Accordion>
            <article className="px-3 pb-3">
              <form>
                <div className={`${styles.formpart} w-full`}>
                  <label htmlFor="">Nama akun</label>
                  <input type="text" className="rounded-md" />
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label htmlFor="">Email</label>
                  <input type="email" className="rounded-md" />
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label htmlFor="">Password</label>
                  <input type="password" className="rounded-md" />
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label htmlFor="">Jenis kelamin</label>
                  <input type="text" className="rounded-md" />
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label htmlFor="">Alamat</label>
                  <input type="text" className="rounded-md" />
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label htmlFor="">Gambar Profil</label>
                  <input type="file" className="rounded-md" />
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label htmlFor="">Gambar Profil</label>
                  <input type="date" className="rounded-md" />
                </div>
              </form>
              <Button text={"Edit"} />
            </article>
          </Accordion>

          <Button text={"Delete"} />
        </section>
        <section id={styles["events"]}>
          <div id={styles["tabContainer"]}>
            <h2
              className="text-emerald-900 dark:text-neutral-100"
              id={styles["tabEvents"]}
            >
              Acara Saya
            </h2>
            <Tabs data={myEvent}>
              <form>
                <div className={`${styles.formpart} w-full`}>
                  <label htmlFor="">Judul acara</label>
                  <input type="text" className="rounded-md" />
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label htmlFor="">Deskripsi acara</label>
                  <input type="text" className="rounded-md" />
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
                    />
                    <label htmlFor="Education">Selebriti</label>
                  </section>
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label htmlFor="">Lokasi</label>
                  <input type="text" className="rounded-md" />
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label htmlFor="">Gambar Cover</label>
                  <input type="file" className="rounded-md" />
                </div>

                <div className={`${styles.formpart} w-full`}>
                  <label htmlFor="">Tanggal Acara</label>
                  <input type="date" className="rounded-md" />
                </div>
              </form>
              <Button text={"Buat"} />
            </Tabs>
          </div>
        </section>
      </div>
    );
  } else {
    result = <div></div>;
  }
  return <>{result}</>;
}
