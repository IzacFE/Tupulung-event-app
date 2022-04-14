import React from "react";
import Image from "next/image";

<<<<<<< HEAD
export default function index() {
  return (
    <div>
      <div className="max-w-xs md:max-w-xl lg:max-w-3xl xl:max-w-7xl m-auto">
        <div className="pt-14 pb-2 mb-10  text-emerald-900 dark:text-slate-100 flex flex-col items-start">
          <p className="text-3xl font-bold text-emerald-900 dark:text-slate-100 ">
            Spotify music event
          </p>
          <p className="text-sm font-medium">penyelenggara A production</p>
        </div>

        {/* gambar */}

        <section className="mb-44">
          <div className="flex flex-row flex-wrap justify-around md:shrink">
            <div className="rounded-sm mr-10">
              <Image
                alt="Next.js logo"
                src="/undraw.png"
                width={600}
                height={350}
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <div className="block p-6 rounded-lg bg-orange-400 max-w-sm">
                <h5 className="text-white text-xl leading-tight font-medium mb-2">
                  MTV music indonesia
                </h5>
                <p className="text-slate-50 text-base mb-4">Mtv grup</p>
              </div>
              <div className="block p-6 rounded-lg bg-emerald-900 max-w-sm">
                <h5 className="text-white text-xl leading-tight font-medium mb-2">
                  Card title
                </h5>
                <p className="text-slate-50 text-base mb-4">waktu</p>
                <h5 className="text-white text-xl leading-tight font-medium mb-2">
                  Card title
                </h5>
                <p className="text-slate-50 text-base mb-4">tempat</p>
              </div>
            </div>
          </div>
        </section>
        <div>
          <p className="text-lg font-medium">Detail</p>
          <p className="mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            officia repellendus modi deleniti magni! Quibusdam earum debitis
            commodi, quo in consequatur! Cumque tempora impedit obcaecati
            tempore
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

        <section className="mb-52">
          <p className="mt-24 text-lg font-medium mb-10">Sponsor</p>
          <div className="flex justify-around flex-row flex-wrap mx-auto">
            <div className=" ">
              <Image
                alt="Next.js logo"
                src="/undraw.png"
                width={300}
                height={200}
              />
            </div>
            <div className="">
              {" "}
              <Image
                alt="Next.js logo"
                src="/undraw.png"
                width={300}
                height={200}
              />
            </div>
            <div className="4 ">
              {" "}
              <Image
                alt="Next.js logo"
                src="/undraw.png"
                width={300}
                height={200}
              />
            </div>
          </div>
        </section>

        {/* participant */}

        <section className="mb-20">
          <p className="mt-24 text-lg font-medium mb-10">partisipan(n)</p>
          <div className="flex flex-col space-y-10">
            <div className="flex flex-row flex-wrap">
              <div className="flex flex-col md:flex-row justify-around mx-auto space-x-9 flex-wrap">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                  className="rounded-full w-24 h-24 mx-auto"
                  alt="Avatar"
                />
                <div className="mt-5">
                  <h5 className="text-xl font-medium leading-tight mb-2">
                    John Doe
                  </h5>
                  <p className="text-gray-500">member</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-around mx-auto space-x-9 flex-wrap">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                  className="rounded-full w-24 h-24 mx-auto"
                  alt="Avatar"
                />
                <div className="mt-5">
                  <h5 className="text-xl font-medium leading-tight mb-2">
                    John Doe
                  </h5>
                  <p className="text-gray-500">member</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-around mx-auto space-x-9 flex-wrap">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                  className="rounded-full w-24 h-24 mx-auto"
                  alt="Avatar"
                />
                <div className="mt-5">
                  <h5 className="text-xl font-medium leading-tight mb-2">
                    John Doe
                  </h5>
                  <p className="text-gray-500">member</p>
                </div>
              </div>
              <div className="flex flex-row justify-around mx-auto space-x-9">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                  className="rounded-full w-24 h-24 mb-4 mx-auto"
                  alt="Avatar"
                />
                <div className="mt-5">
                  <h5 className="text-xl font-medium leading-tight mb-2">
                    John Doe
                  </h5>
                  <p className="text-gray-500">member</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

}
