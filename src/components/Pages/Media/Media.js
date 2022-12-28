import React from "react";
import { useLoaderData } from "react-router-dom";
import SinglePost from "../SinglePost/SinglePost";
import "./Media.css";

const Media = () => {
  const posts = useLoaderData();
  return (
    <div className="main-post">
      <div className="container">
        <h3 className="text-center text-lime-500 text-4xl font-bold mb-5 pt-12">
          All Posts
        </h3>
        <div className="media-section">
          {posts.map((post) => (
            <SinglePost key={post._id} post={post}></SinglePost>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
