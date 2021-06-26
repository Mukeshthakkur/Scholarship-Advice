import React, { useState } from "react";

function Addpost() {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ "Title =>": title, Post: post });
  };

  return (
    <div>
      <div className="bg-blue-500 flex-column text-center">
        <h3 className="text-xl">Post Page</h3>
        <form  onSubmit={handleSubmit}>
          <input
            className="rounded-lg w-4/12 p-2"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title.."
          />
          <input
            className="w-6/12 p-2 rounded-lg"
            type="text"
            placeholder="Enter post body"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <input
            type="file"
            placeholder="Post Feature Image"
            className="bg-white-600"
          />
          <div className="m-10">
            <button className="publish__btn">Publish Post</button>
            <button className="draft__btn">Draft</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addpost;
