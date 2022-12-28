import React from "react";
import "./SinglePost.css";
import { Link } from "react-router-dom";

const SinglePost = ({ post }) => {
  const { message, img, _id } = post;
  return (
    <div className="main-user">
      <img className="message-img" src={img} alt="postImg" />
      <p>
        {message.length > 200 ? (
          message.slice(0, 200) + "..."
        ) : (
          <p>{message}</p>
        )}
      </p>
      <div className="text-center">
        <Link to={`/post/${_id}`}><button className="btn btn-wide">Details</button></Link>
      </div>
    </div>
  );
};

export default SinglePost;
