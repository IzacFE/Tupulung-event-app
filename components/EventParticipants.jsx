import React, { useEffect, useState } from "react";

export default function EventParticipants(props) {
  //   const [participants, setParticipants] = useState({});
  //   const [isLoading, setIsLoading] = useState(true);
  //   useEffect(() => {
  //       setParticipants(props);
  //     console.log(participants);
  //   }, []);

  const populatingParticipants = () => {
    if (props.participants == null) {
      return <div className="text-center">tidak ada participants</div>;
    }
    return props.participants.map((item, index) => (
      <div
        key={index}
        className="flex flex-wrap justify-center :justify-between "
      >
        <div className="py-8 px-8 max-w-sm  space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 lg:w-4/12">
          <div
            className="bg-cover block mx-auto h-16 w-16 rounded-full sm:mx-0 sm:shrink-0 "
            style={{
              backgroundImage: `url(${item.avatar})`,
            }}
          />
          <div className="text-center space-y-2 sm:text-left ">
            <div className="space-y-0.5">
              <p className="text-lg text-black font-semibold dark:text-white">
                {item.name}
              </p>
              <p className="text-slate-500 font-medium">{item.address}</p>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="mb-3">
      <p className="text-xl  font-medium mb-3">Peserta</p>
      <div className="container flex mx-auto ">{populatingParticipants()}</div>
    </section>
  );
}
