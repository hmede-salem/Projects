import { Button, Card, Col, Input, Row } from "antd";
import React, { useState } from "react";

const AddUser = ({ onCancel, onAdd }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    address: { city: "", street: "", zipcode: "" },
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
          <h2 style={{ marginRight: "10px" }}>Name:</h2>
          <Input
            placeholder="Enter your name.."
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
        </Col>
        <Col style={{ display: "flex", alignItems: "center" }} span={18}>
          <h2 style={{ marginRight: "10px" }}>Email:</h2>
          <Input
            placeholder="Enter your email.."
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
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
          <Button danger onClick={() => onCancel()}>
            Cancel
          </Button>
          <Button
            type="primary"
            style={{ marginLeft: "10px" }}
            onClick={() => {
              onAdd(newUser);
              onCancel();
            }}
          >
            Add
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default AddUser;
