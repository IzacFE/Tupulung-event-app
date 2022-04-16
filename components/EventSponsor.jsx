import React from "react";

export default function EventSponsor() {
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <p className="text-xl  font-medium mb-7">Sponsor</p>
        <div className="flex justify-center  mx-auto space-x-10">
          <div className="w-4/12 bg-white dark:bg-slate-900 h-20"></div>
          <div className="w-4/12 bg-white h-20 dark:bg-slate-900"></div>
          <div className="w-4/12 bg-white h-20 dark:bg-slate-900"></div>
        </div>
      </div>
    </section>
  );
}
