import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/UsersContext";
import "./Post.css";

const Post = () => {
  const { user } = useContext(AuthContext);
  const imgKey = "2ed74405c9982edbe45a4ac8ae219bfb";
  const handlePost = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    const image = event.target.img.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        addToDatabase(message, data.data.display_url, user, event);
      });
  };

  const addToDatabase = (message, img, user, event) => {
    const Post = {
      message,
      img,
      userName: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
    };
    fetch("http://localhost:5002/media", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Post),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Post Successful");
        event.target.reset();
      });
  };

  return (
    <div className="post-section">
      <div className="post-section">
        <h3>Share Your Fellings</h3>
        <form onSubmit={handlePost}>
          <textarea
            className="textarea textarea-success w-full"
            placeholder="Type your Fellings"
            name="message"
          ></textarea>
          <input
            type="file"
            className="input-info w-full max-w-xs"
            name="img"
            accept="image/*"
          />
          <br />
          <input
            type="submit"
            value="Post"
            className="btn btn-wide w-full mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default Post;
