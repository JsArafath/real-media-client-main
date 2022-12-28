import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import "./Detalis.css";

const Details = () => {
  const details = useLoaderData();
  const { photoURL, userName, email, img, message } = details;
  const [click, setClick] = useState(false);
  return (
    <div className="details-section">
      <div className="container">
        <div className="main-user">
          <div className="user-section">
            {photoURL ? (
              <img className="img-user" src={photoURL} alt="userImg" />
            ) : (
              <FaUserAlt className="user" />
            )}
            <div className="md:pl-3 pl-1">
              <h2>{userName}</h2>
              <h5>{email}</h5>
            </div>
          </div>
          <p>{message}</p>
          <img className="message-img" src={img} alt="postImg" />
          <div className="flex justify-between py-5 px-2">
            <h6 className="text-orange-600 font-bold text-xl">
              20 People Love
            </h6>
            <span className="text-2xl" onClick={() => setClick(!click)}>
              {click ? (
                <Link>
                  <BsHeartFill />
                </Link>
              ) : (
                <Link>
                  <BsHeart />
                </Link>
              )}
            </span>
          </div>
          <div>
            <h3 className="text-emerald-400 text-xl mb-2">Comment</h3>
            <textarea
              className="textarea textarea-success w-full"
              placeholder="Type your Comment"
              name="comment"
            ></textarea>
            <input
              type="submit"
              value="Submit Comment"
              className="btn btn-wide mt-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
