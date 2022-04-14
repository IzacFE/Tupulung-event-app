import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

import Image from "next/image";
import loginPict from "../../public/authentication_picture.png";
import styles from "../../styles/Login.module.css";
import Button from "../../components/Button";

export default function Login() {
  const router = useRouter();
  const { params } = router.query;

  // Login and Register input states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Register Only input states
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");

  const dataSaver = (loginData) => {
    localStorage.setItem("token", loginData.token);
    localStorage.setItem("dark", loginData.user.dark_theme);
    localStorage.setItem("id", loginData.user.id);
  };

  const handleLogin = async () => {
    var config = {
      method: "post",
      url: "https://tupulung.wildani.com/api/auth",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: "&email=" + email + "&password=" + password,
    };

    await axios(config)
      .then((response) => {
        console.log(response.data);
        dataSaver(response.data.data);
        alert("berhasil");
      })
      .catch((response) => {
        console.log(response);
        alert("gagal");
      });
  };

  const handleRegister = async () => {
    await axios
      .post(`/api/users`, {
        name,
        email,
        password,
        gender,
        address,
        avatar,
        dob: "1999-09-09",
      })
      .then((response) => {
        console.log(response);
        alert("berhasil " + response);
      })
      .catch((err) => {
        console.log(err);
        console.log("error");
      });
  };

  let result;
  if (params === "login") {
    result = (
      <section id={styles["formContainer"]}>
        <h1 className="text-4xl text-emerald-900 dark:text-white">
          Masuk untuk memulai perjalanan anda
        </h1>
        <p className="text-md text-emerald-900 dark:text-white mt-2">
          Untuk bisnis, kegiatan sosial, dan festival
        </p>

        <form action="" id={styles["formInput"]}>
          {/* id={styles["inputForm"]} */}
          <div>
            <label htmlFor="" className="text-emerald-900 dark:text-white">
              Email
            </label>
            <input
              type="text"
              // value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="tupulung@gmail.com"
              className="text-emerald-900 rounded-md dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="" className="text-emerald-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password anda"
              className="text-emerald-900 rounded-md dark:text-white"
            />
          </div>
        </form>

        <Button
          text={"Masuk"}
          onClick={() => {
            handleLogin();
          }}
        />

        <p className="text-emerald-900 wd-full text-center mt-2 dark:text-white">
          Belum punya akun? daftar{" "}
          <Link href="/authentication/register">
            {" "}
            <a className="text-orange-400  hover:text-blue-500 dark:hover:text-white">
              disini
            </a>
          </Link>
        </p>
      </section>
    );
  } else if (params === "register") {
    result = (
      <section id={styles["formContainer"]}>
        <h1 className="text-4xl text-emerald-900 dark:text-white">Buat akun</h1>
        <p className="text-md text-emerald-900 dark:text-white mt-2">
          Untuk bisnis, kegiatan sosial, dan festival
        </p>

        <form action="" id={styles["formInput"]}>
          {/* id={styles["inputForm"]} */}
          <section>
            <div>
              <label htmlFor="" className="text-emerald-900 dark:text-white">
                Nama User
              </label>
              <input
                type="text"
                placeholder="tupulung"
                className="text-emerald-900 rounded-md dark:text-white"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="" className="text-emerald-900 dark:text-white">
                Email
              </label>
              <input
                type="text"
                placeholder="tupulung@gmail.com"
                className="text-emerald-900 rounded-md dark:text-white"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </section>

          <section>
            <div>
              <label htmlFor="" className="text-emerald-900 dark:text-white">
                Password
              </label>
              <input
                type="password"
                placeholder="Password anda"
                className="text-emerald-900 rounded-md dark:text-white"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="" className="text-emerald-900 dark:text-white">
                Gender
              </label>
              <input
                type="text"
                placeholder="Pria / Wanita"
                className="text-emerald-900 rounded-md dark:text-white"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
            </div>
          </section>

          <section>
            <div>
              <label htmlFor="" className="text-emerald-900 dark:text-white">
                Alamat
              </label>
              <input
                type="text"
                placeholder="Jalan Soedirman, Purwokerto, Jawa Tengah Indonesia"
                className="text-emerald-900 rounded-md dark:text-white"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="" className="text-emerald-900 dark:text-white">
                Gambar Profile
              </label>
              <input
                type="text"
                placeholder="url gambar ( http: ... )"
                className="text-emerald-900 rounded-md dark:text-white"
                onChange={(e) => {
                  setAvatar(e.target.value);
                }}
              />
            </div>
          </section>
        </form>

        <Button
          text={"Buat akun"}
          onClick={() => {
            handleRegister();
          }}
        />
      </section>
    );
  }

  return (
    <>
      <div id={styles["loginLayout"]}>
        <div id={styles["authImage"]}>
          <Image
            src={loginPict}
            alt="Picture of the author"
            layout="responsive"
          />
        </div>
        {result}
      </div>
    </>
  );
}
