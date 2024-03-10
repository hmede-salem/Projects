import { Button, Card, Col, Row, Typography } from "antd";
import React, { useState } from "react";
import AddPost from "./AddPost";

const { Text, Title } = Typography;

const UserPosts = ({ posts, onAdd }) => {
  const [addTemp, setAddTemp] = useState(false);

  return (
    <div key={posts[0].userId}>
      <Row style={{ alignItems: "center" }}>
        <Col span={12}>
          <h2>Posts - User {posts[0].userId}</h2>
        </Col>
        <Col span={12}>
          <Button onClick={() => setAddTemp(true)} type="primary">
            Add Post
          </Button>
        </Col>
      </Row>
      <Card
        style={{
          height: "430px",
          backgroundColor: "#bababa",
          overflow: "auto",
          border: "solid black 4px",
          borderRadius: "15px",
        }}
      >
        {addTemp ? (
          <AddPost
            onCancel={(boolean) => setAddTemp(boolean)}
            userId={posts[0].userId}
            handleAdd={(post) => onAdd(post)}
          />
        ) : (
          posts.map((post, index) => (
            <Row
              key={index}
              style={{
                border: "solid black 2px",
                borderRadius: "20px",
                backgroundColor: "#dedcdc",
                padding: "8px",
                margin: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col span={24}>
                <Row>
                  <Col span={6}>
                    <Text>Title:</Text>
                  </Col>
                  <Col span={18}>
                    <Text>{post.title}</Text>
                  </Col>
                  <Col span={6}>Body:</Col>
                  <Col span={18}>{post.body}</Col>
                </Row>
              </Col>
            </Row>
          ))
        )}
      </Card>
    </div>
  );
};

export default UserPosts;
