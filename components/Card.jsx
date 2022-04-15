import React from "react";

export default function Card(props) {
  return (
    <div className="">
      <div className="flex col space-x-6">
        <div
          className="mx-auto bg-cover w-32 rounded-sm"
          style={{
            backgroundImage: `url(${props.gambar})`,
          }}
        />
        <div className="py-4">
          <p className="text-sm mb-2">{props.tanggal}</p>
          <p className="text-3xl font-bold text-emerald-900 dark:text-slate-100 ">
            {props.judul}
          </p>
          <p className="text-sm font-medium">{props.penyelenggara}</p>
          <p className="text-xs mt-3 dark:text-slate-200">
            {props.jumlahPeserta}
          </p>
        </div>
      </div>
    </div>
  );
}
