import React from "react";
import { Link } from "react-router-dom";

import DataImage from "../data/Images.js";

function CardPost(props) {
  return (
    <div className="bg-white max-w-xs rounded-xl overflow-hidden shadow-xl flex flex-col justify-between">
      <div>
        <div className="relative">
          <img
            className="w-full h-60"
            src={
              parseInt(props.postItem.id) % 2 == 0
                ? DataImage[0].img
                : DataImage[1].img
            }
            alt={
              parseInt(props.postItem.id) % 2 == 0
                ? DataImage[0].decs
                : DataImage[1].decs
            }
          />
          <button className="absolute bottom-3 right-3 bg-custom-purple bg-opacity-80 text-white text-xs font-semibold px-4 py-1 rounded-full">
            News
          </button>
        </div>

        <div className="p-5">
          <div className="font-extrabold text-2xl pr-6">
            {props.postItem.title}
          </div>
          <div className="line-clamp-2 pt-2 pr-5 text-gray-400">
            {props.postItem.body}
          </div>
        </div>
      </div>

      <div className="p-5">
        <Link
          to={`/post/${props.postItem.id}`}
          className="text-blue-800 font-extrabold text-sm"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}

export default CardPost;
