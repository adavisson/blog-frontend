import React, { useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap';
import Post from './Post';

const blogUrl = "http://localhost:3001/blogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogId, setBlogId] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () =>{
      const result = await fetch(blogUrl);
      const data = await result.json();
      setBlogs(data);
    };
    fetchData();
  },{});

  const handleClick = e => {
    e.preventDefault();
    setBlogId(e.target.value);
    setClicked(true);
  }

  const renderPosts = () => {
    return (
      <>
        <h1>Blog Posts</h1>
        {blogs.map(post => {
          return (
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{`${post.content.substring(0,120)}...`}</Card.Text>
                <Button value={post.id} variant="primary" onClick={handleClick}>View Blog Post</Button>
              </Card.Body>
            </Card>
          )
        })}
      </>
    )
  }

  return (
    <div className="container">
      {!clicked && renderPosts()}
      {clicked && <Post id={blogId} />}
    </div>
  );
}
 
export default Blogs;