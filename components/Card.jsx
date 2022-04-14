import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <div className="flex justify-center">
      {/* <div className="flex flex-col md:flex-row md:max-w-md rounded-lg ">
        <img
          className=" w-full h-30 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
          <p className="text-gray-700 text-base mb-4">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
        </div>
      </div>
    </div> */}

      {/* //     <div className="p-6 max-w-sm mx-auto  rounded-xl  flex items-center space-x-4">
    //       <div className="shrink-0">
    //         <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
    //       </div>
    //       <div>
    //         <div className="text-xl font-medium text-black">ChitChat</div>
    //         <p className="text-slate-500">You have a new message!</p>
    //       </div> */}

      <div className="flex justify-center col">
        <div className="rounded-md mx-4">
          <Image
            alt="Next.js logo"
            src="/undraw.png"
            width={250}
            height={120}
          />
        </div>
        <div className="">
          <p className="text-sm mb-2">Rabu, 13 April 2022</p>
          <p className="text-3xl font-bold text-emerald-900 dark:text-slate-100 ">
            Spotify music event
          </p>
          <p className="text-sm font-medium">penyelenggara A production</p>
          <p className="text-xs mt-3 dark:text-slate-200">30 peserta</p>
        </div>
      </div>
    </div>
  );
}
