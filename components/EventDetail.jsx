import Image from "next/image";
import React from "react";

export default function EventDetail(props) {
  return (
    <>
      <div className="pt-14 pb-2 mb-10  text-emerald-900 dark:text-slate-100 flex flex-col items-start">
        <p className="text-3xl font-bold text-emerald-900 dark:text-slate-100 ">
          {props.title}
        </p>
        <p className="text-sm font-medium">{props.host}</p>
      </div>
      <section className="mb-24">
        <div className="flex flex-wrap justify-between">
          <div
            className="w-full md:w-6/12 rounded-sm bg-cover"
            style={{
              backgroundImage: `url(${props.image})`,
            }}
          ></div>

          <div className="space-y-7 w-full sm:w-full md:w-5/12 ">
            <div className="flex p-6 rounded-lg bg-orange-400 w-full space-x-5">
              <div
                className=" h-24 w-20 rounded-md bg-cover "
                style={{
                  backgroundImage: `url(${props.image})`,
                }}
              />
              <div>
                <h5 className="text-white text-xl leading-tight font-medium mt-5 ">
                  {props.host}
                </h5>
                <p className="text-slate-50 text-base mb-4">
                  grup {props.host}
                </p>
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
                    waktu
                  </h5>
                  <p className="text-slate-50 text-sm ">{props.date}</p>
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
                    lokasi
                  </h5>
                  <p className="text-slate-50 text-sm ">{props.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-12">
        <p className="text-xl  font-medium mb-3">Detail</p>
        <p className="text-justify">{props.description}</p>
      </div>
    </>
  );
}
