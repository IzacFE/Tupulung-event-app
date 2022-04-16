import React from "react";
import Link from "next/link";

export default function Card(props) {
  return (
    <Link href={`/detail/${props.id}`}>
      <div className=" flex m-1 w-full">
        <div
          className="mx-auto bg-cover w-1/2 h-auto rounded-sm mr-3  "
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        />
        <div className="py-4 w-full">
          <p className="text-sm mb-2">{props.date}</p>
          <p className="text-lg font-bold text-emerald-900 dark:text-slate-100 ">
            {props.title.length > 25
              ? props.title.slice(0, 25) + "..."
              : props.title}
          </p>
          <p className="text-sm font-medium">{props.host}</p>
          <p className="text-xs mt-3 dark:text-slate-200">
            peserta {props.attend}
          </p>
        </div>
      </div>
    </Link>
  );
}
