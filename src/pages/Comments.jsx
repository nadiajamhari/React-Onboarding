import React, { useState, useEffect } from "react";

function Comments(props) {
  const [comments, setComments] = useState({});
  useEffect(() => {
    let mounted = true;
    async function fetchComment() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + props.id + "/comments"
      );
      const data = await res
        .json()
        .then((data) => {
          if (mounted) setComments(data);
        })
        .catch((err) => setErrors(err));
    }

    fetchComment();
  }, []);

  const commentElement =
    comments.length > 0 &&
    comments.map((comment) => (
      <div className="p-5 " key={comment.id}>
        <p className="text-black font-bold text-lg">{comment.email}</p>
        <p className="pt-3 text-gray-600">{comment.body}</p>
      </div>
    ));

  return (
    <div>
      <div className="text-3xl text-blue-800 font-bold py-5">Comments {`(${commentElement.length})`}</div>
      <input
        type="email"
        className=" border-2 border-blue-800 text-gray-900 text-sm rounded-lg w-1/2 p-2.5"
        placeholder="Email"
      />
      <div className="p-10 divide-y-2 divide-gray-300"> {commentElement}</div>
    </div>
  );
}

export default Comments;
