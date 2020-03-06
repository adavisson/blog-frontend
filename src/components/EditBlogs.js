import React, { useState, useEffect } from 'react';
import {Table, Button} from 'react-bootstrap';

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

  const handleDelete = e => {

  }

  return ( 
    <div className="blog-table">
      <h1>Blogs</h1>
      <Table striped border hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(post => {
            return(
              <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.date}</td>
                <td><Button onClick={handleDelete}>Delete</Button></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
}
 
export default EditBlogs;