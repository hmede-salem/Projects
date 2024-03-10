import { Button, Card, Col, Input, Row } from "antd";
import React, { useState } from "react";

const AddPost = ({ onCancel, userId, handleAdd }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    userId: userId,
  });

  return (
    <Card
      style={{
        border: "solid black 1.5px",
        borderRadius: "10px",
        boxShadow: "3px 3px 5px",
        height: "270px",
        padding: "20px",
      }}
    >
      <Row
        style={{
          justifyContent: "space-evenly",
          textAlign: "center",
        }}
      >
        <Col
          style={{
            display: "flex",
            alignItems: "center",
          }}
          span={18}
        >
          <h2 style={{ marginRight: "10px" }}>Title:</h2>
          <Input
            placeholder="Enter a post title.."
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </Col>
        <Col style={{ display: "flex", alignItems: "center" }} span={18}>
          <h2 style={{ marginRight: "10px" }}>Body:</h2>
          <Input
            placeholder="Enter a post body.."
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          />
        </Col>
      </Row>
      <Row
        style={{
          justifyContent: "flex-end",
          height: "70px",
        }}
      >
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            justifyItems: "flex-end",
          }}
          span={24}
        >
          <Button danger onClick={() => onCancel(false)}>
            Cancel
          </Button>
          <Button
            type="primary"
            style={{ marginLeft: "10px" }}
            onClick={() => {
              handleAdd(post);
              onCancel(false);
            }}
          >
            Add
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default AddPost;
