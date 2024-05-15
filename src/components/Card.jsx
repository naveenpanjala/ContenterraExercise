import React, { useState, useEffect } from "react";
import "./Card.css";
import axios from "axios";

const Card = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.reddit.com/r/reactjs.json")
      .then((response) => {
        setPosts(response.data.data.children);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="cards-container">
      {posts.map((post) => (
        <div key={post.data.id} className="card">
          <h2 className="title">{post.data.title}</h2>
          {post.data.selftext_html && (
            <div className="selftext">{post.data.selftext}</div>
          )}
          <div className="url">
            <a href={post.data.url} target="_blank" rel="noopener noreferrer">
              {post.data.url}
            </a>
          </div>
          <div className="score">Score: {post.data.score}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
