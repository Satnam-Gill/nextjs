import React from "react";
import "@/app/style/Card.css"

const Blog = ({ item }) => {
  return (
    <div className="blog" >
      <div className="img">
        <img src="https://picsum.photos/350/130" alt="not img found" />
      </div>
      <div className="heading">{item.title}</div>   
      <div className="para">{item.body.slice(0, 200)}</div>
    </div>
  );
};

export default Blog;