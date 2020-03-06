import React, { useState, useEffect } from 'react';

const blogUrl = "http://localhost:3001/blogs";

const EditBlogs = () => {
  const [blogs,setBlogs] = useState([]);

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
      <h1>Blogs</h1>
      {blogs.map(post => {
        return <p>{post.title} </p>
      })}
    </div>
  );
}
 
export default EditBlogs;