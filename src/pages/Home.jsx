import React, { useState, useEffect } from "react";
import CardPost from "./CardPost";

import "../styles/Home.css";

function Home() {
  const [hasError, setErrors] = useState(false);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res
        .json()
        .then((data) => setPosts(data))
        .catch((err) => setErrors(err));
    }

    fetchData();
  },[]);

  const cardElement =
    posts.length > 0 &&
    posts.map((post) => <CardPost postItem={post} key={post.id} />);

  return (
    <div className="font-Lato bg-custom-bg">
      <header className="flex justify-center  w-full bg-blue-800 ">
        <div className="flex justify-between text-white w-5/6 p-2">
          <div>
            We are now hosting events with Zoom Webinars!
            <a href="#" target="_blank">
              Find out more
            </a>
          </div>
          <button>X</button>
        </div>
      </header>
      <div className="flex flex-col items-center p-10">
        <h1 className="py-2 w-full text-center text-blue-900 font-bold text-4xl">
          Latest News
        </h1>
        <p className="text-base text-center w-1/2 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliq
        </p>
      </div>

      <div className="flex justify-center w-full py-10">
        <div className="grid md:grid-cols-3 gap-10  sm:grid-cols-1 content-center">
          {cardElement}
        </div>
      </div>
    </div>
  );
}

export default Home;
