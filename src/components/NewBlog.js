import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="container">
      <h1>New Blog Post</h1>
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter Title" />
        </Form.Group>
        <Form.Group controlId="formContent">
          <Form.Control as="textarea" value={content} onChange={e => setContent(e.target.value)} placeholder="Write your blog post here" />
        </Form.Group>
        <Button variant="primary">Post</Button>
      </Form>
    </div>
  );
};

export default NewBlog;
