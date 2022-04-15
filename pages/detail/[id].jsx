import React, { useEffect, useState } from "react";
import Image from "next/image";
import * as EventServices from "../../service/event";

export default function Index() {
  const [event, setEvent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    return EventServices.get({ limit: 10, page: 1 });
  };
  useEffect(() => {
    const data = fetchData();
    if (data.code === 200) {
      setEvent(data.data);
      setIsLoading(false);
    }
    console.log(data);
  }, []);
  return (
    <div className="">
      <div className="max-w-xs md:max-w-3xl  xl:max-w-7xl m-auto">
        <div className="pt-14 pb-2 mb-10  text-emerald-900 dark:text-slate-100 flex flex-col items-start">
          <p className="text-3xl font-bold text-emerald-900 dark:text-slate-100 ">
            Spotify music event
          </p>
          <p className="text-sm font-medium">penyelenggara A production</p>
        </div>

        {/* gambar */}

        <section className="mb-24">
          <div className="flex flex-wrap justify-between">
            <div className="sm:w-full md:w-6/12 rounded-sm">
              <div
                className="h-full  rounded-md  bg-cover"
                style={{
                  backgroundImage: `url(https://i1.sndcdn.com/avatars-ylM4tanwBXJZhjWb-X76mWw-t500x500.jpg)`,
                }}
              />
            </div>

            <div className="space-y-7 w-full sm:w-full md:w-5/12 ">
              <div className="flex p-6 rounded-lg bg-orange-400 w-full space-x-5">
                <div
                  className=" h-24 w-20 rounded-md bg-no-repeat "
                  style={{
                    backgroundImage: `url(https://i1.sndcdn.com/avatars-ylM4tanwBXJZhjWb-X76mWw-t500x500.jpg)`,
                  }}
                />
                <div>
                  <h5 className="text-white text-xl leading-tight font-medium mt-5 ">
                    MTV music indonesia
                  </h5>
                  <p className="text-slate-50 text-base mb-4">Mtv grup</p>
                </div>
              </div>
              <div className="p-6 rounded-lg bg-emerald-900 w-full ">
                <div className="flex items-center space-x-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-11 w-11 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white text-sm leading-tight font-medium ">
                      Card title
                    </h5>
                    <p className="text-slate-50 text-sm ">waktu</p>
                  </div>
                </div>
                <div className="w-full h-0.5 my-7 bg-slate-300" />
                <div className="flex items-center space-x-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-11 w-11 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white text-sm leading-tight font-medium">
                      Card title
                    </h5>
                    <p className="text-slate-50 text-sm ">waktu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mb-12">
          <p className="text-xl  font-medium mb-3">Detail</p>
          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            officia repellendus modi deleniti magni! Quibusdam earum debitis
            commodi, quo in consequatur! Cumque tempora impedit obcaecati
            tempore Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aut sint voluptatem sed numquam vitae qui inventore laboriosam earum
            facere ipsa, libero quis reprehenderit maiores cum nihil itaque?
            Error, laborum id.
            <br />
            <br />
            sed, rem quam deserunt? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Culpa officia repellendus modi deleniti magni!
            Quibusdam earum debitis commodi, quo in consequatur! Cumque tempora
            impedit obcaecati tempore sed, rem quam deserunt?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            officia voluptates quas esse aut aliquid cumque. Doloribus, impedit
            nemo deleniti dolor unde nesciunt modi, ipsam quod vero delectus
            fuga voluptates?
          </p>
        </div>

        <section className="mb-20">
          <div className="container mx-auto">
            <p className="text-xl  font-medium mb-7">Sponsor</p>
            <div className="flex justify-center  mx-auto space-x-10">
              <div className="w-4/12 bg-white h-20"></div>
              <div className="w-4/12 bg-white h-20"></div>
              <div className="w-4/12 bg-white h-20"></div>
            </div>
          </div>
        </section>

        {/* participant */}

        <section className="mb-3">
          <p className="text-xl  font-medium mb-3">Peserta(n)</p>
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center :justify-between ">
              <div className="py-8 px-8 max-w-sm  space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 lg:w-4/12">
                <div
                  className="bg-cover block mx-auto h-16 w-16 rounded-full sm:mx-0 sm:shrink-0 "
                  style={{
                    backgroundImage: `url(https://i1.sndcdn.com/avatars-ylM4tanwBXJZhjWb-X76mWw-t500x500.jpg)`,
                  }}
                />
                <div className="text-center space-y-2 sm:text-left ">
                  <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold dark:text-white">
                      Erin Lindford
                    </p>
                    <p className="text-slate-500 font-medium">
                      Product Engineer
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-8 px-8 max-w-sm  space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 lg:w-4/12">
                <div
                  className="bg-cover block mx-auto h-16 w-16 rounded-full sm:mx-0 sm:shrink-0"
                  style={{
                    backgroundImage: `url(https://i1.sndcdn.com/avatars-ylM4tanwBXJZhjWb-X76mWw-t500x500.jpg)`,
                  }}
                />
                <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                      Erin Lindford
                    </p>
                    <p className="text-slate-500 font-medium">
                      Product Engineer
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-8 px-8 max-w-sm  space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 lg:w-4/12">
                <div
                  className="bg-cover block mx-auto h-16 w-16 rounded-full sm:mx-0 sm:shrink-0"
                  style={{
                    backgroundImage: `url(https://i1.sndcdn.com/avatars-ylM4tanwBXJZhjWb-X76mWw-t500x500.jpg)`,
                  }}
                />
                <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                      Erin Lindford
                    </p>
                    <p className="text-slate-500 font-medium">
                      Product Engineer
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-8 px-8 max-w-sm  space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 lg:w-4/12">
                <div
                  className="bg-cover block mx-auto h-16 w-16 rounded-full sm:mx-0 sm:shrink-0"
                  style={{
                    backgroundImage: `url(https://i1.sndcdn.com/avatars-ylM4tanwBXJZhjWb-X76mWw-t500x500.jpg)`,
                  }}
                />
                <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                      Erin Lindford
                    </p>
                    <p className="text-slate-500 font-medium">
                      Product Engineer
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-8 px-8 max-w-sm  space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 lg:w-4/12">
                <div
                  className="bg-cover block mx-auto h-16 w-16 rounded-full sm:mx-0 sm:shrink-0"
                  style={{
                    backgroundImage: `url(https://i1.sndcdn.com/avatars-ylM4tanwBXJZhjWb-X76mWw-t500x500.jpg)`,
                  }}
                />
                <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                      Erin Lindford
                    </p>
                    <p className="text-slate-500 font-medium">
                      Product Engineer
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-8 px-8 max-w-sm  space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 lg:w-4/12">
                <div
                  className="bg-cover block mx-auto h-16 w-16 rounded-full sm:mx-0 sm:shrink-0"
                  style={{
                    backgroundImage: `url(https://i1.sndcdn.com/avatars-ylM4tanwBXJZhjWb-X76mWw-t500x500.jpg)`,
                  }}
                />
                <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                      Erin Lindford
                    </p>
                    <p className="text-slate-500 font-medium">
                      Product Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
