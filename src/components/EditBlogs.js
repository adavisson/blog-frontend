import React, { useState, useEffect } from 'react';
import {Table, Button} from 'react-bootstrap';

const blogUrl = "http://localhost:3001/blogs";

const EditBlogs = () => {
  const [blogs,setBlogs] = useState([]);
  const [deleted, setDeleted] = useState(0);

  useEffect(() => {
    const fetchData = async () =>{
      const result = await fetch(blogUrl);
      const data = await result.json();
      setBlogs(data);
    };
    fetchData();
  },[deleted]);

  const handleDelete = async (e) => {
    e.preventDefault();
    const configObject = {
      method: "DELETE"
    };

    await fetch(`${blogUrl}/${e.target.value}`, configObject);
    setDeleted(deleted + 1);
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
                <td>{`${post.date}`.substring(0,10)}</td>
                <td><Button value={post.id} onClick={handleDelete}>Delete</Button></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
}
 
export default EditBlogs;