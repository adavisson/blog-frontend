import React, { useEffect } from 'react';

const blogUrl = "http://localhost:3001/blogs";

const Blogs = () => {

  useEffect(() => {
    const fetchData = async () =>{
      const result = await fetch(blogUrl);
      const data = await result.json();
      console.log(data);
    };
    fetchData();
  });
  
  return (
    <h1>Blog Posts</h1>
  );
}
 
export default Blogs;