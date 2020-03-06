import React, { useState, useEffect } from 'react';

const blogUrl = "http://localhost:3001/blogs";

const Post = (props) => {
  const [post,setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${blogUrl}/${props.id}`);
      const blog = await result.json();
      setPost(blog[0]);
    }
    fetchData();
  },{});

  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{`Posted on: ${post.date}`.substring(0,21)}</p>
      <p>{post.content}</p>
    </div>
  );
}
 
export default Post;