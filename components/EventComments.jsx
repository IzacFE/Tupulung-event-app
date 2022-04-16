import React, { useEffect, useState } from "react";
import { getComments } from "../service/comment";
export default function EventComments(props) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDataComments(props.id);
  }, []);

  const fetchDataComments = async (id) => {
    const response = await getComments(id);
    if (response.code === 200) {
      setComments(response.data);
      setIsLoading(false);
    } else {
      alert("Something error, in category : " + response.error);
    }
  };

  const populatingComments = () => {
    if (comments.length > 0) {
      return comments.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg  w-auto h-auto dark:bg-slate-900 justify-center mb-3 p-5 flex items-center"
        >
          <div className="py-8 px-8 max-w-sm  space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 lg:w-4/12">
            <div
              className="bg-cover block mx-auto h-16 w-16 rounded-full sm:mx-0 sm:shrink-0 "
              style={{
                backgroundImage: `url(${item.user.avatar})`,
              }}
            />
            <div>
              <p className="text-lg">{item.user.name}</p>
              <p className="text-sm font-thin">{item.created_at}</p>
            </div>
          </div>
          <div className="w-full">
            <p>{item.comment}</p>
          </div>
        </div>
      ));
    }
    return <div className="text-center">tidak ada comments</div>;
  };

  return (
    <section className="mb-20">
      <div className="bg-white rounded-lg  w-auto h-auto dark:bg-slate-900 justify-center mb-10 p-5">
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
          dark:bg-slate-900
          border border-solid border-gray-300
          dark:border-gray-600
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
          className="inline-block px-10 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight rounded  hover:bg-orange-500  focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600  transition duration-150 ease-in-out"
        >
          kirim
        </button>
        {/* </div> */}
      </div>

      {populatingComments()}
    </section>
  );
}
