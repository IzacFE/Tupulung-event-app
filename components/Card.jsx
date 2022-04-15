import React from "react";

export default function Card(props) {
  return (
    <div className=" flex m-1 w-full">
      <div
        className="mx-auto bg-cover w-1/2 rounded-sm mr-3  "
        style={{
          backgroundImage: `url(${props.gambar})`,
        }}
      />
      <div className="py-4 w-1/2">
        <p className="text-sm mb-2">{props.tanggal}</p>
        <p className="text-lg font-bold text-emerald-900 dark:text-slate-100 ">
          {props.judul.length > 25
            ? props.judul.slice(0, 25) + "..."
            : props.judul}
        </p>
        <p className="text-sm font-medium">{props.penyelenggara}</p>
        <p className="text-xs mt-3 dark:text-slate-200">
          {props.jumlahPeserta}
        </p>
      </div>
    </div>
  );
}
