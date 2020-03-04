import React, { useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap';

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
        return (
          <Card>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.content}</Card.Text>
              <Button variant="primary">View Blog Post</Button>
            </Card.Body>
          </Card>
        )
      })}
    </div>
  );
}
 
export default Blogs;