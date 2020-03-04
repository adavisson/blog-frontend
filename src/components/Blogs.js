import React, { useEffect, useState } from 'react';

const blogUrl = "http://localhost:3001/blogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
      const result = await fetch(blogUrl);
      const data = await result.json();
      setBlogs(data);
    };
    fetchData();
  },{});

  return (
    <div>
      <h1>Blog Posts</h1>
      {blogs.map(post => {
        return <p>{post.title}</p>
      })}
    </div>
  );
}
 
export default Blogs;