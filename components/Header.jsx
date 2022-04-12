import { useTheme } from "next-themes";
import { Disclosure, Menu } from "@headlessui/react";
import { LightBulbIcon } from "@heroicons/react/outline";

import styles from "../styles/Header.module.css";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();

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

  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-900 drop-shadow-md">
      {() => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
              <div className="flex-shrink-0 flex items-center">
                <a href="/">
                  <h2
                    className="text-orange-400 dark:text-white"
                    id={styles["logo"]}
                  >
                    Tupulung
                  </h2>
                </a>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4"></div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {themeChanger()}
                <a
                  href="/authentication/login"
                  className={
                    "select-none mr-2 text-orange-400 dark:text-white hover:bg-orange-400 hover:text-white px-2 py-1 rounded-md text-m font-medium"
                  }
                >
                  Masuk
                </a>
                <a
                  href="/authentication/register"
                  className={
                    "select-none text-orange-400 dark:text-white hover:bg-orange-400 hover:text-white px-2 py-1 rounded-md text-m font-medium"
                  }
                >
                  Daftar
                </a>
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 hover:ring-offset-orange-400 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Menu.Items className="origin-top-right absolute right-0 mt-5 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      <a
                        href="#"
                        className=" block px-4 py-2 text-sm text-emerald-900"
                      >
                        Profil
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="#"
                        className=" block px-4 py-2 text-sm text-emerald-900"
                      >
                        Acara saya
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="#"
                        className=" block px-4 py-2 text-sm text-emerald-900"
                      >
                        Keluar
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
