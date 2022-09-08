import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Comments from "./Comments";
import DataImage from "../data/Images";

function Post() {
  const params = useParams();

  const [hasError, setErrors] = useState(false);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + params.id
      );
      const data = await res
        .json()
        .then((data) => setDetail(data))
        .catch((err) => setErrors(err));
    }

    fetchData();
  });

  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-3/4 my-20 ">
        <Link to="/" className="flex items-center text-base font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <span className="pl-1">Back</span>
        </Link>
        <div className="text-3xl font-bold text-blue-900">{detail.title}</div>
        <div className="flex justify-center">
          <img
            src={
              parseInt(params.id) % 2 === 0
                ? DataImage[0].img
                : DataImage[1].img
            }
            alt={
              parseInt(params.id) % 2 === 0
                ? DataImage[0].desc
                : DataImage[1].desc
            }
            className="md:max-w-3xl place-self-center py-10"
          />
        </div>
        <div>{detail.body}</div>
        <hr className="my-5 border-black"></hr>
        <Comments id={params.id} />
        <hr className="my-5 border-black"></hr>
      </div>
    </div>
  );
}

export default Post;
