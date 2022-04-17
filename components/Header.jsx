import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

import { Disclosure, Menu } from "@headlessui/react";
import { LightBulbIcon } from "@heroicons/react/outline";
import styles from "../styles/Header.module.css";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [token, setToken] = useState(false);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchData();
      setToken(true);
    }
  }, []);

  const fetchData = async () => {
    await axios
      .get(`/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data.data.user.avatar);
        setAvatar(response.data.data.user.avatar);
      })
      .catch((err) => {
        console.log(err);
        console.log("error");
      });
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("dark");
    window.location.reload();
  };

  const themeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <LightBulbIcon
          className="w-7 h-7 bg-black"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <LightBulbIcon
          className="w-7 h-7 bg-white"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  const authenticationButton = () => {
    if (token) {
      return (
        <>
          <Menu as="div" className="ml-3 relative">
            <div>
              <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 hover:ring-offset-orange-400 focus:ring-white">
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src={`${avatar}`}
                  alt=""
                />
              </Menu.Button>
            </div>
            {/* Profile dropdown */}
            <Menu.Items className="origin-top-right absolute right-0 mt-5 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                <Link href="/profile/user">
                  <a className="block px-4 py-2 text-sm text-emerald-900 hover:bg-orange-400 hover:text-white">
                    Profil
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="#">
                  <a className="block px-4 py-2 text-sm text-emerald-900 hover:bg-orange-400 hover:text-white">
                    Acara saya
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <div
                  className="block px-4 py-2 text-sm text-emerald-900 hover:bg-orange-400 hover:text-white "
                  onClick={() => {
                    logOut();
                  }}
                >
                  Keluar
                </div>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </>
      );
    } else {
      return (
        <>
          <Link href="/authentication/login">
            <a
              className={
                "select-none mr-2 text-orange-400 dark:text-white hover:bg-orange-400 hover:text-white px-2 py-1 rounded-md text-m font-medium"
              }
            >
              Masuk
            </a>
          </Link>
          <Link href="/authentication/register">
            <a
              className={
                "select-none text-orange-400 dark:text-white hover:bg-orange-400 hover:text-white px-2 py-1 rounded-md text-m font-medium"
              }
            >
              Daftar
            </a>
          </Link>
        </>
      );
    }
  };

  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-900 drop-shadow-md">
      {() => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
              <div className="flex-shrink-0 flex items-center">
                <h2
                  className="text-orange-400 dark:text-white"
                  id={styles["logo"]}
                >
                  <Link href="/">
                    <a>Tupulung</a>
                  </Link>
                </h2>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4"></div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {themeChanger()}
                {authenticationButton()}
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
