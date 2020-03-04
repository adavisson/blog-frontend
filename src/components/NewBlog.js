import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const blogUrl = "http://localhost:3001/blogs";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = {
      date: Date.now(),
      title: title,
      content: content
    }

    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(blog)
    }

    await fetch(blogUrl, configObject);
    setIsSubmitted(true);
  }

  const renderForm = () => {
    if(isSubmitted){
      return <Redirect to="/blogs" />
    }
    
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter Title" />
        </Form.Group>
        <Form.Group controlId="formContent">
          <Form.Control as="textarea" value={content} onChange={e => setContent(e.target.value)} placeholder="Write your blog post here" />
        </Form.Group>
        <Button type="submit" variant="primary">Post</Button>
      </Form>
    )
  }

  return (
    <div className="container">
      <h1>New Blog Post</h1>
      {renderForm()}
    </div>
  );
};

export default NewBlog;
