import React from "react";
import Link from "next/link";
import moment from "moment";

export default function Card(props) {
  return (
    <Link href={`/detail/${props.id}`}>
      <div className="flex flex-wrap md:flex-nowrap mx-auto w-full justify-center px-3 cursor-pointer">
        <div
          className="inline-block bg-cover w-full h-24 md:w-44 md:h-36 rounded-md mr-3 shrink-0  "
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        />
        <div className="py-4 w-full">
          <p className="text-xs lg:text-sm mb-2">
            {moment(props.date.slice(0, 10)).format("dddd, Do MMMM YYYY")}
          </p>
          <p className="text-sm lg:text-lg font-bold text-emerald-900 dark:text-slate-100 ">
            {props.title.length > 25
              ? props.title.slice(0, 25) + "..."
              : props.title}
          </p>
          <p className="inline-block text-sm font-medium">{props.host}</p>
          <p className="text-xs mt-3 dark:text-slate-200">
            peserta {props.attend}
          </p>
        </div>
      </div>
    </Link>
  );
}
